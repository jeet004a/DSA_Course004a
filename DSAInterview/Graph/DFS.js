class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
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

            for (let i of get_values) {
                x = x + i + " "
            }
            console.log(i, "->", x)
        }
    }


    dfs(startNode) {
        let visited = {}

        this.dfsUtil(startNode, visited)
    }

    dfsUtil(node, visited) {
        visited[node] = true
        console.log(node)

        let get_values = this.adjList.get(node)

        for (let i in get_values) {
            let s = get_values[i]

            while (!visited[s]) {
                visited[s] = true
                this.dfsUtil(s, visited)
            }
        }
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
g.dfs('A')