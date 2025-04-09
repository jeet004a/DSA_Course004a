function check(nums, goal) {
    let l = 0
    let sum = 0
    let maxValue = 0

    for (let r = 0; r < nums.length; r++) {
        sum = sum + nums[r]

        while (sum > goal && l <= r) {
            sum = sum - nums[l]
            l++
        }

        maxValue = maxValue + (r - l + 1)
    }

    return maxValue
}

function fun1(nums, goal) {
    return check(nums, goal) - check(nums, goal - 1)
}



// nums = [1, 0, 1, 0, 1], goal = 2
nums = [0, 0, 0, 0, 0], goal = 0

console.log(fun1(nums, goal))