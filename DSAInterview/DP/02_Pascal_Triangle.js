// 118. Pascal's Triangle leetcode
var generate = function(numRows) {
    let pascal = []
    let prev = []

    for (let i = 0; i < numRows; i++) {
        pascal[i] = []
        let prev = pascal
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                pascal[i][j] = 1
            } else {
                pascal[i][j] = prev[i - 1][j - 1] + prev[i - 1][j]
            }
        }
    }

    return pascal
};

let n = 5
    // console.log(generate(n))

//Below function print the pattern of pascal triangle
function check(n) {
    // let data=generate(n)
    let pascal = []
    for (let i = 0; i < n; i++) {
        pascal[i] = []
        prev = pascal
        for (let k = i - 1; k <= Math.floor(n / 2); k++) {
            process.stdout.write(` `)
        }
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                pascal[i][j] = 1
                process.stdout.write(`${1} `)
            } else {
                pascal[i][j] = prev[i - 1][j - 1] + prev[i - 1][j]
                process.stdout.write(`${prev[i-1][j-1]+prev[i-1][j]} `)
            }
        }
        console.log()
    }
}