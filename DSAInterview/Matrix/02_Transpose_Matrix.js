var transpose = function(matrix) {
    let k = 0
    let size = matrix[0].length - 1
    let result = []
    while (size >= 0) {
        let a = []
        for (let j = 0; j < matrix.length; j++) {
            a.push(matrix[j][k])
        }

        result.push(a)
        k++
        size--
    }
    console.log(result)
};


matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
transpose(matrix)