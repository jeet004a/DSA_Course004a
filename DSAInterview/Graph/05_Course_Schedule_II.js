//210. Leetcode Course Schedule II


//  ** First topological sort and if the result length is not equal to numCourses, return an empty array.
var findOrder = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0)
    let adj = Array.from({ length: numCourses }, () => [])

    for (let [i, j] of prerequisites) {
        adj[i].push(j)
        inDegree[j]++
    }

    let q = []

    for (let i = 0; i < numCourses; i++) {
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
    if (ans.length != numCourses) {
        return []
    }
    return ans.reverse()
};