class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map()
    }

    addVertex(v) {
        this.adjList.set(v, [])
    }

    addEdges(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    printList() {
        let get_keys = this.adjList.keys()
        for (let i of get_keys) {
            let get_values = this.adjList.get(i)
            let x = ""
            for (let j of get_values) {
                x = x + j + " "
            }
            console.log(i, "->", x)
        }
    }


    BFS(startNode) {
        let q = []
        let visited = {}
        visited[startNode] = true
        q.push(startNode)

        while (q.length > 0) {
            let ele = q.shift()

            console.log(ele)

            let get_list = this.adjList.get(ele)

            for (let i in get_list) {
                let node = get_list[i]

                if (!visited[node]) {
                    visited[node] = true
                    q.push(node)
                }
            }
        }
    }

    cal() {
        console.log(this.adjList)
    }

}


var g = new Graph(6)

let vertices = ['A', 'B', 'C', 'D', 'E', 'F']

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i])
}





g.addEdges('A', 'B');
g.addEdges('A', 'D');
g.addEdges('A', 'E');
g.addEdges('B', 'C');
g.addEdges('D', 'E');
g.addEdges('E', 'F');
g.addEdges('E', 'C');
g.addEdges('C', 'F');


g.printList()
console.log("BFS")
g.BFS('A')
console.log('....')
g.cal()