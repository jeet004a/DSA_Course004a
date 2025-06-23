// Find the value 10 from the array =[1, [2, 3, [4, 5, [6, 7]]], [8, 9, [10]]]
// Approch using recursion

function valid(nums, target) {
    for (let item of nums) {
        if (Array.isArray(item)) {
            if (valid(item, target)) return true
        } else if (item == target) {
            return true
        }
    }

    return false
}

function check(nums, taregt) {
    console.log(valid(nums, taregt))
}


nums = [1, [2, 3, [4, 5, [6, 7]]],
    [8, 9, [10]]
]

check(nums, 2)