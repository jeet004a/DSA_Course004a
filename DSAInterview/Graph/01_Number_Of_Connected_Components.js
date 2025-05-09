class Solution {
    /**
    * @param number V
    * @param number[][] edges

    * @returns number[][]
    */
    graph(V, edges) {
        const adjList = Array.from({ length: V }, () => [])
        for (let [v, u] of edges) {
            adjList[v].push(u)
            adjList[u].push(v)
        }

        return adjList
    }

    dfs(node, adj, visited, com) {
        visited[node] = true
        com.push(node)
        for (let ne of adj[node]) {
            if (!visited[ne]) {
                this.dfs(ne, adj, visited, com)
            }
        }


    }

    getComponents(V, edges) {
        // code here

        let adj = this.graph(V, edges)

        let visited = new Array(V).fill(false);
        let c = []

        for (let i = 0; i < V; i++) {
            let x = []
            if (!visited[i]) {

                this.dfs(i, adj, visited, x)
            }
            c.push(x)
        }

        return c

    }

}


V = 5, edges[][] = [
    [0, 1],
    [2, 1],
    [3, 4]
]