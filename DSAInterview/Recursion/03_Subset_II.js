// 90. Leetcode Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

var subsetsWithDup = function(nums) {
    let result = []
    let r = {}
    nums.sort((a, b) => (a - b))
    let dfs = (nums, i, slate) => {
        if (i == nums.length) {
            let x = slate.slice()
            result.push(x)
            return
        }
        //exclude
        dfs(nums, i + 1, slate)

        //include
        slate.push(nums[i])
        dfs(nums, i + 1, slate)
        slate.pop()
    }

    dfs(nums, 0, [])
    for (let i of result) {
        if (!r[i]) {
            r[i] = i
        }
    }
    return Object.values(r)
};