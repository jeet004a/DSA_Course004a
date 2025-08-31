//Leetcode 37. Sudoku Solver
//Reference Video link - https://www.youtube.com/watch?v=5g6fheUtjRs


//Below code is most optimal one

function isValid(board, row, col, digit) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[row][i] == digit) return false
            if (board[i][col] == digit) return false
        }
    }

    let m = Math.floor(row / 3) * 3
    let n = Math.floor(col / 3) * 3

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + m][j + n] == digit) {
                return false
            }
        }
    }
    return true
}

function solve(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (let d = '1'; d <= '9'; d++) {
                    let digit = d.toString()
                    if (isValid(board, i, j, digit)) {
                        board[i][j] = digit
                        if (solve(board) == true) {
                            return true
                        }
                        board[i][j] = '.'
                    }
                }
                return false
            }
        }
    }
    return true
}

//Below is main function
var solveSudoku = function(board) {
    solve(board)
    return board
};