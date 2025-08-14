function check(graph) {
    let n = graph.length
    let visited = new Array(n).fill(false)

    let dfs = (visited, graph, i, parent) => {
        visited[i] = true

        for (let neigh of graph[i]) {
            if (!visited[neigh]) {
                if (dfs(visited, graph, neigh, i)) {
                    return true
                }
            } else if (neigh != parent) {
                return true
            }
        }
        return false
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i] && dfs(visited, graph, i, -1)) {
            console.log('Cycle Detected')
            process.exit(0)
        }
    }

    console.log('No Cycle')
}




// let a=[[1,2],[0,2],[1,0]]
let a = [
    [1],
    [0, 2, 3],
    [1, 3],
    [1, 2],
    []
]

check(a)