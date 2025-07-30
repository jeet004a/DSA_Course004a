//Leetcode 110. Balanced Binary Tree

var isBalanced = function(root) {
    if (!root) return true

    let dfs = (root) => {
        if (!root) return 0
        let leftTree = dfs(root.left)
        if (leftTree == -1) return -1
        let rightTree = dfs(root.right)
        if (rightTree == -1) return -1

        if (Math.abs(leftTree - rightTree) > 1) return -1 //If left tree height and right height diffrence is more than 1 then return false 

        return Math.max(leftTree, rightTree) + 1
    }

    let x = dfs(root)
    return x != -1
};