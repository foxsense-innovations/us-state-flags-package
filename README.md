# 🇺🇸 US State Flags

Complete US state data with **crisp SVG flags**, utility functions, and React component. Zero dependencies for data, optional React support, perfect for any JavaScript project.

## ✨ Features

- 🎯 **SVG Flags** - Crisp, scalable vector graphics that look perfect at any size
- 🚀 **Zero Dependencies** - Core functionality requires no external dependencies
- ⚡ **Tree Shakeable** - Import only what you need
- 🌍 **Universal** - Works in Node.js, browsers, and React applications
- 📘 **TypeScript Ready** - Full type definitions included
- 🎨 **React Component** - Drop-in component with 15+ customization props
- 📦 **Lightweight** - Optimized package size with SVG-only approach
- 🔄 **Multiple Formats** - CommonJS, ES Modules, and Browser UMD

## 📦 Installation

```bash
npm install us-state-flags
```

## 🚀 Quick Start

### Data Functions (Zero Dependencies)

```javascript
// CommonJS
const { getStateByName, states } = require('us-state-flags');

// ES Modules
import { getStateByName, states } from 'us-state-flags';

// Get state information
const california = getStateByName('California');
console.log(california);
// {
//   name: 'California',
//   abbreviation: 'CA',
//   capital: 'Sacramento',
//   territory: false,
//   contiguous: true,
//   timezone: ['America/Los_Angeles'],
//   logo: { svg: '/assets/flags/svg/CA.svg' }
// }
```

### React Component

```jsx
import { USStateFlags } from 'us-state-flags';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <USStateFlags state="TX" showFlag={true} showName={true} />
      
      {/* Complete information */}
      <USStateFlags 
        state="California" 
        showFlag={true}
        showName={true}
        showAbbreviation={true}
        showCapital={true}
        flagSize="lg"
        layout="vertical"
      />
    </div>
  );
}
```

## 📚 API Reference

### Core Data Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `getStateByName(name)` | Find state by full name | `StateData \| null` |
| `getStateByAbbreviation(abbr)` | Find state by abbreviation | `StateData \| null` |
| `getStateByCapital(capital)` | Find state by capital city | `StateData \| null` |
| `getStates()` | Get all 50 states (excludes territories) | `StateData[]` |
| `getTerritories()` | Get territories (DC, etc.) | `StateData[]` |
| `searchStates(term)` | Search by name, capital, or abbreviation | `StateData[]` |
| `getContiguousStates()` | Get contiguous states (48) | `StateData[]` |
| `getNonContiguousStates()` | Get Alaska and Hawaii | `StateData[]` |
| `getStatesByTimezone(tz)` | Filter states by timezone | `StateData[]` |
| `getAllTimezones()` | Get all unique timezones | `string[]` |
| `getRandomState(count?)` | Get random state(s) | `StateData \| StateData[]` |
| `isValidAbbreviation(abbr)` | Validate state abbreviation | `boolean` |

### React Component Props

The `USStateFlags` component accepts these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | `string` | **required** | State name or abbreviation |
| `showFlag` | `boolean` | `false` | Display SVG flag |
| `showName` | `boolean` | `false` | Display state name |
| `showAbbreviation` | `boolean` | `false` | Display abbreviation badge |
| `showCapital` | `boolean` | `false` | Display capital city |
| `flagSize` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Flag size (16px to 225px) |
| `flagAlt` | `string` | `"{state} flag"` | Custom alt text |
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `className` | `string` | `''` | Custom CSS class |
| `style` | `CSSProperties` | `{}` | Container styles |
| `nameStyle` | `CSSProperties` | `{}` | Name text styles |
| `abbreviationStyle` | `CSSProperties` | `{}` | Abbreviation styles |
| `capitalStyle` | `CSSProperties` | `{}` | Capital text styles |
| `onClick` | `(state: StateData) => void` | - | Click handler |
| `onFlagLoad` | `() => void` | - | Flag loaded callback |
| `onFlagError` | `() => void` | - | Flag error callback |

## 🎨 Component Examples

### Flag Sizes

```jsx
{/* Extra small - perfect for lists */}
<USStateFlags state="TX" showFlag={true} flagSize="xs" />

{/* Small - compact layouts */}
<USStateFlags state="TX" showFlag={true} flagSize="sm" />

{/* Medium - default size */}
<USStateFlags state="TX" showFlag={true} flagSize="md" />

{/* Large - hero sections */}
<USStateFlags state="TX" showFlag={true} flagSize="lg" />
```

### Custom Styling

```jsx
<USStateFlags 
  state="CA" 
  showFlag={true}
  showName={true}
  showAbbreviation={true}
  style={{
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    padding: '16px',
    borderRadius: '12px'
  }}
  nameStyle={{ fontSize: '18px', fontWeight: 'bold' }}
  abbreviationStyle={{ 
    background: 'rgba(255,255,255,0.2)',
    color: 'white' 
  }}
/>
```

### Interactive Usage

```jsx
const handleStateClick = (stateData) => {
  console.log(`Clicked ${stateData.name}!`);
  // Handle state selection
};

<USStateFlags 
  state="FL" 
  showFlag={true}
  showName={true}
  showCapital={true}
  onClick={handleStateClick}
  style={{ cursor: 'pointer' }}
/>
```

## 🔧 Data Functions Examples

### Finding States

```javascript
// Multiple ways to find the same state
const texas1 = getStateByName('Texas');
const texas2 = getStateByAbbreviation('TX');
const texas3 = getStateByCapital('Austin');

// Case insensitive
const california = getStateByName('california'); // Works!
```

### Filtering & Searching

```javascript
// Get specific groups
const states = getStates();              // 50 states
const territories = getTerritories();    // DC + territories
const contiguous = getContiguousStates(); // 48 states
const islands = getNonContiguousStates(); // Alaska + Hawaii

// Search functionality
const newStates = searchStates('New');   // NY, NJ, NM, NH
const texasSearch = searchStates('Austin'); // Finds Texas by capital
```

### Geographic & Time Analysis

```javascript
// Timezone analysis
const easternStates = getStatesByTimezone('New_York');
const allTimezones = getAllTimezones();

// Get random states for sampling
const randomState = getRandomState();
const fiveRandomStates = getRandomState(5);

// Validation
const isValid = isValidAbbreviation('CA'); // true
const notValid = isValidAbbreviation('ZZ'); // false
```

```

## 📊 Data Structure

Each state/territory object contains:

```typescript
interface StateData {
  name: string;           // "California"
  abbreviation: string;   // "CA"
  territory: boolean;     // false for states, true for territories
  capital: string;        // "Sacramento"
  contiguous: boolean;    // true (false for Alaska/Hawaii)
  timezone: string[];     // ["America/Los_Angeles"]
  logo: {
    svg: string;         // "/assets/flags/svg/CA.svg"
  };
}
```

## 🎯 SVG Flags Benefits

- **Crisp at any size** - From 16px icons to 225px+ displays
- **Smaller package** - No multiple PNG files needed
- **CSS scalable** - Perfect for responsive designs
- **Print ready** - Vector graphics scale to any DPI
- **Customizable** - Can be styled with CSS filters

## 📦 Package Formats

This package supports multiple import methods:

```javascript
// CommonJS (Node.js)
const usStateFlags = require('us-state-flags');

// ES Modules
import { getStateByName } from 'us-state-flags';

// Browser UMD
// Available as global: usStateFlags

// React Component
import { USStateFlags } from 'us-state-flags';
```

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
