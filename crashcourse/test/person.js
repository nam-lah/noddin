class Person {
	constructor(name, age) {
		this.name = 'John Doe',
		this.age = 31;
	}

	greeting() {
		console.log(`My name is ${this.name} and I'm ${this.age}.`)
	}
}

module.exports = Person
