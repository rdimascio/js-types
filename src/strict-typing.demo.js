/**
 * Type checking demo.
 * 
 * https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript
 * https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
 */

// Tell VS Code to use type checking in this file.
// @ts-check

// Include argument types in a JSDoc block using @param
/**
 * Simple type checking example.
 *
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
const add = (x, y) => x + y;

// This will throw an error because `y` should be a number.
add(1, '2');

// Explicitly cast `y` to a number
add(1, Number('2'));
