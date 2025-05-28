function topologicalSort(V, edges) {
    let inDegree = new Array(V).fill(0)
    let adj = Array.from({ length: V }, () => [])

    for (let [i, j] of edges) {
        adj[i].push(j)
        inDegree[j]++
    }
    let q = []
    for (let i = 0; i < V; i++) {
        if (inDegree[i] == 0) {
            q.push(i)
        }
    }

    let ans = []

    while (q.length) {
        let node = q.shift()
        ans.push(node)
        for (let x of adj[node]) {
            inDegree[x]--
                if (inDegree[x] == 0) {
                    q.push(x)
                }
        }
    }

    // let k=q.shift()

    console.log(ans)

}


// V = 4
// let edges = [[3, 0], [1,0], [2, 0]]

let edges = [
    [1, 3],
    [2, 3],
    [4, 1],
    [4, 0],
    [5, 0],
    [5, 2]
]
V = 6

// let edges=[[5,2],[5,0],[4,0],[4,1],[2,3],[3,1]]
// V=6

// let edges=[[0,1],[1,2],[2,3]]
// V=4
topologicalSort(V, edges)