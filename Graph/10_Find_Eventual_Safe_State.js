// Leetcode 802. Find Eventual Safe State
// Reference Video - https://www.youtube.com/watch?v=k8LBJqGLLQE&t=579s

//Below solution is Using DFS
var eventualSafeNodes = function(graph) {
    let n = graph.length
    let visited = new Array(n).fill(false)
    let inRecursion = new Array(n).fill(false)

    let dfs = (visited, graph, i, inRecursion) => {
        visited[i] = true
        inRecursion[i] = true

        for (let neigh of graph[i]) {
            if (!visited[neigh] && dfs(visited, graph, neigh, inRecursion)) {
                return true
            } else if (inRecursion[neigh]) {
                return true
            }
        }

        inRecursion[i] = false
        return false
    }

    for (let i = 0; i < n; i++) {
        dfs(visited, graph, i, inRecursion)
    }

    let result = []
    for (let i = 0; i < n; i++) {
        if (!inRecursion[i]) {
            result.push(i)
        }
    }

    return result
}

//Below Solution using BFS