// 547. Leetcode Number of Provinces


var findCircleNum = function(isConnected) {
    let n = isConnected.length
    let visited = new Array(n).fill(false)
    let c = 0
    let dfs = (j) => {
        for (let ne = 0; ne < n; ne++) {
            if (isConnected[j][ne] == 1 && !visited[ne]) {
                visited[j] = true
                dfs(ne)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true
            dfs(i)
            c++
        }
    }

    return c
};