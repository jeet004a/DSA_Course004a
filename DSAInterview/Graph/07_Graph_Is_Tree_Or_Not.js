// 261. Leetcode graph is tree or not
// Hint - 1. Graph should be connected means multiple components are not allowed every not should be connected
// Hint - 2. If graph has a cycle then it is not a tree


//Below function check graph has a cycle or not using BFS
function isCycle(i, adj, visited, parent) {
    let q = [i]

    while (q.length) {
        let node = q.shift()
        visited[node] = true

        for (let neigh of adj[node]) {
            if (!visited[neigh]) {
                visited[neigh] = true
                parent[neigh] = node
                q.push(neigh)
            } else {
                if (neigh != parent[node]) return true
            }
        }
    }
    return false
}

function check(n, edges) {
    let adj = Array.from({ length: n }, () => [])

    for (let [i, j] of edges) {
        adj[i].push(j)
        adj[j].push(i)
    }

    visited = {}
    parent = {}
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            if (isCycle(i, adj, visited, parent)) return false
        }
    }

    return true

}

edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4]
]

// edges=[[0,1],[1,2],[2,3],[1,3],[1,4]]

console.log(check(5, edges))