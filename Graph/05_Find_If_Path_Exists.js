//1971. Leetcode Find if Path Exists in Graph

var validPath = function(n, edges, source, destination) {
    let adj = Array.from({ length: n }, () => [])

    for (let [i, j] of edges) {
        adj[i].push(j)
        adj[j].push(i)
    }

    let visited = new Array(n).fill(0)
    let q = []
    q.push(source)
    visited[source] = 1
    while (q.length) {
        let node = q.shift()
        if (node == destination) {
            return true
        }
        for (let i of adj[node]) {
            if (visited[i] == 0) {
                visited[i] = 1
                q.push(i)
            }
        }
    }

    return false

};