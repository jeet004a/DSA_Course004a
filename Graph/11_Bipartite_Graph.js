// Leetcode 785. Is Graph Bipartite
// Reference Video - https://www.youtube.com/watch?v=NeU-C1PTWB8&list=PLpIkg8OmuX-LZB9jYzbbZchk277H5CbdY&index=16
// Bipartite Graph is if able you color your graph consequtivly then your graph is bipartite 

// Below code using DFS
var isBipartite = function(graph) {
    let n = graph.length
    let color = new Array(n).fill(-1)
    let visited = new Array(n).fill(false)
        // let flag=0
    let result = []
    let dfs = (visited, i, graph, color, flag) => {
        visited[i] = true
        result.push(i)
        color[i] = flag

        for (let j of graph[i]) {
            if (color[i] == color[j]) {
                return false
            }
            if (!visited[j]) {
                if (!dfs(visited, j, graph, color, 1 - flag)) {
                    return false
                }

            }
        }
        return true
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            if (!dfs(visited, i, graph, color, 0)) {
                return false
            }
        }
    }

    return true
}