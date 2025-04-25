function check(nums, k) {
    let l = 0
    let sum = 0
    let maxValue = 0
    let c = 0

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] != 0) {
            sum = sum + nums[r]
        } else {
            sum = sum + 1
            c++
        }

        while (c > k) {
            sum = sum - 1
            if (nums[l] == 0) {
                c--
            }
            l++
        }

        maxValue = Math.max(maxValue, (r - l + 1))
    }

    console.log(maxValue)
}

// nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
check(nums, k)