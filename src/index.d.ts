import * as React from 'react';

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

export interface CountData {
  total: number;
  states: number;
  territories: number;
  contiguous: number;
  nonContiguous: number;
}

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

export declare const USStateFlags: React.FC<USStateFlagsProps>;

// Main data export
export declare const states: StateData[];

// Core lookup functions
export declare function getStateByAbbreviation(abbr: string): StateData | null;
export declare function getStateByName(name: string): StateData | null;
export declare function getStateByCapital(capital: string): StateData | null;

// Filtering functions
export declare function getTerritories(): StateData[];
export declare function getStates(): StateData[];
export declare function getContiguousStates(): StateData[];
export declare function getNonContiguousStates(): StateData[];
export declare function getStatesByTimezone(timezone: string): StateData[];
export declare function getStatesBySharedTimezone(stateAbbr: string): StateData[];

// Search and utility functions
export declare function searchStates(searchTerm: string): StateData[];
export declare function getRandomState(): StateData;
export declare function getRandomState(count: number): StateData[];

// Information functions
export declare function getAllTimezones(): string[];
export declare function getAllAbbreviations(): string[];
export declare function getAllNames(): string[];
export declare function getCount(): CountData;

// Validation functions
export declare function isValidAbbreviation(abbr: string): boolean;

// Default export for CommonJS compatibility and convenience
declare const _default: {
  states: StateData[];
  getStateByAbbreviation: (abbr: string) => StateData | null;
  getStateByName: (name: string) => StateData | null;
  getStateByCapital: (capital: string) => StateData | null;
  getTerritories: () => StateData[];
  getStates: () => StateData[];
  getContiguousStates: () => StateData[];
  getNonContiguousStates: () => StateData[];
  getStatesByTimezone: (timezone: string) => StateData[];
  getStatesBySharedTimezone: (stateAbbr: string) => StateData[];
  searchStates: (searchTerm: string) => StateData[];
  getRandomState: (count?: number) => StateData | StateData[];
  getAllTimezones: () => string[];
  getAllAbbreviations: () => string[];
  getAllNames: () => string[];
  getCount: () => CountData;
  isValidAbbreviation: (abbr: string) => boolean;
  USStateFlags: React.FC<USStateFlagsProps>;
};

export default _default;

// CommonJS export for require() usage
export = _default;

// Global type for browser usage
declare global {
  interface Window {
    usStateFlags: typeof _default;
  }
}

// Browser global variable
declare const usStateFlags: typeof _default;
