//Leetcode 63. Unique Path II

//Method - DP and memoziation

var uniquePathsWithObstacles = function(obstacleGrid) {
    let t = Array.from({ length: obstacleGrid.length }, () => new Array(obstacleGrid[0].length).fill(-1))
        // console.log(t)
    let solve = (i, j, m, n) => {
        if (i >= m || j >= n) {
            return 0
        }

        if (obstacleGrid[i][j] == 1) {
            return 0
        }
        if (i == m - 1 && j == n - 1) {
            return 1
        }
        if (t[i][j] != -1) {
            return t[i][j]
        }
        let right = solve(i + 1, j, m, n)
        let down = solve(i, j + 1, m, n)

        return t[i][j] = right + down
    }

    let a = solve(0, 0, obstacleGrid.length, obstacleGrid[0].length)

    return a
};