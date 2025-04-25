class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
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
            return
        }

        return this.insertNode(this.root, newNode)
    }

    insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    getRoot() {
        return this.root
    }

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }


    PostOrder(node) {
        if (node != null) {
            this.inOrder(node.left)
            this.inOrder(node.right)
            console.log(node.data)
        }
    }

    PreOrder(node) {
        if (node != null) {
            console.log(node.data)
            this.inOrder(node.left)
            this.inOrder(node.right)
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

console.log('In Oder')
BST.inOrder(x)

console.log('Post Order')
BST.PostOrder(x)

console.log('Pre Order')
BST.PreOrder(x)