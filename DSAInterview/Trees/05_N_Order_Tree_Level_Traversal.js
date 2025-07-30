//429 Leetcode
var levelOrder = function(root) {
    if (!root) return []
    let q = [root]
    result = []
    while (q.length) {
        result.push(q.map((node) => node.val))
        let l = q.length
        while (l > 0) {
            let node = q.shift()
            for (let child of node.children) {
                q.push(child)
            }
            l--
        }
    }
    return result
};


//Below is the optimal solution
var levelOrder = function(root) {
    if (!root) return []
    let q = [root]
    result = []
    while (q.length) {
        let l = q.length
        let b = []
        for (let i = 0; i < l; i++) {
            let node = q.shift()
            b.push(node.val)
            if (node.children) {
                q.push(...node.children)
            }
        }
        result.push(b)
    }
    return result
}

//Below is one more solution
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

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
                q.push(...node.children) //This process similar like if we have left or right. In this scenerio we have childer that is why we use spread operator to push all the childern to current q
            }
            l--
        }
    }

    return result
};