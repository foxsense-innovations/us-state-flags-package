// TypeScript definitions for us-state-flags React components

import * as React from 'react';

// State data interface (re-exported for convenience)
export interface StateData {
  name: string;
  abbreviation: string;
  territory: boolean;
  capital: string;
  contiguous: boolean;
  timezone: string[];
  logo: {
    svg: string;
  };
}

// Component props interface
export interface USStateFlagsProps {
  // Core
  state: string;                        // "CA" or "California"
  
  // Display Options
  showFlag?: boolean;                   // Show state flag
  showName?: boolean;                   // Show "California"
  showAbbreviation?: boolean;          // Show "CA"
  showCapital?: boolean;               // Show "Sacramento"
  
  // Flag Options (only when showFlag=true)
  flagSize?: 'xs' | 'sm' | 'md' | 'lg'; // 16px|36px|75px|225px
  // Image format
  flagAlt?: string;                    // Custom alt text
  
  // Layout & Style
  layout?: 'horizontal' | 'vertical';   // Direction
  className?: string;                   // CSS class
  style?: React.CSSProperties;          // Container styles
  nameStyle?: React.CSSProperties;      // Name text styles
  abbreviationStyle?: React.CSSProperties; // Abbreviation styles
  capitalStyle?: React.CSSProperties;   // Capital text styles
  
  // Events
  onClick?: (stateData: StateData) => void;    // Click handler
  onFlagLoad?: () => void;             // Flag loaded
  onFlagError?: () => void;            // Flag failed
}

// Component declaration
export declare const USStateFlags: React.FC<USStateFlagsProps>;
export default USStateFlags; 
