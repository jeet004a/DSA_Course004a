var permuteUnique = function(nums) {
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
    let x = {}
    for (let i = 0; i < result.length; i++) {
        if (!x[result[i]]) {
            x[result[i]] = result[i]
        }
    }

    return Object.values(x)
};