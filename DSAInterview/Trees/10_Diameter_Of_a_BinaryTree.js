var diameterOfBinaryTree = function(root) {
    if (!root) return 0
    let m = 0
    let dfs = (node) => {
        if (!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)

        m = Math.max(right + left, m)

        return Math.max(right, left) + 1
    }

    dfs(root)

    return m
}