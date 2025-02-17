//Q. Return maximum subarray sum
// [-2,1,-3,4,-1,2,1,-5,4]   result --- The subarray [4,-1,2,1] has the largest sum 6

function maxSubArray(nums) {
    let sum = 0
    let maxi = Math.min(...nums)

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]

        if (sum > maxi) {
            maxi = sum
        }

        if (sum < 0) {
            sum = 0
        }
    }

    console.log(maxi)
}


// let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let a = [5, 4, -1, 7, 8]

maxSubArray(a)