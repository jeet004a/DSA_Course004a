// Leetcode 310. Minimum height tree
//Hint- You just exclude the leave nodes and return the last leave. So that leave is hold only minimum height of the tree
//Refrence video - https://www.youtube.com/watch?v=ZXANlaEuYvQ&t=2440s


//Most optimal solution
var findMinHeightTrees = function(n, edges) {
    if (n == 0) return edges
    if (n == 1) return [0]
    let Adj = Array.from({ length: n }, () => [])
    let degree = new Array(n).fill(0)
    for (let [i, j] of edges) {
        Adj[i].push(j)
        Adj[j].push(i)
        degree[i]++
            degree[j]++
    }

    let leaves = []
    for (let i = 0; i < n; i++) {
        if (degree[i] == 1) {
            leaves.push(i)
        }
    }

    let remaining = n
    while (remaining > 2) {
        let newLeaves = []
        remaining = remaining - leaves.length
        for (let leave of leaves) {
            for (let i of Adj[leave]) {
                degree[i]--
                    if (degree[i] == 1) {
                        newLeaves.push(i)
                    }
            }
            degree[leave] = 0
        }
        leaves = newLeaves
    }

    return leaves
};