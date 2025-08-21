//Question No. 1
// Implement a function that determines minimum number of resources require to handle tasks concurrently, ensuring no two overlaps on the same resource.
// example start=[1,8,3,9,6] end=[7,9,6,17,7]
// Ans is 3
// Resouce 1: [(1,7),(8,9)]
// Resouce 2: [(3,6),(9,14)]
// Resouce 3: [(6,7)]



function check(start, end) {
    start.sort((a, b) => (a - b))
    end.sort((a, b) => (a - b))
    console.log(start)
    console.log(end)
    let resource = 0
    let maxVal = 0
    let i = 0
    let j = 0
    let result = []
    while (i < start.length && j < end.length) {
        if (start[i] <= end[j]) {
            resource++
            maxVal = Math.max(maxVal, resource)
            i++
        } else {
            let x = []
            x.push(start[i])
            x.push(end[j])
            result.push(x)
            resource--
            j++
        }
    }

    console.log(maxVal)
    console.log(result)


}


start = [1, 8, 3, 9, 6], end = [7, 9, 6, 17, 7]
check(start, end)





// Question 2.
// Can from triangle


function check(a, b, c) {
    for (let i = 0; i < a.length; i++) {
        let x = a[i]
        let y = b[i]
        let z = c[i]
            // Apply triangle inequality theoram
        if (x + z > y && x + y > z && y + z > x) {
            console.log('Yes')
        } else {
            console.log('No')
        }
    }
}