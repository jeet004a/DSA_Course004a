//Reference Video link - https://www.youtube.com/watch?v=UrQv5YMC060&list=PLpIkg8OmuX-LZB9jYzbbZchk277H5CbdY&index=4
function check(graph) {
    let n = graph.length
    let visited = new Array(n).fill(false)

    let bfs = (visited, graph, i, parent) => {
        visited[i] = true

        let q = [{ i, parent }]
            // console.log(q)

        while (q.length) {
            let { i, parent } = q.shift()
            for (let neigh of graph[i]) {
                if (!visited[neigh]) {
                    visited[neigh] = true
                    q.push({ i: neigh, parent: i })
                } else if (neigh != parent) {
                    return true
                }
            }
        }
        return false
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i] && bfs(visited, graph, i, -1)) {
            console.log('Cycle Detected')
            process.exit(0)
        }
    }

    console.log('No Cycle')
}



// let a=[[1,2],[0,2],[1,0]]
let a = [
        [1],
        [0, 2],
        [1]
    ]
    // let a=[
    //       [1],
    //       [0, 2, 3],
    //       [1, 3],
    //       [1, 2],
    //       []
    //     ]

check(a)