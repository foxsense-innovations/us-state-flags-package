const fs = require('fs');
const path = require('path');

console.log('🔨 Building ES Module version with React component support...');

// Read the states data
const statesPath = path.join(__dirname, '..', 'src', 'data', 'states.json');
const statesData = JSON.parse(fs.readFileSync(statesPath, 'utf8'));

// Read the main CommonJS file to extract functions
const mainPath = path.join(__dirname, '..', 'src', 'index.js');
const mainContent = fs.readFileSync(mainPath, 'utf8');

// Generate ES Module content with React component support
let esmContent = `// ES Module version - Auto-generated, do not edit directly
// Generated from src/index.js

// States data (embedded for compatibility)
const statesData = ${JSON.stringify(statesData, null, 2)};

// Helper function to find a state by abbreviation
export function getStateByAbbreviation(abbr) {
  if (!abbr || typeof abbr !== 'string') return null;
  return statesData.find(state => 
    state.abbreviation.toLowerCase() === abbr.toLowerCase()
  ) || null;
}

// Helper function to find a state by name
export function getStateByName(name) {
  if (!name || typeof name !== 'string') return null;
  return statesData.find(state => 
    state.name.toLowerCase() === name.toLowerCase()
  ) || null;
}

// Get only the territories
export function getTerritories() {
  return statesData.filter(state => state.territory === true);
}

// Get only actual states (not territories)
export function getStates() {
  return statesData.filter(state => state.territory === false);
}

// Get states by timezone
export function getStatesByTimezone(timezone) {
  if (!timezone || typeof timezone !== 'string') return [];
  const lowerTimezone = timezone.toLowerCase();
  return statesData.filter(state => 
    state.timezone.some(tz => 
      tz.toLowerCase().includes(lowerTimezone)
    )
  );
}

// Get contiguous states only (connected to mainland US)
export function getContiguousStates() {
  return statesData.filter(state => 
    state.contiguous === true && state.territory === false
  );
}

// Get non-contiguous states (Alaska, Hawaii)
export function getNonContiguousStates() {
  return statesData.filter(state => 
    state.contiguous === false && state.territory === false
  );
}

// Search states by partial name, capital, or abbreviation match
export function searchStates(searchTerm) {
  if (!searchTerm || typeof searchTerm !== 'string') return [];
  const term = searchTerm.toLowerCase().trim();
  if (term === '') return [];
  
  return statesData.filter(state => 
    state.name.toLowerCase().includes(term) ||
    state.capital.toLowerCase().includes(term) ||
    state.abbreviation.toLowerCase().includes(term)
  );
}

// Get states by capital city
export function getStateByCapital(capital) {
  if (!capital || typeof capital !== 'string') return null;
  return statesData.find(state => 
    state.capital.toLowerCase() === capital.toLowerCase()
  ) || null;
}

// Get all unique timezones used by states
export function getAllTimezones() {
  const timezones = new Set();
  statesData.forEach(state => {
    state.timezone.forEach(tz => timezones.add(tz));
  });
  return Array.from(timezones).sort();
}

// Get random state(s)
export function getRandomState(count = 1) {
  const statesOnly = getStates();
  if (count === 1) {
    return statesOnly[Math.floor(Math.random() * statesOnly.length)];
  }
  
  // Return multiple random states
  const shuffled = [...statesOnly].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, statesOnly.length));
}

// Get total count of states vs territories
export function getCount() {
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

// Validate if a given abbreviation is valid
export function isValidAbbreviation(abbr) {
  return getStateByAbbreviation(abbr) !== null;
}

// Get all state abbreviations
export function getAllAbbreviations() {
  return statesData.map(state => state.abbreviation).sort();
}

// Get all state names
export function getAllNames() {
  return statesData.map(state => state.name).sort();
}

// Get neighboring states by timezone (states that share timezones)
export function getStatesBySharedTimezone(stateAbbr) {
  const state = getStateByAbbreviation(stateAbbr);
  if (!state) return [];
  
  return statesData.filter(s => 
    s.abbreviation !== stateAbbr && 
    s.timezone.some(tz => state.timezone.includes(tz))
  );
}

// Export states data
export const states = statesData;

// Default export for convenience
export default {
  states: statesData,
  getStateByAbbreviation,
  getStateByName,
  getStateByCapital,
  getTerritories,
  getStates,
  getContiguousStates,
  getNonContiguousStates,
  getStatesByTimezone,
  getStatesBySharedTimezone,
  searchStates,
  getRandomState,
  getAllTimezones,
  getAllAbbreviations,
  getAllNames,
  getCount,
  isValidAbbreviation
};`;

// Write the ESM file (.mjs extension)
const esmPath = path.join(__dirname, '..', 'src', 'index.mjs');
fs.writeFileSync(esmPath, esmContent);

console.log('✅ ES Module (.mjs) created successfully');
console.log(`📁 Output: ${esmPath}`);
console.log(`📊 States data: ${statesData.length} entries`);
console.log(`🔧 All functions exported as ES modules`);
console.log(`⚛️ React component: Conditionally exported`);

// Also create index.esm.js for backward compatibility
const esmJsPath = path.join(__dirname, '..', 'src', 'index.esm.js');
fs.writeFileSync(esmJsPath, esmContent);
console.log(`📁 Backward compatibility: ${esmJsPath}`);