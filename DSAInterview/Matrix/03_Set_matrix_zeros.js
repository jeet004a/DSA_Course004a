// 73. Set Matrix Zeros
//Below code is brute force approch

let seti = (matrix, i) => {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] != 0) {
            matrix[i][j] = 999
        }
    }
    return matrix
}
let setj = (matrix, j) => {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] != 0) {
            matrix[i][j] = 999
        }
    }
    return matrix

}
var setZeroes = function(matrix) {
    let c = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                c++
                matrix = seti(matrix, i)
                matrix = setj(matrix, j)
            }
        }
    }

    if (c > 0) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 999) {
                    matrix[i][j] = 0
                }
            }
        }

    }

    console.log(matrix)
};

// matrix = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]
matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]
setZeroes(matrix)