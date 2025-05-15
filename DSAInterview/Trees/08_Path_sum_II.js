// .113 Leetcode Path Sum II
var pathSum = function(root, targetSum) {
    if (!root) return []

    let result = []

    function dfs(node, sum, slate) {
        if (!node.right && !node.left) {
            if (sum == node.val) {
                slate.push(node.val)
                result.push(slate.slice())
                slate.pop()
            }
        }

        if (node.right) {
            slate.push(node.val)
            dfs(node.right, sum - node.val, slate)
            slate.pop()
        }

        if (node.left) {
            slate.push(node.val)
            dfs(node.left, sum - node.val, slate)
            slate.pop()
        }
    }

    dfs(root, targetSum, [])
    return result
};