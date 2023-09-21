import fetch from 'node-fetch';
// Recommend using node-fetch for those familiar with JS fetch

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */

const fetchColors = ({ name, hex, compName, compHex }) => {

  let filters = {
    "name": name,
    "hex": hex,
    "compName": compName,
    "compHex": compHex
  }

  // Fetch from the colors API then parse the data:
  return fetch(COLORS).then((res) => res.json())
  // Check which filter has been passed to the function and filter the API results accordingly:
  .then(colors => {
    switch (true) {
      case !!name:
          return colors.filter((color) => color.name.toLowerCase().includes(filters.name.toLowerCase()));
          break;
      case !!hex:
          return colors.filter((color) => color.hex === filters.hex);
          break;
      case !!compName:
        return colors.filter((color) => color.comp.filter((comp) => comp.name.toLowerCase().includes(filters.compName.toLowerCase())).length > 0);
        break;
      case !!compHex:
        return colors.filter((color) => color.comp.filter((comp) => comp.hex.toUpperCase() === filters.compHex.toUpperCase()).length > 0);          break;
      default:
          return colors;
  }
  
  });
};

// Leave this here
export default fetchColors;
