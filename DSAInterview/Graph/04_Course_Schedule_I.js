var canFinish = function(numCourses, prerequisites) {
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
    //From line number 29 is topological sort and the if the ans array lenght is not equal to numCourses/V then return false else true
    if (ans.length != numCourses) {
        return false
    }

    return true
};