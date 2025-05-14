// .144 Leetcode Binary tree preorder traversal 
var preorderTraversal = function(root) {
    if (!root) return []
    let q = [root]
    let result = []

    while (q.length) {
        let node = q.pop()
        result.push(node.val)
        if (node.right) {
            q.push(node.right)
        }
        if (node.left) {
            q.push(node.left)
        }
    }
    return result
};