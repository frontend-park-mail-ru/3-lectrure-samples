'use strict';

/**
 * Область видимости функций
 */

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = function (s) {
	return s.length;
};

function f1() {
	const cities = ['Athens', 'Roma'];
	const f = function (s) {
		return s.toUpperCase();
	};
	console.dir({cities});
	console.dir(cities.map(f));

	function f2() {
		const f = function (s) {
			return s.toLowerCase();
		};
		console.dir({cities});
		console.dir(cities.map(f));
	}

	f2();

	function f3() {
		const cities = ['London', 'Beijing', 'Kiev'];
		console.dir({cities});
		console.dir(cities.map(f));
	}

	f3();
}

f1();

console.dir({cities});
console.dir(cities.map(f));
