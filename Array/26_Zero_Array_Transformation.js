//3355. Leetcode Zero array transformation
//Brute force - below approch is not working proprely
var isZeroArray = function(nums, queries) {
    for (let i = 0; i < queries.length; i++) {
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            if (nums[j] == 0) {
                continue
            } else {
                nums[j] = nums[j] - 1
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            return false
        }
    }

    return true
};



//Most optimal solution
var isZeroArray = function(nums, queries) {
    let a = Array.from({ length: nums.length }).fill(0)
    let n = nums.length
    for (const [i, j] of queries) {
        a[i] += 1
        if ((j + 1) < n) {
            a[j + 1] -= 1
        }
    }

    c = 0

    for (let i = 0; i < nums.length; i++) {
        c += a[i]
        if (nums[i] > c) {
            return false
        }
    }

    return true
};