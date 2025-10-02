// Question 1.
//Based on string - refer image Mat1.png

function stringOperation(start, fin) {
    let result = [];

    for (let f of fin) {
        let found = false;

        for (let s of start) {
            if (s.length !== f.length) continue; // must have same length

            let diff = 0;
            for (let i = 0; i < s.length; i++) {
                if (s[i] !== f[i]) diff++;
                if (diff > 1) break; // more than 1 difference, stop
            }

            if (diff === 1) {
                found = true;
                break;
            }
        }

        result.push(found ? "YES" : "NO");
    }

    return result;
}

// Example usage with sample input:
let start = ["aaaaa", "acacac"];
let fin = ["aabaa", "ccacacc", "caaac"];

console.log(stringOperation(start, fin));
// Output: [ 'YES', 'NO', 'NO' ]


//---------------------------------------------------------------------------------------------------------------------------

// Question 2. 
//Forest fire Spread - Refer image Mat2.png
// Question is related graph

function forestFire(n, h, arr) {
    // Build adjacency list
    let graph = Array.from({ length: n }, () => []);
    for (let [x, y, t] of arr) {
        graph[x].push([y, t]);
        graph[y].push([x, t]);
    }

    // Min-heap (priority queue) for BFS-like traversal
    let pq = [
        [0, 0],
        [0, h]
    ]; // [time, node]
    let visited = Array(n).fill(false);
    let burnTime = Array(n).fill(Infinity);

    burnTime[0] = 0;
    burnTime[h] = 0;

    while (pq.length > 0) {
        // Extract min-time event
        pq.sort((a, b) => a[0] - b[0]); // simple sort for PQ
        let [time, node] = pq.shift();

        if (visited[node]) continue;
        visited[node] = true;

        // Spread fire to neighbors
        for (let [nei, t] of graph[node]) {
            if (!visited[nei] && t >= time && burnTime[nei] > t) {
                burnTime[nei] = t;
                pq.push([t, nei]);
            }
        }
    }

    // Collect all checkpoints that caught fire
    let result = [];
    for (let i = 0; i < n; i++) {
        if (burnTime[i] !== Infinity) {
            result.push(i);
        }
    }

    return result;
}

// Example usage
let n = 5,
    h = 2;
let arr = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5]
];

console.log(forestFire(n, h, arr));
// Expected: [0,1,2,3,4]  (fire spreads across all nodes in time order)