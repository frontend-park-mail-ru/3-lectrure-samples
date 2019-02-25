'use strict';

/**
 * Работа с this; Стрелочные функции
 */

const Person = function () {
	this.name = 'Sergey';

	this.city = {
		name: 'Moscow',
		year: 1047,
		f1: function () {
			return this.name;
		},
		f2: () => {
			return this.name;
		},
		f3() {
			return this.name;
		}
	};

	this.getInfo = function () {
		return `${this.name} was born in ${this.city.name}`
	};
};

const person = new Person();

console.dir({person});
console.log(person instanceof Person);
console.log('info: ' + person.getInfo());
console.log('city.f1() = ' + person.city.f1());
console.log('city.f2() = ' + person.city.f2());
console.log('city.f3() = ' + person.city.f3());
