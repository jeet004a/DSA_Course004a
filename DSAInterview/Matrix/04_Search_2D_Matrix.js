//74 Leetcode
//-----------------BruteForce-----------------------
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == target) {
                return true
            }
        }
    }
    return false
};

//----------------- End BruteForce-----------------------

//Below is optimal solution using binary search
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length
    let left = 0
    let right = rows * cols - 1

    while (left <= right) {
        let mid = Math.floor(left + (right - left))
        let midVal = matrix[Math.floor(right / cols)][right % cols]
        if (midVal == target) {
            return true
        }

        if (target < midVal) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
};