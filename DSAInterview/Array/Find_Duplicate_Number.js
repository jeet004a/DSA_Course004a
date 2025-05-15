// 287. Leetcode  Find the duplicate number

var findDuplicate = function(nums) {
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            return nums[i]
        } else {
            m.set(nums[i], 1)
        }
    }
    return 0
};