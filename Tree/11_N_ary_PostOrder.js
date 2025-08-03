// Leetcode 590 N-ary post order tarvarsal

var postorder = function(root) {
    if (!root) return []

    let result = []

    let dfs = (root, ) => {
        if (!root) return []

        for (let node of root.children) {
            dfs(node)
        }
        result.push(root.val)
    }

    dfs(root)
    return result
};