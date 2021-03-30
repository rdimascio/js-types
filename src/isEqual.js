// @ts-check
import isType from './isType';

/**
 * Compare the eqaulity of two objects.
 * 
 * @param {object} a - Object
 * @param {object} b - Object
 * @returns {boolean}
 */
const isEqual = (a, b) => {
	if (isType(a) !== 'object' || isType(b) !== 'object') {
		return false;
	}

	// Create arrays of property names
	const aProps = Object.getOwnPropertyNames(a);
	const bProps = Object.getOwnPropertyNames(b);

	// If number of properties is different,
	// objects are not equivalent
	if (aProps.length !== bProps.length) {
		return false;
	}

	for (let i = 0; i < aProps.length; i++) {
		const propName = aProps[i];

		if (isType(a[propName]) === 'object') {
			return isEqual(a[propName], b[propName]);
		}

		if (isType(a[propName]) === 'array') {
			return a[propName].toString() === b[propName].toString();
		}

		// If values of same property are not equal,
		// objects are not equivalent
		return a[propName] === b[propName];
	}

	// If we made it this far, objects
	// are considered equivalent
	return true;
};

export default isEqual;
