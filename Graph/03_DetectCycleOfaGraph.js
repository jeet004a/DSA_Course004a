class Graph {
    constructor(n) {
        this.n = n;
        this.adjList = new Array(n).fill(0).map(() => []);
    }

    addEdge(u, v) {
        this.adjList[u].push(v);
        this.adjList[v].push(u);
    }

    findShortestCycle() {
        let shortestCycle = Infinity;

        // Run BFS from each node
        for (let start = 0; start < this.n; start++) {
            let queue = [
                [start, -1, 0]
            ]; // [node, parent, depth]
            let visited = new Map();
            visited.set(start, 0);

            while (queue.length > 0) {
                let [node, parent, depth] = queue.shift();

                for (let neighbor of this.adjList[node]) {
                    if (!visited.has(neighbor)) {
                        visited.set(neighbor, depth + 1);
                        queue.push([neighbor, node, depth + 1]);
                    } else if (neighbor !== parent) { // Cycle detected
                        let cycleLength = depth + 1 + visited.get(neighbor);
                        shortestCycle = Math.min(shortestCycle, cycleLength);
                    }
                }
            }
        }

        return shortestCycle === Infinity ? -1 : shortestCycle;
    }
}

// Example Usage
const graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 0);
graph.addEdge(2, 5);

console.log(graph.findShortestCycle()); // Output: 4


// Below is the leetcode solution Q. 2608. Shortest Cycle in a Graph
// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number}
//  */
// var findShortestCycle = function(n, edges) {
//     let graph=new Array(n).fill(0).map(()=>[])

//     for(let [u,v] of edges){
//         graph[u].push(v)
//         graph[v].push(u)
//     }

//     let shortestCycle=Infinity

//     for(let start=0;start<n;start++){
//         let queue=[[start,-1,0]]
//         let visited=new Map()
//         visited.set(start,0)

//         while(queue.length>0){

//             let [node,parent,depth]=queue.shift()

//             for(let neig of graph[node]){
//                 if(!visited.has(neig)){
//                     visited.set(neig, depth + 1);
//                     queue.push([neig, node, depth + 1]);
//                 }else if(neig!=parent){
//                     let cycleLength = depth + 1 + visited.get(neig);
//                     shortestCycle = Math.min(shortestCycle, cycleLength)
//                 }
//             }
//         }
//     }

//     return shortestCycle === Infinity ? -1 : shortestCycle;
// };