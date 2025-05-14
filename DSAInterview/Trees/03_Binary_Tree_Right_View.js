var rightSideView = function(root) {
    if (!root) return []
    let q = [root]
    let result = []

    while (q.length) {
        result.push(q[q.length - 1].val)
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
    }

    return result
};