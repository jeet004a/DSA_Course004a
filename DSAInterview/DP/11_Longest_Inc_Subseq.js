// Leetcode 300. Longest Increasing Subsequence.

//Reference Video - https://www.youtube.com/watch?v=h9rm4N8XbL0&list=PLpIkg8OmuX-JhFpkhgrAwZRtukO0SkwAt&index=12


//Most Optimal
var lengthOfLIS = function(nums) {
    let m = 1
    let t = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                t[i] = Math.max(t[i], t[j] + 1)
                m = Math.max(m, t[i])
            }
        }
    }

    return m
}



//Another way below
function binarySearch(a, target) {
    let slow = 0
    let fast = a.length - 1
    let mid = 0

    while (slow <= fast) {
        mid = Math.floor((slow + fast) / 2)

        if (a[mid] == target) {
            return mid
        }
        if (a[mid] > target) {
            fast = mid - 1
        }
        if (a[mid] < target) {
            slow = mid + 1
        }
    }
    return slow
}
var lengthOfLIS = function(nums) {
    let k = []
    for (let i = 0; i < nums.length; i++) {
        if (!k.length || k[k.length - 1] < nums[i]) {
            k.push(nums[i])
        } else {
            let idx = binarySearch(k, nums[i])
            k[idx] = nums[i]
        }
    }

    return k.length
};