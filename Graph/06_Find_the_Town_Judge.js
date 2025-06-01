// 997. Leetcode Find the Twon Judge

//First calculate inDegree and outDegree of each node and then if there is a node with inDegree equal to n-1 and outDegree equal to 0 then return that node as the judge. If no such node exists then return -1.

//***** Find out one node which gain trust from all other nodes and does not trust anyone else

var findJudge = function(n, trust) {
    let adj = Array.from({ length: n + 1 }, () => [])
    let inDegree = new Array(n + 1).fill(0)
    let outDegree = new Array(n + 1).fill(0)
    for (let [i, j] of trust) {
        adj[i].push(j)
        outDegree[i]++
            inDegree[j]++
    }

    for (let i = 1; i < inDegree.length; i++) {
        if (inDegree[i] == n - 1 && outDegree[i] == 0) {
            return i
        }
    }

    return -1
};