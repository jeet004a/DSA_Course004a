var productExceptSelf = function(nums) {
    let ans = new Array(nums.length).fill(1)

    let prefix = 1

    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix
        prefix = prefix * nums[i]
    }

    let sufix = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * sufix
        sufix = sufix * nums[i]
    }
    console.log(ans)
};

nums = [1, 2, 3, 4]
productExceptSelf(nums)