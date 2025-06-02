const React = require('react');
const { useState, useEffect } = React;
const PropTypes = require('prop-types');

// Import the states data - this will work with the existing package structure
const statesData = require('../data/states.json');

// Helper functions (could also import from main package)
const getStateByName = (name) => {
  if (!name || typeof name !== 'string') return null;
  return statesData.find(state => 
    state.name.toLowerCase() === name.toLowerCase()
  ) || null;
};

const getStateByAbbreviation = (abbr) => {
  if (!abbr || typeof abbr !== 'string') return null;
  return statesData.find(state => 
    state.abbreviation.toLowerCase() === abbr.toLowerCase()
  ) || null;
};

/**
 * USStateFlags - A comprehensive React component for displaying US state information
 * 
 * Features:
 * - Display state flags (SVG-only), names, abbreviations, and capitals
 * - Multiple layout options (horizontal/vertical)
 * - Scalable SVG flags with CSS sizing
 * - Customizable styling and sizing
 * - Prop validation and error handling
 * - Click event support
 * - TypeScript support
 * - Offline ready (no CDN dependency)
 */
const USStateFlags = ({
  // Core props
  state,
  
  // Display options
  showFlag = false,
  showName = false,
  showAbbreviation = false,
  showCapital = false,
  
  // Flag options (only valid when showFlag=true)
  flagSize = 'md',
  flagAlt,
  
  // Layout & styling
  layout = 'horizontal',
  className = '',
  style = {},
  nameStyle = {},
  abbreviationStyle = {},
  capitalStyle = {},
  
  // Event handlers
  onClick,
  onFlagLoad,
  onFlagError
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true); // Default to true for SSR

  // Check if we're in browser environment
  const isBrowser = typeof window !== 'undefined';

  // Validation and state data resolution
  const validateAndGetState = () => {
    const errors = [];
    
    // Check if at least one display option is enabled
    if (!showFlag && !showName && !showAbbreviation && !showCapital) {
      errors.push('At least one display option must be enabled (showFlag, showName, showAbbreviation, or showCapital)');
    }
    
    // Validate flag-related props only when showFlag is false
    if (!showFlag) {
      const flagProps = [];
      if (flagSize !== 'md') flagProps.push('flagSize');
      if (flagAlt) flagProps.push('flagAlt');
      
      if (flagProps.length > 0) {
        errors.push(`${flagProps.join(', ')} can only be used when showFlag=true`);
      }
    }
    
    // Validate flagSize
    if (showFlag && !['xs', 'sm', 'md', 'lg'].includes(flagSize)) {
      errors.push('flagSize must be one of: xs, sm, md, lg');
    }
    
    // Validate layout
    if (!['horizontal', 'vertical'].includes(layout)) {
      errors.push('layout must be either "horizontal" or "vertical"');
    }
    
    // Find state data
    let stateData = null;
    if (state) {
      // Try by abbreviation first, then by name
      stateData = getStateByAbbreviation(state) || getStateByName(state);
    }
    
    if (!stateData) {
      errors.push(`State "${state}" not found`);
    }
    
    return { errors, stateData };
  };

  const { errors, stateData } = validateAndGetState();

  // Handle image load events
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
    if (onFlagLoad) {
      onFlagLoad();
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
    if (onFlagError) {
      onFlagError();
    }
  };

  // Handle click events
  const handleClick = () => {
    if (onClick && stateData) {
      onClick(stateData);
    }
  };

  // Get flag image path (SVG-only)
  const getFlagImagePath = () => {
    if (!stateData || !showFlag) return '';
    
    // SVG-only: always return the SVG path
    return stateData.logo.svg;
  };

  // Get flag dimensions for CSS sizing
  const getFlagDimensions = () => {
    const dimensions = {
      xs: { width: 16, height: 12 },   // Small icons (16:12 aspect ratio)
      sm: { width: 36, height: 27 },   // List items (36:27 aspect ratio)
      md: { width: 75, height: 56 },   // Default cards (75:56 aspect ratio)
      lg: { width: 225, height: 169 }  // Large displays (225:169 aspect ratio)
    };
    return dimensions[flagSize] || dimensions.md;
  };

  // Get flag styles optimized for SVG scaling
  const getFlagStyles = () => {
    const baseDimensions = getFlagDimensions();
    
    return {
      // Set explicit dimensions for consistent sizing
      width: baseDimensions.width,
      height: baseDimensions.height,
      
      // SVG optimization settings
      objectFit: 'contain',
      display: imageError ? 'none' : 'block',
      
      // Ensure crisp rendering of SVG
      imageRendering: flagSize === 'xs' ? 'pixelated' : 'auto',
      shapeRendering: 'auto',
      
      // Smooth scaling transitions
      transition: 'all 0.2s ease',
      
      // Ensure proper aspect ratio
      aspectRatio: `${baseDimensions.width} / ${baseDimensions.height}`,
      
      // SVG-specific optimizations
      maxWidth: '100%',
      height: 'auto'
    };
  };

  // Error display component
  if (errors.length > 0) {
    const errorChildren = [];
    
    // Error header
    const isStateNotFound = errors.length === 1 && errors[0].includes('not found');
    const headerText = isStateNotFound ? 
      `State "${state}" not found` : 
      'Configuration Error:';
    const icon = isStateNotFound ? '❌' : '⚠️';
    
    errorChildren.push(React.createElement('div', {
      key: 'error-header',
      style: { fontWeight: 'bold', marginBottom: '4px' }
    }, `${icon} ${headerText}`));
    
    // Error list for multiple errors
    if (errors.length > 1 || !isStateNotFound) {
      if (errors.length === 1 && !isStateNotFound) {
        // Single configuration error
        errorChildren.push(React.createElement('div', {
          key: 'single-error',
          style: { marginLeft: '4px' }
        }, `• ${errors[0]}`));
      } else if (errors.length > 1) {
        // Multiple errors as list
        errorChildren.push(React.createElement('ul', {
          key: 'error-list',
          style: { margin: '0', paddingLeft: '16px' }
        }, errors.map((error, index) => 
          React.createElement('li', { key: index }, error)
        )));
      }
    }
    
    return React.createElement('div', {
      className: `us-state-display error ${className}`,
      style: {
        color: '#d32f2f',
        padding: '8px',
        border: '1px solid #ffcdd2',
        backgroundColor: '#ffebee',
        borderRadius: '4px',
        fontSize: '14px',
        ...style
      }
    }, errorChildren);
  }

  // Main component structure
  const flagElement = showFlag && React.createElement('img', {
    src: getFlagImagePath(),
    alt: flagAlt || `${stateData.name} flag`,
    className: `us-state-flag flag-size-${flagSize}`,
    style: getFlagStyles(),
    onLoad: handleImageLoad,
    onError: handleImageError
  });

  const nameElement = showName && React.createElement('span', {
    className: 'state-name',
    style: { 
      fontWeight: '500',
      ...nameStyle 
    }
  }, stateData.name);

  const abbreviationElement = showAbbreviation && React.createElement('span', {
    className: 'state-abbreviation',
    style: { 
      fontWeight: '600',
      fontSize: '0.9em',
      ...abbreviationStyle 
    }
  }, stateData.abbreviation);

  const capitalElement = showCapital && React.createElement('span', {
    className: 'state-capital',
    style: { 
      fontSize: '0.85em',
      color: '#666',
      ...capitalStyle 
    }
  }, `Capital: ${stateData.capital}`);

  // Layout styles
  const containerStyle = {
    display: 'flex',
    alignItems: layout === 'horizontal' ? 'center' : 'flex-start',
    flexDirection: layout === 'horizontal' ? 'row' : 'column',
    gap: layout === 'horizontal' ? '8px' : '4px',
    cursor: onClick ? 'pointer' : 'default',
    ...style
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: layout === 'horizontal' ? 'row' : 'column',
    alignItems: layout === 'horizontal' ? 'center' : 'flex-start',
    gap: layout === 'horizontal' ? '8px' : '2px',
    flexWrap: 'wrap'
  };

  // Build children array
  const children = [];
  
  if (flagElement) {
    children.push(React.createElement('div', { key: 'flag' }, flagElement));
  }
  
  if (showName || showAbbreviation || showCapital) {
    const textChildren = [];
    if (nameElement) textChildren.push(React.createElement('div', { key: 'name' }, nameElement));
    if (abbreviationElement) textChildren.push(React.createElement('div', { key: 'abbr' }, abbreviationElement));
    if (capitalElement) textChildren.push(React.createElement('div', { key: 'capital' }, capitalElement));
    
    children.push(React.createElement('div', {
      key: 'text-container',
      className: 'us-state-text',
      style: textContainerStyle
    }, textChildren));
  }
  
  // Loading state for SVG (only in browser)
  if (isBrowser && showFlag && !imageLoaded && !imageError) {
    children.push(React.createElement('div', {
      key: 'loading',
      className: 'flag-loading',
      style: {
        ...getFlagDimensions(),
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        color: '#999',
        border: '1px dashed #ddd',
        borderRadius: '4px'
      }
    }, 'Loading SVG...'));
  }
  
  // Error state for SVG (only in browser)
  if (isBrowser && showFlag && imageError) {
    children.push(React.createElement('div', {
      key: 'error',
      className: 'flag-error',
      style: {
        ...getFlagDimensions(),
        backgroundColor: '#ffebee',
        border: '1px solid #ffcdd2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        color: '#d32f2f',
        textAlign: 'center',
        borderRadius: '4px',
        flexDirection: 'column'
      }
    }, [
      React.createElement('span', { key: 'icon' }, '🚫'),
      React.createElement('span', { key: 'text', style: { marginTop: '2px' } }, 'SVG unavailable')
    ]));
  }

  return React.createElement('div', {
    className: `us-state-display layout-${layout} svg-flags ${className}`,
    style: containerStyle,
    onClick: handleClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onKeyPress: onClick ? (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    } : undefined
  }, children);
};

USStateFlags.propTypes = {
  // Core
  state: PropTypes.string.isRequired,
  
  // Display options
  showFlag: PropTypes.bool,
  showName: PropTypes.bool,
  showAbbreviation: PropTypes.bool,
  showCapital: PropTypes.bool,
  
  // Flag options (removed flagFormat - SVG only now)
  flagSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  flagAlt: PropTypes.string,
  
  // Layout & styling
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  style: PropTypes.object,
  nameStyle: PropTypes.object,
  abbreviationStyle: PropTypes.object,
  capitalStyle: PropTypes.object,
  
  // Events
  onClick: PropTypes.func,
  onFlagLoad: PropTypes.func,
  onFlagError: PropTypes.func
};

// CommonJS export
module.exports = USStateFlags;