'use strict';

/**
 * Приватность и инкапсуляция через замыкания
 */

const Counter = function () {
	let privateValue = 0;

	return {
		inc: () => ++privateValue,
		dec: () => --privateValue,
		getValue: () => privateValue,
	}
}();

Counter.inc();
Counter.inc();
Counter.dec();

console.log('Counter.getValue() =', Counter.getValue());
console.log('Counter.privateValue =', Counter.privateValue);
