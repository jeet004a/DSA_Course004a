//Below code is 4 directions only (Leetcode. 200 Soluion.)
function dfs(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
        return
    }
    grid[i][j] = "0"
    dfs(i + 1, j, grid)
    dfs(i - 1, j, grid)
    dfs(i, j + 1, grid)
    dfs(i, j - 1, grid)
}

var numIslands = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dfs(i, j, grid)
                count++
            }
        }
    }

    return count
};

//Below code is for 8 directions (GFG solution)
class Solution {
    numIslands(grid) {
        // code here

        const dirs = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        let solve = (i, j, grid) => {
            if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 'W') {
                return
            }

            grid[i][j] = 'W'

            // solve(i,j+1,grid)
            // solve(i,j-1,grid)
            // solve(i+1,j,grid)
            // solve(i-1,j,grid)

            for (let [x, y] of dirs) {
                solve(i + x, j + y, grid)
            }
        }


        let count = 0

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 'L') {
                    solve(i, j, grid)
                    count++
                }
            }
        }

        return count
    }
}