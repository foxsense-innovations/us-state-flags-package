// ES Module version

const statesData = [
  {
    "name": "Alabama",
    "abbreviation": "AL",
    "territory": false,
    "capital": "Montgomery",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/AL.svg"
    }
  },
  {
    "name": "Alaska",
    "abbreviation": "AK",
    "territory": false,
    "capital": "Juneau",
    "contiguous": false,
    "timezone": [
      "America/Anchorage",
      "America/Adak"
    ],
    "logo": {
      "svg": "/assets/flags/svg/AK.svg"
    }
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ",
    "territory": false,
    "capital": "Phoenix",
    "contiguous": true,
    "timezone": [
      "America/Phoenix"
    ],
    "logo": {
      "svg": "/assets/flags/svg/AZ.svg"
    }
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR",
    "territory": false,
    "capital": "Little Rock",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/AR.svg"
    }
  },
  {
    "name": "California",
    "abbreviation": "CA",
    "territory": false,
    "capital": "Sacramento",
    "contiguous": true,
    "timezone": [
      "America/Los_Angeles"
    ],
    "logo": {
      "svg": "/assets/flags/svg/CA.svg"
    }
  },
  {
    "name": "Colorado",
    "abbreviation": "CO",
    "territory": false,
    "capital": "Denver",
    "contiguous": true,
    "timezone": [
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/CO.svg"
    }
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT",
    "territory": false,
    "capital": "Hartford",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/CT.svg"
    }
  },
  {
    "name": "Delaware",
    "abbreviation": "DE",
    "territory": false,
    "capital": "Dover",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/DE.svg"
    }
  },
  {
    "name": "Florida",
    "abbreviation": "FL",
    "territory": false,
    "capital": "Tallahassee",
    "contiguous": true,
    "timezone": [
      "America/New_York",
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/FL.svg"
    }
  },
  {
    "name": "Georgia",
    "abbreviation": "GA",
    "territory": false,
    "capital": "Atlanta",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/GA.svg"
    }
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI",
    "territory": false,
    "capital": "Honolulu",
    "contiguous": false,
    "timezone": [
      "Pacific/Honolulu"
    ],
    "logo": {
      "svg": "/assets/flags/svg/HI.svg"
    }
  },
  {
    "name": "Idaho",
    "abbreviation": "ID",
    "territory": false,
    "capital": "Boise",
    "contiguous": true,
    "timezone": [
      "America/Boise",
      "America/Los_Angeles"
    ],
    "logo": {
      "svg": "/assets/flags/svg/ID.svg"
    }
  },
  {
    "name": "Illinois",
    "abbreviation": "IL",
    "territory": false,
    "capital": "Springfield",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/IL.svg"
    }
  },
  {
    "name": "Indiana",
    "abbreviation": "IN",
    "territory": false,
    "capital": "Indianapolis",
    "contiguous": true,
    "timezone": [
      "America/Indiana/Indianapolis",
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/IN.svg"
    }
  },
  {
    "name": "Iowa",
    "abbreviation": "IA",
    "territory": false,
    "capital": "Des Moines",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/IA.svg"
    }
  },
  {
    "name": "Kansas",
    "abbreviation": "KS",
    "territory": false,
    "capital": "Topeka",
    "contiguous": true,
    "timezone": [
      "America/Chicago",
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/KS.svg"
    }
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY",
    "territory": false,
    "capital": "Frankfort",
    "contiguous": true,
    "timezone": [
      "America/New_York",
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/KY.svg"
    }
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA",
    "territory": false,
    "capital": "Baton Rouge",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/LA.svg"
    }
  },
  {
    "name": "Maine",
    "abbreviation": "ME",
    "territory": false,
    "capital": "Augusta",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/ME.svg"
    }
  },
  {
    "name": "Maryland",
    "abbreviation": "MD",
    "territory": false,
    "capital": "Annapolis",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MD.svg"
    }
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA",
    "territory": false,
    "capital": "Boston",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MA.svg"
    }
  },
  {
    "name": "Michigan",
    "abbreviation": "MI",
    "territory": false,
    "capital": "Lansing",
    "contiguous": true,
    "timezone": [
      "America/New_York",
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MI.svg"
    }
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN",
    "territory": false,
    "capital": "Saint Paul",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MN.svg"
    }
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS",
    "territory": false,
    "capital": "Jackson",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MS.svg"
    }
  },
  {
    "name": "Missouri",
    "abbreviation": "MO",
    "territory": false,
    "capital": "Jefferson City",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MO.svg"
    }
  },
  {
    "name": "Montana",
    "abbreviation": "MT",
    "territory": false,
    "capital": "Helena",
    "contiguous": true,
    "timezone": [
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MT.svg"
    }
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE",
    "territory": false,
    "capital": "Lincoln",
    "contiguous": true,
    "timezone": [
      "America/Chicago",
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NE.svg"
    }
  },
  {
    "name": "Nevada",
    "abbreviation": "NV",
    "territory": false,
    "capital": "Carson City",
    "contiguous": true,
    "timezone": [
      "America/Los_Angeles"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NV.svg"
    }
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH",
    "territory": false,
    "capital": "Concord",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NH.svg"
    }
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ",
    "territory": false,
    "capital": "Trenton",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NJ.svg"
    }
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM",
    "territory": false,
    "capital": "Santa Fe",
    "contiguous": true,
    "timezone": [
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NM.svg"
    }
  },
  {
    "name": "New York",
    "abbreviation": "NY",
    "territory": false,
    "capital": "Albany",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NY.svg"
    }
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC",
    "territory": false,
    "capital": "Raleigh",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/NC.svg"
    }
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND",
    "territory": false,
    "capital": "Bismarck",
    "contiguous": true,
    "timezone": [
      "America/Chicago",
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/ND.svg"
    }
  },
  {
    "name": "Ohio",
    "abbreviation": "OH",
    "territory": false,
    "capital": "Columbus",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/OH.svg"
    }
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK",
    "territory": false,
    "capital": "Oklahoma City",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/OK.svg"
    }
  },
  {
    "name": "Oregon",
    "abbreviation": "OR",
    "territory": false,
    "capital": "Salem",
    "contiguous": true,
    "timezone": [
      "America/Los_Angeles",
      "America/Boise"
    ],
    "logo": {
      "svg": "/assets/flags/svg/OR.svg"
    }
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA",
    "territory": false,
    "capital": "Harrisburg",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/PA.svg"
    }
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI",
    "territory": false,
    "capital": "Providence",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/RI.svg"
    }
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC",
    "territory": false,
    "capital": "Columbia",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/SC.svg"
    }
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD",
    "territory": false,
    "capital": "Pierre",
    "contiguous": true,
    "timezone": [
      "America/Chicago",
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/SD.svg"
    }
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN",
    "territory": false,
    "capital": "Nashville",
    "contiguous": true,
    "timezone": [
      "America/Chicago",
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/TN.svg"
    }
  },
  {
    "name": "Texas",
    "abbreviation": "TX",
    "territory": false,
    "capital": "Austin",
    "contiguous": true,
    "timezone": [
      "America/Chicago",
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/TX.svg"
    }
  },
  {
    "name": "Utah",
    "abbreviation": "UT",
    "territory": false,
    "capital": "Salt Lake City",
    "contiguous": true,
    "timezone": [
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/UT.svg"
    }
  },
  {
    "name": "Vermont",
    "abbreviation": "VT",
    "territory": false,
    "capital": "Montpelier",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/VT.svg"
    }
  },
  {
    "name": "Virginia",
    "abbreviation": "VA",
    "territory": false,
    "capital": "Richmond",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/VA.svg"
    }
  },
  {
    "name": "Washington",
    "abbreviation": "WA",
    "territory": false,
    "capital": "Olympia",
    "contiguous": true,
    "timezone": [
      "America/Los_Angeles"
    ],
    "logo": {
      "svg": "/assets/flags/svg/WA.svg"
    }
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV",
    "territory": false,
    "capital": "Charleston",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/WV.svg"
    }
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI",
    "territory": false,
    "capital": "Madison",
    "contiguous": true,
    "timezone": [
      "America/Chicago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/WI.svg"
    }
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY",
    "territory": false,
    "capital": "Cheyenne",
    "contiguous": true,
    "timezone": [
      "America/Denver"
    ],
    "logo": {
      "svg": "/assets/flags/svg/WY.svg"
    }
  },
  {
    "name": "District of Columbia",
    "abbreviation": "DC",
    "territory": true,
    "capital": "Washington",
    "contiguous": true,
    "timezone": [
      "America/New_York"
    ],
    "logo": {
      "svg": "/assets/flags/svg/DC.svg"
    }
  },
  {
    "name": "Puerto Rico",
    "abbreviation": "PR",
    "territory": true,
    "capital": "San Juan",
    "contiguous": false,
    "timezone": [
      "America/Puerto_Rico"
    ],
    "logo": {
      "svg": "/assets/flags/svg/PR.svg"
    }
  },
  {
    "name": "US Virgin Islands",
    "abbreviation": "VI",
    "territory": true,
    "capital": "Charlotte Amalie",
    "contiguous": false,
    "timezone": [
      "America/St_Thomas"
    ],
    "logo": {
      "svg": "/assets/flags/svg/VI.svg"
    }
  },
  {
    "name": "Guam",
    "abbreviation": "GU",
    "territory": true,
    "capital": "Hagåtña",
    "contiguous": false,
    "timezone": [
      "Pacific/Guam"
    ],
    "logo": {
      "svg": "/assets/flags/svg/GU.svg"
    }
  },
  {
    "name": "American Samoa",
    "abbreviation": "AS",
    "territory": true,
    "capital": "Pago Pago",
    "contiguous": false,
    "timezone": [
      "Pacific/Pago_Pago"
    ],
    "logo": {
      "svg": "/assets/flags/svg/AS.svg"
    }
  },
  {
    "name": "Northern Mariana Islands",
    "abbreviation": "MP",
    "territory": true,
    "capital": "Saipan",
    "contiguous": false,
    "timezone": [
      "Pacific/Saipan"
    ],
    "logo": {
      "svg": "/assets/flags/svg/MP.svg"
    }
  }
];

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

export let USStateFlags = null;

try {
  // Dynamic import for React component
  const componentModule = import('./components/USStateFlags.jsx');  
  USStateFlags = componentModule.default || componentModule.USStateFlags;  
} catch (error) {
  // Component not available
  USStateFlags = null;  
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
  isValidAbbreviation,
  USStateFlags  
};