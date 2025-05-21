// 236. Leetcode LOWEST COMMON ANCESTOR OF A BINARY TREE

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root == q || root == p) return root

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left == null) {
        return right
    } else if (right == null) {
        return left
    } else {
        return root
    }
};