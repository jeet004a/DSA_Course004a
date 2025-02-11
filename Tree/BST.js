class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class BTree {
    constructor() {
        this.root = null
    }


    insert(data) {
        let newNode = new Node(data)
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    getRoot() {
        return this.root
    }


    inorder(node) {
        if (node != null) {
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    preorder(node) {
        if (node != null) {
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node) {
        if (node != null) {
            this.preorder(node.left)
            this.preorder(node.right)
            console.log(node.data)
        }
    }


    searchData(node, data) {
        if (node == null) {
            return null
        } else if (data < node.data) {
            return this.searchData(node.left, data)
        } else if (data > node.data) {
            return this.searchData(node.right, data)
        } else {
            return true
        }
    }
}




let BST = new BTree()

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);


let x = BST.getRoot()
console.log('In Order')
BST.inorder(x)
console.log('Pre Order')
BST.preorder(x)
console.log('Post Order')
BST.postorder(x)
console.log('Search Node')

if (BST.searchData(x, 5)) {
    console.log(true)
} else {
    console.log(false)
}