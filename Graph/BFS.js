//This file contains Breadth First Search of a graph

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Graph {
    constructor(noOfvertices) {
        this.noOfvertices = noOfvertices;
        this.AdjList = new Map();
    }


    addVertex(v) {
        this.AdjList.set(v, [])
    }


    addEdge(v, w) {
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }


    printGraph() {
        let get_keys = this.AdjList.keys();

        for (let i of get_keys) {
            let get_values = this.AdjList.get(i);
            let a = ""

            for (let j of get_values) {
                a = a + j + ""
            }
            console.log(i + "->" + a)
        }
    }


    bfs(statringNode) {
        let visited = {}

        let q = new Queue()

        visited[statringNode] = true
        q.enqueue(statringNode)

        while (!q.isEmpty()) {
            let element = q.dequeue()

            console.log(element)

            let get_list = this.AdjList.get(element)

            for (let i in get_list) {
                let neigh = get_list[i]

                if (!visited[neigh]) {
                    visited[neigh] = true
                    q.enqueue(neigh)
                }
            }
        }

    }
}


var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();

g.bfs('A')