// Leetcode 213. House Robber II


//Below code using DP + Memoization

var rob = function(nums) {
    if (nums.length < 2) return nums[0]
    let solve = (arr) => {
        let t = new Array(arr.length + 1).fill(-1)
        let n = arr.length
        let dp = (i) => {
            if (i >= n) {
                return 0
            }

            if (t[i] != -1) {
                return t[i]
            }

            let steal = arr[i] + dp(i + 2)
            let skip = dp(i + 1)

            return t[i] = Math.max(steal, skip)
        }
        return dp(0)
    }

    let a = solve(nums.slice(0, nums.length - 1))
    let b = solve(nums.slice(1))

    return Math.max(a, b)
}



//With out DP
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