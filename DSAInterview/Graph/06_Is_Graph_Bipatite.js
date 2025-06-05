// 785. Leetcode Is Graph Bipartite

function isCycle(i, graph, visited, distance) {
    let q = [i]
        // visited[i]=true
    distance[i] = 0
    while (q.length) {
        let node = q.shift()
        visited[node] = true
        for (let neigh of graph[node]) {
            if (!visited[neigh]) {
                visited[neigh] = true
                distance[neigh] = distance[node] + 1
                q.push(neigh)
            } else {
                if (distance[neigh] == distance[node]) return false
                    //Mostly this step use when we want to check graph is a cycle or not [neigh!=parent[node]]
                    //But this line is node and neigh distance are same in that case graph is not a bipartite graph but even graph is a cycle aslong as distance of node and neigh are not same then graph is bipartite
            }
        }
    }
    return true
}
var isBipartite = function(graph) {
    let visited = {}
    let distance = {}

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            if (!isCycle(i, graph, visited, distance)) return false
        }
    }

    return true
};