// Leetcode 198. Word Break I
// Hints - Using dynamic programming - and every time prev1 hold the last max values and its also hold the adjcent values 

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