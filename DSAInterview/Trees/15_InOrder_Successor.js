inOrderSuccessor(root, x) {
    // code here
    let s = new Node(null)

    while (root) {
        if (x.val >= root.val) {
            root = root.right
        } else {
            s = root
            root = root.left
        }
    }

    return s.val
}