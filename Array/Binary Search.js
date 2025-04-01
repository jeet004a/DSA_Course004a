//Below question conatains bianry search 
//Q 704. Binary Search Leetcode


var search = function(nums, target) {
    nums = nums.sort((a, b) => (a - b))
    let r = nums.length - 1
    let l = 0
    let result = -1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] == target) {
            result = mid
            break
        } else if (target < nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return result
};