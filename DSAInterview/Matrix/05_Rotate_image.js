//Below is brute force and not suitable for leet code its woking but not optimal
var rotate = function(matrix) {
    let result = []
    let k = 0
    for (let i = 0; i < matrix.length; i++) {
        let a = []
        for (let j = matrix[0].length - 1; j >= 0; j--) {
            a.push(matrix[j][k])
        }
        k++
        result.push(a)
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = result[i][j]
        }
    }
    // matrix=result
    return matrix
};

//Below code is for leetcode
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let row of matrix) {
        row.reverse()
    }
};

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
rotate(matrix)