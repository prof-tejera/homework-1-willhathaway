[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UHH_5-oP)
# Homework 1

Write a function that:
- retrieves the colors from the COLORS endpoint (use [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch))
- filters the returned colors by:
  - name contains string (case insensitive)
  - hex code (without '#')
  - it contains a complementary color whose name contains a string (case insensitive)
  - it contains a complementary color whose hex code equals a given hex code (without '#')
- assume that only one filter can be passed in at a time.

  Examples:
  - give me all the colors that contain 'Blue' in their name
  - give me all the colors with hex code '9FAC58'
  - give me all the colors that have a complementary color whose name contains 'Blue'
  - give me all the colors that have a complementary color whose hex = '9FAC58'
 
```JS
// Example
const result = await fetchColors({
  name: 'Almond',
});

// should return 
[{
  "hex": "EFDECD",
  "name": "Almond",
  ...
}];
```

NOTE: If you need some Promise practice see https://github.com/prof-tejera/es6-primer/blob/main/src/practice.js

- Only ES6 syntax allowed (convert any non ES6 syntax to ES6)
- Provide documentation in the code to make it easy to follow
- Feel free to add more unit tests

Commands for running:
- `npm install` to install dependencies
- `npm start` runs `index.js`
- `npm test` runs tests in `main.test.js`
