//========= Implementation of a tree data structure in JS ===========

// 1 - Implementation of a Node of a tree - having data value and children array.
//add() - Adds a children to the node
//remove() - Removes a children from the node

class Node {
	constructor(data){
		this.data = data;
		this.children = [];
	}

	add(val){
		this.children.push(new Node(val));
	}

	remove(val){
		this.children = this.children.filter(v => v.data !== val);
	}
}

/* Implementation of an actual tree structure - containing a root node, which is an
instance of Node class */

class Tree {
	constructor() {
		this.root = null;
	}

	//Breadth first traversal of a tree
	BFTraversal(){
		let arr = [this.root];

		while(arr.length){
			let node = arr.shift();
			arr.push(...node.children);
			console.log(node.data);
		}
	}

	//Depth first traversal of a tree
	DFTraversal(){
		let arr = [this.root];

		while(arr.length){
			let node = arr.shift();
			arr.unshift(...node.children);
			console.log(node);
		}
	}
}

//A function returning an aray containing an array of width of each level
function levelWidth(tree){
	let stopper = 's';
	let counter = [0];
	let arr = [tree.root];
	arr.push(stopper);

	while(arr.length > 1){
		let node = arr.shift();
		if(node === stopper){
			arr.push(stopper);
			counter.push(0);
		} else {
			arr.push(...node.children);
			counter[counter.length - 1]++;
		}
	}

	return counter;
}


//Implementing a sample tree
let nodeA = new Node(10);

let nodeB = new Node(2);

let nodeC = new Node(4);
nodeC.add(new Node(48));

let nodeD = new Node(100);
nodeD.add(new Node(1000));

nodeB.add(new Node(1));
nodeB.add(nodeD);
nodeB.add(new Node(43));

nodeA.add(nodeB);
nodeA.add(nodeC);

let tree = new Tree();
tree.root = nodeA;
tree.BFTraversal();

console.log(levelWidth(tree));
