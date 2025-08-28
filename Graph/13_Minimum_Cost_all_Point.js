// leetcode. 1548 Min cost to connect all points


//Below code is using prim's algo
var minCostConnectPoints = function(points) {
    let V = points.length
    let adj = Array.from({ length: V }, () => [])

    for (let i = 0; i < V; i++) {
        for (let j = i + 1; j < V; j++) {
            let x1 = points[i][0]
            let y1 = points[i][1]

            let x2 = points[j][0]
            let y2 = points[j][1]

            let d = Math.abs(x1 - x2) + Math.abs(y1 - y2)
            adj[i].push([j, d])
            adj[j].push([i, d])
        }
    }
    let q = []
    let visited = new Array(V).fill(false)
    let addEdges = (u) => {
        visited[u] = true
        for (let [v, w] of adj[u]) {
            if (!visited[v]) {
                q.push([u, v, w])
            }
        }

    }
    let weight = 0
    let mst = []

    addEdges(0)

    while (q.length > 0 && mst.length < V - 1) {
        q.sort((a, b) => (a[2] - b[2]))
        let [u, v, w] = q.shift()
        if (visited[v]) continue
        mst.push([u, v, w])
        weight = weight + w
        addEdges(v)
    }

    return weight
}


//below code is most optimal
var minCostConnectPoints = function(points) {
    let V = points.length;
    let visited = new Array(V).fill(false);
    let minDist = new Array(V).fill(Infinity);
    minDist[0] = 0;

    let weight = 0;
    for (let i = 0; i < V; i++) {
        // pick unvisited node with smallest dist
        let u = -1;
        for (let j = 0; j < V; j++) {
            if (!visited[j] && (u === -1 || minDist[j] < minDist[u])) u = j;
        }
        visited[u] = true;
        weight += minDist[u];

        // update distances
        for (let v = 0; v < V; v++) {
            if (!visited[v]) {
                let d = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                if (d < minDist[v]) minDist[v] = d;
            }
        }
    }
    return weight;
};