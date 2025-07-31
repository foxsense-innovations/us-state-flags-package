import React from 'react';

const FlagDC = function(props) {
  const defaultWidth = props.width || 75;
  const defaultHeight = props.height || Math.round(defaultWidth / 1.5);
  
  return React.createElement('svg', 
    Object.assign({
      width: defaultWidth,
      height: defaultHeight,
      viewBox: '0 0 250 125',
      role: 'img',
      'aria-label': 'District of Columbia flag',
      xmlns: 'http://www.w3.org/2000/svg',
      preserveAspectRatio: 'xMidYMid meet',
      style: Object.assign({
        display: 'block',
        border: '1px solid #ddd', // Add border to see exact boundaries
        background: 'white' // Add background to see the flag area
      }, props.style || {})
    }, props),
    // Render the inner SVG content as raw HTML
    React.createElement('g', {
      dangerouslySetInnerHTML: { 
        __html: `<path d="M0 0 C82.5 0 165 0 250 0 C250 41.25 250 82.5 250 125 C167.5 125 85 125 0 125 C0 83.75 0 42.5 0 0 Z " fill="#E81F3C" transform="translate(0,0)"/> <path d="M0 0 C82.5 0 165 0 250 0 C250 12.54 250 25.08 250 38 C167.5 38 85 38 0 38 C0 25.46 0 12.92 0 0 Z " fill="#FEFBFB" transform="translate(0,0)"/> <path d="M0 0 C82.5 0 165 0 250 0 C250 8.25 250 16.5 250 25 C167.5 25 85 25 0 25 C0 16.75 0 8.5 0 0 Z " fill="#FFFFFF" transform="translate(0,100)"/> <path d="M0 0 C82.5 0 165 0 250 0 C250 8.25 250 16.5 250 25 C167.5 25 85 25 0 25 C0 16.75 0 8.5 0 0 Z " fill="#E81B39" transform="translate(0,75)"/> <path d="M0 0 C82.5 0 165 0 250 0 C250 3.96 250 7.92 250 12 C167.5 12 85 12 0 12 C0 8.04 0 4.08 0 0 Z " fill="#FFFFFF" transform="translate(0,63)"/> <path d="M0 0 C2.12508244 3.18762365 2.5020163 5.26512223 3 9 C5.97 9 8.94 9 12 9 C10.37660195 10.70884005 8.70680947 12.37446717 7 14 C6.34 14 5.68 14 5 14 C6.485 18.455 6.485 18.455 8 23 C6.68 22.34 5.36 21.68 4 21 C2.33859237 20.32033324 0.67299959 19.65061095 -1 19 C-2.65 20.32 -4.3 21.64 -6 23 C-7.15941038 19.52176885 -6.70820884 17.54104422 -6 14 C-6.99 13.360625 -7.98 12.72125 -9 12.0625 C-9.99 11.381875 -10.98 10.70125 -12 10 C-12 9.67 -12 9.34 -12 9 C-7.545 8.505 -7.545 8.505 -3 8 C-2.01 5.36 -1.02 2.72 0 0 Z " fill="#E92743" transform="translate(56,7)"/> <path d="M0 0 C2.46278801 2.46278801 2.99771255 4.70676982 4 8 C6.97 8.33 9.94 8.66 13 9 C12.195625 9.5775 11.39125 10.155 10.5625 10.75 C7.9812118 12.71250249 7.9812118 12.71250249 7.125 14.875 C6.95922464 17.69318117 7.43616272 20.24346217 8 23 C5.36 21.68 2.72 20.36 0 19 C-1.65 20.32 -3.3 21.64 -5 23 C-5.66 22.67 -6.32 22.34 -7 22 C-6.34 19.36 -5.68 16.72 -5 14 C-5.99 13.360625 -6.98 12.72125 -8 12.0625 C-8.99 11.381875 -9.98 10.70125 -11 10 C-11 9.67 -11 9.34 -11 9 C-8.03 9 -5.06 9 -2 9 C-1.34 6.03 -0.68 3.06 0 0 Z " fill="#E92643" transform="translate(193,7)"/> <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 2.64 3.32 5.28 4 8 C6.97 8 9.94 8 13 8 C9.25 11.875 9.25 11.875 7 13 C7.33 15.97 7.66 18.94 8 22 C6.02 20.68 4.04 19.36 2 18 C1.13375 18.433125 1.13375 18.433125 0.25 18.875 C-1.83333333 19.91666667 -3.91666667 20.95833333 -6 22 C-5.505 17.545 -5.505 17.545 -5 13 C-5.99 12.360625 -6.98 11.72125 -8 11.0625 C-8.99 10.381875 -9.98 9.70125 -11 9 C-11 8.67 -11 8.34 -11 8 C-8.03 8 -5.06 8 -2 8 C-1.34 5.36 -0.68 2.72 0 0 Z " fill="#E92642" transform="translate(124,8)"/>`
      }
    })
  );
};

FlagDC.displayName = 'FlagDC';

export default FlagDC;
