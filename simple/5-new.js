'use strict';

/**
 * Ещё вариант создания функций
 */

const sum = new Function('a, b', 'return a + b');

console.dir({
	result: sum(2, 3),
	name: sum.name,
	length: sum.length,
	toString: sum.toString(),
});
