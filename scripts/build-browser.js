const fs = require('fs');
const path = require('path');

console.log('🌐 Building browser version with React component support...');

// Read the states data
const statesPath = path.join(__dirname, '..', 'src', 'data', 'states.json');
const statesData = JSON.parse(fs.readFileSync(statesPath, 'utf8'));

// Generate browser UMD content
const browserContent = `// Browser UMD version - Auto-generated, do not edit directly
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.usStatesData = {}));
})(this, (function (exports) {
  'use strict';

  // States data
  const statesData = ${JSON.stringify(statesData, null, 4).replace(/\n/g, '\n  ')};

  function getStateByAbbreviation(abbr) {
    if (!abbr || typeof abbr !== 'string') return null;
    return statesData.find(state => 
      state.abbreviation.toLowerCase() === abbr.toLowerCase()
    ) || null;
  }

  function getStateByName(name) {
    if (!name || typeof name !== 'string') return null;
    return statesData.find(state => 
      state.name.toLowerCase() === name.toLowerCase()
    ) || null;
  }

  function getTerritories() {
    return statesData.filter(state => state.territory === true);
  }

  function getStates() {
    return statesData.filter(state => state.territory === false);
  }

  function getStatesByTimezone(timezone) {
    if (!timezone || typeof timezone !== 'string') return [];
    const lowerTimezone = timezone.toLowerCase();
    return statesData.filter(state => 
      state.timezone.some(tz => 
        tz.toLowerCase().includes(lowerTimezone)
      )
    );
  }

  function getContiguousStates() {
    return statesData.filter(state => 
      state.contiguous === true && state.territory === false
    );
  }

  function getNonContiguousStates() {
    return statesData.filter(state => 
      state.contiguous === false && state.territory === false
    );
  }

  function searchStates(searchTerm) {
    if (!searchTerm || typeof searchTerm !== 'string') return [];
    const term = searchTerm.toLowerCase().trim();
    if (term === '') return [];
    
    return statesData.filter(state => 
      state.name.toLowerCase().includes(term) ||
      state.capital.toLowerCase().includes(term) ||
      state.abbreviation.toLowerCase().includes(term)
    );
  }

  function getStateByCapital(capital) {
    if (!capital || typeof capital !== 'string') return null;
    return statesData.find(state => 
      state.capital.toLowerCase() === capital.toLowerCase()
    ) || null;
  }

  function getAllTimezones() {
    const timezones = new Set();
    statesData.forEach(state => {
      state.timezone.forEach(tz => timezones.add(tz));
    });
    return Array.from(timezones).sort();
  }

  function getRandomState(count) {
    if (count === undefined) count = 1;
    const statesOnly = getStates();
    if (count === 1) {
      return statesOnly[Math.floor(Math.random() * statesOnly.length)];
    }
    
    const shuffled = statesOnly.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, statesOnly.length));
  }

  function getCount() {
    const states = getStates();
    const territories = getTerritories();
    return {
      total: statesData.length,
      states: states.length,
      territories: territories.length,
      contiguous: getContiguousStates().length,
      nonContiguous: getNonContiguousStates().length
    };
  }

  function isValidAbbreviation(abbr) {
    return getStateByAbbreviation(abbr) !== null;
  }

  function getAllAbbreviations() {
    return statesData.map(state => state.abbreviation).sort();
  }

  function getAllNames() {
    return statesData.map(state => state.name).sort();
  }

  function getStatesBySharedTimezone(stateAbbr) {
    const state = getStateByAbbreviation(stateAbbr);
    if (!state) return [];
    
    return statesData.filter(s => 
      s.abbreviation !== stateAbbr && 
      s.timezone.some(tz => state.timezone.includes(tz))
    );
  }

  // React Component Support
  // Note: In browser environment, React components are typically bundled separately
  // Users should import the component from 'us-state-flags/components' in their build process
  const USStateFlags = null; // Not available in browser globals

  // Export all functions
  exports.states = statesData;
  exports.getStateByAbbreviation = getStateByAbbreviation;
  exports.getStateByName = getStateByName;
  exports.getStateByCapital = getStateByCapital;
  exports.getTerritories = getTerritories;
  exports.getStates = getStates;
  exports.getContiguousStates = getContiguousStates;
  exports.getNonContiguousStates = getNonContiguousStates;
  exports.getStatesByTimezone = getStatesByTimezone;
  exports.getStatesBySharedTimezone = getStatesBySharedTimezone;
  exports.searchStates = searchStates;
  exports.getRandomState = getRandomState;
  exports.getAllTimezones = getAllTimezones;
  exports.getAllAbbreviations = getAllAbbreviations;
  exports.getAllNames = getAllNames;
  exports.getCount = getCount;
  exports.isValidAbbreviation = isValidAbbreviation;
  exports.USStateFlags = USStateFlags;

}));`;

// Write the browser file
const browserPath = path.join(__dirname, '..', 'src', 'index.browser.js');
fs.writeFileSync(browserPath, browserContent);

console.log('✅ Browser version built successfully');
console.log(`📁 Output: ${browserPath}`);
console.log(`📊 States data injected: ${statesData.length} entries`);
console.log('🌐 Ready for browser usage (UMD format)');
console.log('⚛️ React component: Available via separate components export');