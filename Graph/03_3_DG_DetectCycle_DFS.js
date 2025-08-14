//Reference Video - https://www.youtube.com/watch?v=K_LamGUvwUc&list=PLpIkg8OmuX-LZB9jYzbbZchk277H5CbdY&index=6
function check(graph) {
    let n = graph.length
    let visited = new Array(n).fill(false)
    let inRecusion = new Array(n).fill(false)

    let dfs = (visited, graph, i, inRecusion) => {
        visited[i] = true
        inRecusion[i] = true
        for (let neigh of graph[i]) {
            if (!visited[neigh] && dfs(visited, graph, neigh, inRecusion)) {
                return true
            } else if (inRecusion[neigh]) {
                return true
            }
        }
        inRecusion[i] = false
        return false
    }


    for (let i = 0; i < n; i++) {
        if (!visited[i] && dfs(visited, graph, i, inRecusion)) {
            console.log('Cycle Detected')
            process.exit(0)
        }
    }

    console.log('No Cycle')
}