//Implementation of a stack using a class and an array

class Stack {
	constructor() {
		this.data = [];
	}

	push(val) {
		this.data.push(val);
	}

	pop() {
		return this.data.pop();
	}
}

let s = new Stack();

s.push(10);
s.push(22);
s.push(2);
s.push(44);
s.push(12);

console.log(s);
console.log(s.pop(), s);