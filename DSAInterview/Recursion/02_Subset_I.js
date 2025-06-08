// 78. Subsets I
// Given an integer array nums of unique elements, return all possible subsets (the power set).

var subsets = function(nums) {
    let result = []
        // nums.sort((a,b)=>(a-b))
    let dfs = (nums, i, slate) => {
        if (i == nums.length) {
            result.push(slate.slice())
            return
        }

        dfs(nums, i + 1, slate)

        slate.push(nums[i])
        dfs(nums, i + 1, slate)
        slate.pop()
    }

    dfs(nums, 0, [])
    return result
};