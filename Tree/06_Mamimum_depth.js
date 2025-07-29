// Leetcode 104 Maimum Depth of Binary Tree

//Below solution is recursive way
var maxDepth = function(root) {
    if (!root) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    return Math.max(left, right) + 1
};


//Below solution using bfs
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