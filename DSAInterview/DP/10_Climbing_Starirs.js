//Leetcode 70. Climbing Staris
//Question - https://leetcode.com/problems/climbing-stairs/
//Reference video - https://www.youtube.com/watch?v=6OjGE04Kx_M

//Below code is solved using dp+memoization


var climbStairs = function(n) {
    let arr = new Array(50).fill(-1)
    let solve = (m) => {
        if (m < 0) return 0
        if (m == 0) return 1
        if (arr[m] != -1) {
            return arr[m]
        }
        let a = solve(m - 1)
        let b = solve(m - 2)

        return arr[m] = a + b
    }

    return solve(n)
};