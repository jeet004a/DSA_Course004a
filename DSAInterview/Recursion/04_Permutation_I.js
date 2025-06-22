// 46. Leetcode permuationvar permute = function(nums) {
var permute = function(nums) {
    let result = []

    let dfs = (nums, i) => {
        if (i == nums.length) {
            result.push(nums.slice())
            return
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs(nums, i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    dfs(nums, 0)
    return result
}