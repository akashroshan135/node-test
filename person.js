// const person = {
// 	name: "Bob",
// 	age: 25,
// };

class Person {
	constructor(name) {
		this.name = name;
	}
	greeting() {
		console.log(`hello ${this.name}!`);
	}
}

//module.exports = person;
module.exports = Person;
