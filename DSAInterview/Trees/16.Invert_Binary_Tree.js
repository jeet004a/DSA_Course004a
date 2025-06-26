// Leetcode 226. Invert Binary tree


//Brute force approch
var invertTree = function(root) {
    if (!root) return root
    let result = new TreeNode(root.val)
    let q = [
        [root, result]
    ]

    while (q.length) {
        let l = q.length
        let [node, mirror] = q.shift()
            // while(l>0){
            //     if(node.right){
            //         mirror.left=new TreeNode(node.right.val)
            //         q.push([node.right,mirror.left])
            //     }
            //     if(node.left){
            //         mirror.right=new TreeNode(node.left.val)
            //         q.push([node.left,mirror.right])
            //     }
            //     l--
            // }
        if (node.right) {
            mirror.left = new TreeNode(node.right.val)
            q.push([node.right, mirror.left])
        }
        if (node.left) {
            mirror.right = new TreeNode(node.left.val)
            q.push([node.left, mirror.right])
        }
    }

    return result
};


//Most optimal approch
var invertTree = function(root) {
    if (!root) return root
    let temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
}