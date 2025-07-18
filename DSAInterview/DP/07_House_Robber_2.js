//leetcode 213. House Robber II
//Hint - This is using circular order so fist and last element should not consider


var rob = function(nums) {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]

    let check = (nums) => {
        let prev1 = 0
        let prev2 = 0
        let c = 0
        for (let num of nums) {
            let m = Math.max(prev1, prev2 + num)
                // console.log(m)
            prev2 = prev1
            prev1 = m
            c++
        }
        return prev1
    }

    let a = check(nums.slice(0, nums.length - 1))
    let b = check(nums.slice(1))

    return Math.max(a, b)
}