//Implementation of a Binary Search Tree along with following methods -
//Insertion() - To add a new element to the appropriate place in the BST.
//Contains() - To check is a particular element is present in the BST or not.
//Validate() - To check whether a given Binary Tree is a BST or not.

class BST {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(val) {
		if(this.left && val < this.data){
			this.left.insert(val);
		} else if(val < this.data) {
			this.left = new BST(val);
		} else if(this.right && val > this.data){
			this.right.insert(val);
		} else if(val > this.data){
			this.right = new BST(val);
		}
	}

	contains(val){
		if(this.data === val){
			return true;
		}

		if(this.left && val < this.data){
			this.left.contains(val);
		} else if(val < this.data){
			return false;
		} else if(this.right && val > this.data){
			this.right.contains(val);
		} else if(val > this.data){
			return false;
		}
	}
}


function validate(node, min = null, max = null){
	if(max !== null && node.data > max){
		return false;
	}

	if(min !== null && node.data < min){
		return false;
	}

	if(node.left && !validate(node.left, min, node.data)){
		return false;
	}

	if(node.right && !validate(node.right, node.data, max)){
		return false;
	}

	return true;
}


//Creating a new BST
let bst = new BST(100);
bst.insert(10);
bst.insert(24);
bst.insert(900);
bst.insert(123);
bst.insert(334);
bst.insert(1);
bst.insert(22);
bst.insert(84);

console.log(bst);

console.log(validate(bst));