// Leetcode 198. House Robber I

//Below code is  using Dynamic Programming
var rob = function(nums) {
    let t = new Array(nums.length).fill(-1)
    let solve = (nums, i, n) => {
        if (i >= n) {
            return 0
        }

        if (t[i] != -1) {
            return t[i]
        }


        let steal = nums[i] + solve(nums, i + 2, n)
        let skip = solve(nums, i + 1, n)

        return t[i] = Math.max(steal, skip)
    }
    let n = nums.length
    return solve(nums, 0, n)
}



//Below function not using dynamic programming
var rob = function(nums) {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]
    let prev1 = 0
    let prev2 = 0
    for (let num of nums) {
        let t = Math.max(prev1, prev2 + num)
        prev2 = prev1
        prev1 = t
    }

    return prev1
};