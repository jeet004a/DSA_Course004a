//103 Leetcode Binary Tree ZigZag level order traversal
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let q = [root]

    let result = []
    let c = 1
    while (q.length) {
        if (c % 2 == 0) {
            result.push(q.map((node) => node.val))
        } else {
            result.push(q.map((node) => node.val).reverse())
        }
        let l = q.length

        while (l > 0) {
            let node = q.shift()
            if (node.right) {
                q.push(node.right)
            }
            if (node.left) {
                q.push(node.left)
            }

            l--
        }
        c++
    }

    return result
};