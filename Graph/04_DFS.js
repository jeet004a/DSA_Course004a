//This file conatins Depth First Search of a graph
class Grapgh {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.AdjList = new Map()
    }

    addVertex(v) {
        this.AdjList.set(v, [])
    }

    addEdges(v, w) {
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }

    printGraph() {
        let get_keys = this.AdjList.keys()

        for (let i of get_keys) {
            let get_values = this.AdjList.get(i)

            let x = ""

            for (let j of get_values) {
                x = x + j + ""
            }

            console.log(i, "->", x)
        }
    }


    dfs(statringNode) {
        let visited = {}

        this.dfsUtil(statringNode, visited)
    }

    dfsUtil(vert, visited) {
        visited[vert] = true
        console.log(vert)

        let allEle = this.AdjList.get(vert)

        for (let i in allEle) {
            let a = allEle[i]
            while (!visited[a]) {
                this.dfsUtil(a, visited)
            }
        }
    }
}




var g = new Grapgh(6)

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

g.printGraph()
console.log('DFS')
g.dfs('A')