var levelOrder = function(root) {

    if (!root) return []
    let result = []
    let q = [root]
        //   q.push(root)

    while (q.length > 0) {
        let x = q.length
        let currrentLevel = []
            // currrentLevel.push(x.val)

        for (let i = 0; i < x; i++) {
            let node = q.shift()
            currrentLevel.push(node.val)

            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        result.push(currrentLevel)
    }

    return result
};