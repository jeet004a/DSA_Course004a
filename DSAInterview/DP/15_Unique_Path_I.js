//Leetcode .62

//Method - Using DP and memoization.
var uniquePaths = function(m, n) {
    let t = Array.from({ length: m }, () => new Array(n).fill(-1))

    let solve = (i, j, m, n) => {
        if (i >= m || j >= n) {
            return 0
        }

        if (i == m - 1 && j == n - 1) {
            return 1
        }
        if (t[i][j] != -1) {
            return t[i][j]
        }
        let top = solve(i + 1, j, m, n)
        let down = solve(i, j + 1, m, n)

        return t[i][j] = top + down
    }

    return solve(0, 0, m, n)
};