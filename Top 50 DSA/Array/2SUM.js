// Leetcode 1. 2 Sumvar twoSum = function(nums, target) {
var twoSum = function(nums, target) {
    let obj = new Map()

    for (let i = 0; i < nums.length; i++) {
        let check = target - nums[i]
        if (obj.has(check)) {
            return [obj.get(check), i]
        }

        obj.set(nums[i], i)
    }
};