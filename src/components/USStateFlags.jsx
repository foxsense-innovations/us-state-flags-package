const React = require('react');
const { useState, useEffect } = React;
const PropTypes = require('prop-types');

const statesData = require('../data/states.json');

let FlagComponentsMap, FlagAspectRatios;
try {
  const flagsModule = require('./flags');
  FlagComponentsMap = flagsModule.FlagComponentsMap || {};
  FlagAspectRatios = flagsModule.FlagAspectRatios || {};
} catch (error) {
  console.warn('Flag components not found. Make sure flag components are generated.');
  FlagComponentsMap = {};
  FlagAspectRatios = {};
}

// Helper functions
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

const USStateFlags = ({
  // Core props
  state,
  
  // Display options
  showFlag = false,
  showName = false,
  showAbbreviation = false,
  showCapital = false,
  
  // Flag options
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
      stateData = getStateByAbbreviation(state) || getStateByName(state);
    }
    
    if (!stateData) {
      errors.push(`State "${state}" not found`);
    }
    
    return { errors, stateData };
  };

  const { errors, stateData } = validateAndGetState();

  // Handle click events
  const handleClick = () => {
    if (onClick && stateData) {
      onClick(stateData);
    }
  };

  const getFlagDimensions = () => {
  const baseSizes = {
    xs: 16,    
    sm: 36,     
    md: 75,    
    lg: 225    
  };
  
  const width = baseSizes[flagSize] || baseSizes.md;
  const height = Math.round(width / 1.5);
  
  return { width, height };
};

const renderFlag = () => {
  if (!showFlag || !stateData) return null;
  
  // Get the flag component for this state
  const FlagComponent = FlagComponentsMap[stateData.abbreviation];
  
  if (!FlagComponent) {
    // Return null instead of rendering error display
    return null;
  }
  
  const dimensions = getFlagDimensions();
  
  return React.createElement(FlagComponent, {
    key: 'flag',
    width: dimensions.width,
    height: dimensions.height,
    className: `us-state-flag flag-size-${flagSize}`,
    style: {
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
      cursor: onClick ? 'pointer' : 'default',
      display: 'block',
      flexShrink: 0, // Prevent flag from shrinking
      // Remove margin auto for better layout control
      overflow: 'visible'
    },
    title: flagAlt || `${stateData.name} flag`,
    onLoad: onFlagLoad,
    onError: onFlagError
  });
};

if (errors.length > 0) {
  const isStateNotFound = errors.length === 1 && errors[0].includes('not found');
  
  // If it's just a state not found error, return null (render nothing)
  if (isStateNotFound) {
    return null;
  }
  
  // For other configuration errors, still show the error
  const errorChildren = [];
  const headerText = 'Configuration Error:';
  const icon = '⚠️';
  
  errorChildren.push(React.createElement('div', {
    key: 'error-header',
    style: { fontWeight: 'bold', marginBottom: '4px' }
  }, `${icon} ${headerText}`));
  
  if (errors.length === 1) {
    errorChildren.push(React.createElement('div', {
      key: 'single-error',
      style: { marginLeft: '4px' }
    }, `• ${errors[0]}`));
  } else {
    errorChildren.push(React.createElement('ul', {
      key: 'error-list',
      style: { margin: '0', paddingLeft: '16px' }
    }, errors.map((error, index) => 
      React.createElement('li', { key: index }, error)
    )));
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
      background: '#e9ecef',
      padding: '2px 6px',
      borderRadius: '4px',
      ...abbreviationStyle 
    }
  }, stateData.abbreviation);

  const capitalElement = showCapital && React.createElement('span', {
    className: 'state-capital',
    style: { 
      fontSize: '0.85em',
      color: '#666',
      fontStyle: 'italic',
      ...capitalStyle 
    }
  }, `Capital: ${stateData.capital}`);

const containerStyle = {
  display: 'flex',
  alignItems: layout === 'horizontal' ? 'center' : 'center', 
  flexDirection: layout === 'horizontal' ? 'row' : 'column',
  gap: layout === 'horizontal' ? '12px' : '8px', 
  cursor: onClick ? 'pointer' : 'default',
  width: 'fit-content', 
  ...style
};

const textContainerStyle = {
  display: 'flex',
  flexDirection: layout === 'horizontal' ? 'column' : 'column', 
  alignItems: layout === 'horizontal' ? 'flex-start' : 'center', 
  gap: '2px',
  minWidth: 0, 
  textAlign: layout === 'horizontal' ? 'left' : 'center' 
};
  const children = [];
  
  const flagElement = renderFlag();
  if (flagElement) {
    children.push(flagElement);
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

  return React.createElement('div', {
    className: `us-state-display layout-${layout} flag-components ${className}`,
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
  
  // Flag options
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

USStateFlags.displayName = 'USStateFlags';

// CommonJS export
module.exports = USStateFlags;