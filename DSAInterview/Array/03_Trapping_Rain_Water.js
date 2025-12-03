// Leetcode 42.
//Reference Video link - https://www.youtube.com/watch?v=f2QgmVxPiS4&t=763s

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = []
    let rightMax = []
    let l = 0
    let r = 0
    let result = 0
    for (let i = 0; i < height.length; i++) {
        leftMax.push(l)
        l = Math.max(l, height[i])
    }
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax.push(r)
        r = Math.max(r, height[i])
    }
    rightMax.reverse()

    for (let i = 0; i < height.length; i++) {
        let k = Math.min(leftMax[i], rightMax[i])
        result = result + (k - height[i] < 0 ? 0 : k - height[i])
    }
    return result
};