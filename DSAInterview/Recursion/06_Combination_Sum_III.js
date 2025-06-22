// .216 Leetcode combination sum III

var combinationSum3 = function(k, n) {
    let result = []
    let nums = []

    for (let i = 1; i <= 9; i++) {
        nums.push(i)
    }

    let dfs = (nums, i, n, k, slate) => {
        if (n < 0) {
            return
        }
        if (slate.length == k) {
            if (n == 0) {
                result.push(slate.slice())
            }
            return
        }

        for (let j = i; j < nums.length; j++) {
            slate.push(nums[j])
            dfs(nums, j + 1, n - nums[j], k, slate)
            slate.pop()
        }
    }

    dfs(nums, 0, n, k, [])
    return result
};