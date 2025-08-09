// leetcode 947. Most Stone Removed with Same Row of Column
//Reference video - https://www.youtube.com/watch?v=ZsGTpXm966E&list=PLpIkg8OmuX-I_49pdy1XFY6OcATnxUrrO&index=2

var removeStones = function(stones) {
    let n = stones.length
    let visited = new Array(n).fill(false)

    let dfs = (stone, i, visited) => {
        visited[i] = true
        let r = stone[i][0]
        let c = stone[i][1]
        for (let j = 0; j < n; j++) {
            if ((visited[j] == false) && (stone[j][0] == r || stone[j][1] == c)) {
                dfs(stone, j, visited)
            }
        }
    }

    let group = 0
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(stones, i, visited)
            group++
        }
    }

    return n - group
};