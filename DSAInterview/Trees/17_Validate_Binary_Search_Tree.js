// Leetcode 98. Validate the binary search tree
//Hint :- First traverse the tree based on Inorder traversal like - left(all smaller element),root,right(all bigger element). Then traverse the list and check list is sorted or not.

var isValidBST = function(root) {
    if (!true) return true
    let result = []
    let dfs = (root, result) => {
        if (!root) return []
        dfs(root.left, result)
        result.push(root.val)
        dfs(root.right, result)
    }

    dfs(root, result)

    let flag = true
    let prev = -Infinity
    for (let i = 0; i < result.length; i++) {
        if (result[i] <= prev) {
            flag = false
        }
        prev = result[i]
    }

    return flag
};