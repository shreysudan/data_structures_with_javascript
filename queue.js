//Implementing a queue(FIFO) structure using a class and an array

class Queue {
	constructor(val = null) {
		this.data = [];
		if(val) {
			this.data.unshift(val);
		}
	}

	add(val) {
		this.data.unshift(val);
	}

	remove() {
		return this.data.pop();
	}
}


let q = new Queue();

q.add(10);
q.add(20);
q.add(22);
q.add(45);
q.add(34);

console.log(q);
/*console.log(q.remove(), q);*/