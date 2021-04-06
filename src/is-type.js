/**
 * Get the real type of anything.
 *
 * // @ts-ignore @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#real-world_usage}
 * @param {*} obj - Object to check.
 * @return {string} - 
 */
export default (obj) => {
	// get toPrototypeString() of obj (handles all types)
	// Early JS environments return '[object Object]' for null, so it's best to directly check for it.
	if (obj === null || typeof obj === 'undefined') {
		return (obj + '').toLowerCase(); // implicit toString() conversion
	}
  
	const dataStructures = /^(array|bigint|date|error|function|generator|regexp|symbol)$/;
	const deepType = Object.prototype.toString
		.call(obj)
		.slice(8, -1)
		.toLowerCase();
	if (deepType === 'generatorfunction') {
		return 'function';
	}
  
	// Prevent overspecificity (for example, [object HTMLDivElement], etc).
	// Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
	// String.prototype.match is universally supported.
	return deepType.match(dataStructures)
		? deepType
		: typeof obj;
};
