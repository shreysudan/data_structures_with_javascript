//Implementation of a linked list with separate classes for Node of the linked list and a separate
//class for Linked List itself.

class Node {
	constructor(data, node = null) {
		this.data = next;
		this.next = node;
	}
} 

class LinkedList {
	constructor(node = null){
		this.head = node;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		if(!this.head){
			return null;
		}
		if(this.head.next === null){
			return 1;
		}

		let node = this.head;
		let count = 0;

		while(node.next !== null){
			count++;
			node = node.next;
		}

		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if(!this.head){
			return null; 
		}

		let node = node.next;

		while(node.next !== null){
			node = node.next;
		}

		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if(!this.head){
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if(!this.head){
			return null;
		}

		if(!this.head.next){
			let node = this.head;
			this.head = null;
			return node;
		}

		let prev = this.head;
		let last = this.head.next;

		while(last.next !== null){
			prev = prev.next;
			last = last.next;
		}

		prev.next = null;
		return last;
	}

	//Get the nth element of the Linked List, assuming n < size of Linked List
	getAt(n) {
		let node = head;

		for(let i=0; i<n; i++){
			node = node.next;
		}

		return node;
	}

	//Assuming n is less that size - method returns the removed node
	removeAt(n) {
		if(!this.head){
			return undefined;
		}

		if(n === 1){
			return this.head;
		}

		let node = this.head;

		for(let i=0; i<n; i++){
			node = node.next;
		}

		if(!node || !node.next){
			return null;
		}

		let ans = node.next;
		node.next = node.next.next;

		return ans;
	}

	insertAt(data, n) {
		let newNode = new Node(data);
		let node = this.head;

		for(let i=0; i<n; i++){
			node = node.next;
		}

		newNode.next = node.next;
		node.next = newNode;
	}

	forEach(fn) {
		let node = this.head;

		while(node.next !== null){
			fn(node);
			node = node.next;
		}
	}

	//Making the linked list an iterable, hence can be used directly with for..of loops
	*[Symbol.iterator]() {
		let node = this.head;
		while(node.next !== null){
			yield node;
			node = node.next;
		}
	}
}