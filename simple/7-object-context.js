
const obj = {
	someValue: 5,
	getSomeValue() {
		return this.someValue;
	}
};


console.log('obj.getSomeValue() = ', obj.getSomeValue());
