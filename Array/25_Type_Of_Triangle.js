// 3024. Leetcode type of triangle

var triangleType = function(nums) {
    let a = nums[0]
    let b = nums[1]
    let c = nums[2]

    if (a + b <= c || b + c <= a || a + c <= b) {
        return "none"
    }


    if (a === b && b == c) {
        return "equilateral"
    }

    if (a == b || b == c || c == a) {
        return "isosceles"
    }

    return "scalene"
};