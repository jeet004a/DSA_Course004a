function check(V, E, Edges) {
    let adj = Array.from({ length: V }, () => [])

    for (let [u, v, w] of Edges) {
        adj[u].push([v, w])
        adj[v].push([u, w])
    }

    let visited = new Array(V).fill(false)
    let mst = []
    let weight = 0

    // Min-Heap (priority queue)
    let q = []
    let addEdges = (u) => {
        visited[u] = true
        for (let [v, w] of adj[u]) {
            if (!visited[v]) {
                q.push([w, u, v]) // store as [weight, from, to]
            }
        }
        q.sort((a, b) => (a[0] - b[0])) // keep smallest weight first

    }

    addEdges(0)

    while (q.length > 0 && mst.length < V - 1) {
        let [w, u, v] = q.shift() // pick smallest edge
        if (visited[v]) continue // avoid cycle
        mst.push([u, v, w])
        weight = weight + w
        addEdges(v)
    }

    console.log(mst)
    console.log(weight)
}


V = 3, E = 3, Edges = [
    [0, 1, 5],
    [1, 2, 3],
    [0, 2, 1]
]

check(V, E, Edges)