var spiralOrder = function(matrix) {
    let top = 0
    let buttom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let result = []
    while (left <= right && top <= buttom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        top++

        for (let i = top; i <= buttom; i++) {
            result.push(matrix[i][right])
        }

        right--


        if (top <= buttom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[buttom][i])
            }

            buttom--
        }

        if (left <= right) {
            for (let i = buttom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++
        }

    }

    console.log(result)
};


matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]


//[1,2,3,4,8,12,11,10,9,5,6,7]
spiralOrder(matrix)