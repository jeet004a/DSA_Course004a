// Leetcode 104. Maximum depth of a binary tree

var maxDepth = function(root) {
    if (!root) return 0
    let q = [root]
    let d = 0
    while (q.length) {
        let l = q.length
        while (l > 0) {
            let node = q.shift()
            if (node.left) {
                q.push(node.left)
            }
            if (node.right) {
                q.push(node.right)
            }
            l--
        }
        d++
    }
    return d
};