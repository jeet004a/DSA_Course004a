//2680 Leetcode Shortest cycle in a graph
//Below code using bfs
var findShortestCycle = function(n, edges) {
    let g = Array.from({ length: n }, () => [])

    for (let [i, j] of edges) {
        g[i].push(j)
        g[j].push(i)
    }

    let minCycle = Infinity

    for (let i = 0; i < n; i++) {
        let dist = new Array(n).fill(-1)
        let parent = new Array(n).fill(-1)

        let q = [i]

        dist[i] = 0

        while (q.length) {
            let node = q.shift()

            for (let v of g[node]) {
                if (dist[v] === -1) {
                    dist[v] = dist[node] + 1
                    parent[v] = node
                    q.push(v)
                } else if (parent[node] != v) {
                    console.log()
                }
            }
        }
    }

    return minCycle === Infinity ? -1 : minCycle
};


[
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1]
]