//Leetcode 589. N-ary pre-order Traversal

var preorder = function(root) {
    if (!root) return []

    let result = []

    let dfs = (root, ) => {
        if (!root) return []
        result.push(root.val)
        for (let node of root.children) {
            dfs(node)
        }
    }

    dfs(root)
    return result
};