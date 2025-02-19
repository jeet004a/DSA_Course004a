// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
function reverseArray(a, start, end) {
    while (start < end) {
        let temp = a[start]
        a[start] = a[end]
        a[end] = temp
        start++
        end--
    }

    return a
}

function nextPermutation(nums) {
    let index = -1
    let n = nums.length
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i
            break
        }
    }

    if (index == -1) {
        nums = reverseArray(nums, 0, n - 1)
        console.log(nums)
        process.exit(0)
    }

    for (let i = n - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            break
        }
    }

    let start = index + 1
    let end = n - 1

    nums = reverseArray(nums, start, end)

    console.log(nums)
}


// let a = [1, 2, 3]
// let a = [3, 2, 1]
let a = [1, 1, 5]

nextPermutation(a)