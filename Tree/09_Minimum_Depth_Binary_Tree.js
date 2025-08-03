//Leetcode 111. Minimum depth of Binary tree

// Using BFS
var minDepth = function(root) {
    if (!root) return 0
    let q = [{ node: root, depth: 1 }]
    while (q.length) {
        let { node, depth } = q.shift()

        if (!node.right && !node.left) {
            return depth
        }

        if (node.left) {
            q.push({ node: node.left, depth: depth + 1 })
        }

        if (node.right) {
            q.push({ node: node.right, depth: depth + 1 })
        }
    }
}

// Using DFS