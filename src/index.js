// Import your states data
const statesData = require('./data/states.json');

// Export everything so others can use it
module.exports = {
  // Give users all the data
  states: statesData,
  
  // Helper function to find a state by abbreviation
  getStateByAbbreviation: function(abbr) {
    if (!abbr || typeof abbr !== 'string') return null;
    return statesData.find(state => 
      state.abbreviation.toLowerCase() === abbr.toLowerCase()
    ) || null;
  },
  
  // Helper function to find a state by name
  getStateByName: function(name) {
    if (!name || typeof name !== 'string') return null;
    return statesData.find(state => 
      state.name.toLowerCase() === name.toLowerCase()
    ) || null;
  },
  
  // Get only the territories
  getTerritories: function() {
    return statesData.filter(state => state.territory === true);
  },
  
  // Get only actual states (not territories)
  getStates: function() {
    return statesData.filter(state => state.territory === false);
  },
  
  // Get states by timezone
  getStatesByTimezone: function(timezone) {
    if (!timezone || typeof timezone !== 'string') return [];
    const lowerTimezone = timezone.toLowerCase();
    return statesData.filter(state => 
      state.timezone.some(tz => 
        tz.toLowerCase().includes(lowerTimezone)
      )
    );
  },
  
  // Get contiguous states only (connected to mainland US)
  getContiguousStates: function() {
    return statesData.filter(state => 
      state.contiguous === true && state.territory === false
    );
  },
  
  // Get non-contiguous states (Alaska, Hawaii)
  getNonContiguousStates: function() {
    return statesData.filter(state => 
      state.contiguous === false && state.territory === false
    );
  },
  
  // Search states by partial name, capital, or abbreviation match
  searchStates: function(searchTerm) {
    if (!searchTerm || typeof searchTerm !== 'string') return [];
    const term = searchTerm.toLowerCase().trim();
    if (term === '') return [];
    
    return statesData.filter(state => 
      state.name.toLowerCase().includes(term) ||
      state.capital.toLowerCase().includes(term) ||
      state.abbreviation.toLowerCase().includes(term)
    );
  },
  
  // Get states by capital city
  getStateByCapital: function(capital) {
    if (!capital || typeof capital !== 'string') return null;
    return statesData.find(state => 
      state.capital.toLowerCase() === capital.toLowerCase()
    ) || null;
  },
  
  // Get all unique timezones used by states
  getAllTimezones: function() {
    const timezones = new Set();
    statesData.forEach(state => {
      state.timezone.forEach(tz => timezones.add(tz));
    });
    return Array.from(timezones).sort();
  },
  
  // Get random state(s)
  getRandomState: function(count = 1) {
    const statesOnly = this.getStates();
    if (count === 1) {
      return statesOnly[Math.floor(Math.random() * statesOnly.length)];
    }
    
    // Return multiple random states
    const shuffled = [...statesOnly].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, statesOnly.length));
  },
  
  // Get total count of states vs territories
  getCount: function() {
    const states = this.getStates();
    const territories = this.getTerritories();
    return {
      total: statesData.length,
      states: states.length,
      territories: territories.length,
      contiguous: this.getContiguousStates().length,
      nonContiguous: this.getNonContiguousStates().length
    };
  },
  
  // Validate if a given abbreviation is valid
  isValidAbbreviation: function(abbr) {
    return this.getStateByAbbreviation(abbr) !== null;
  },
  
  // Get all state abbreviations
  getAllAbbreviations: function() {
    return statesData.map(state => state.abbreviation).sort();
  },
  
  // Get all state names
  getAllNames: function() {
    return statesData.map(state => state.name).sort();
  },
  
  // Get neighboring states by timezone (states that share timezones)
  getStatesBySharedTimezone: function(stateAbbr) {
    const state = this.getStateByAbbreviation(stateAbbr);
    if (!state) return [];
    
    return statesData.filter(s => 
      s.abbreviation !== stateAbbr && 
      s.timezone.some(tz => state.timezone.includes(tz))
    );
  },

  get USStateFlags() {
    try {
      const componentModule = require('./components/USStateFlags.jsx');
      return componentModule;
    } catch (error) {
      // Component not available (React not installed or component missing)
      console.warn('USStateFlags component requires React. Install react and react-dom to use the component.');
      return null;
    }
  }
};