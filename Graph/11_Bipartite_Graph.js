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




//Below code is for BFS
var isBipartite = function(graph) {
    let n = graph.length
    let visited = new Array(n).fill(false)
    let color = new Array(n).fill(-1)

    //the outer extra for loop handle disconnected graph
    for (let i = 0; i < n; i++) {
        if (color[i] !== -1) { //already visited
            continue
        }
        let q = [i]
        color[i] = 0
        while (q.length) {
            let node = q.shift()
            visited[node] = true
            for (let j of graph[node]) {
                if (!visited[j]) {
                    if (color[j] === -1) {
                        color[j] = 1 - color[node]

                    } else if (color[j] == color[node]) {
                        return false
                    }
                    q.push(j)
                }

            }
        }
    }

    return true
};