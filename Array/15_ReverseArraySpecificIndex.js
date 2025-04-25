function reverseArray(nums, start, end) {
    if (nums.length - 1 < end) {
        console.log('Start and end index are not valid')
        process.exit(1)
    }

    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }

    console.log(nums)
}


let a = [1, 2, 3, 4, 5]
console.log(a)
reverseArray(a, 3, 4)