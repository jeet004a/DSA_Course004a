//leetcode 429. N-ary Tree level order tarversal
var levelOrder = function(root) {
    if (!root) return []
    let q = [root]
    result = []
    while (q.length) {
        let l = q.length
        result.push(q.map((data) => data.val))
        while (l > 0) {
            let node = q.shift()
            if (node.children) {
                q.push(...node.children)
            }
            l--
        }
    }

    return result
};