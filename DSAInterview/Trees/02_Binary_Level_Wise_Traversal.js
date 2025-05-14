//107 leetcode Binary level order traversal from buttom
var levelOrderBottom = function(root) {
    if (!root) return []
    let result = []
    let q = [root]

    while (q.length) {
        result.push(q.map((node) => node.val))
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

    return result.reverse()
};