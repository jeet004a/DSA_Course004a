//.112 Leetcode path sum
var hasPathSum = function(root, targetSum) {
    if (!root) return false

    if (!root.right && !root.left) {
        return root.val == targetSum
    }
    let newSum = targetSum - root.val
    return hasPathSum(root.right, newSum) || hasPathSum(root.left, newSum)
};