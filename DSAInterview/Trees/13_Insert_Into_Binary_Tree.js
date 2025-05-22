// 701. Leetcode Insert into a Binary Search Tree

var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val)

    if (!root) return newNode

    let curr = root
    let prev = null

    while (curr) {
        if (val < curr.val) {
            prev = curr
            curr = curr.left
        } else {
            prev = curr
            curr = curr.right
        }
    }

    if (val < prev.val) {
        prev.left = newNode
    }

    if (val >= prev.val) {
        prev.right = newNode
    }

    return root
};