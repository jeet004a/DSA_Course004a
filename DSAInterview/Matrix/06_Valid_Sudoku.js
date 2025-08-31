// Leetocde .36 Valid Sudoku
//Reference video link - https://www.youtube.com/watch?v=dGZjzA9zLW8

//Below code is brute force 
var isValidSudoku = function(board) {
    function valid(board, i, r, j, c) {
        let s = new Map()
        for (x = i; x < r; x++) {

            for (y = j; y < c; y++) {
                if (board[x][y] == ".") continue
                if (s.has(board[x][y])) {
                    return false
                }
                s.set(board[x][y], 1)
            }
        }
        return true
    }

    for (let i = 0; i < 9; i++) {
        let s = new Map()
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") continue

            if (s.has(board[i][j])) {
                return false
            }
            s.set(board[i][j], 1)
        }
    }


    for (let j = 0; j < 9; j++) {
        let s = new Map()
        for (let i = 0; i < 9; i++) {
            if (board[i][j] == ".") continue

            if (s.has(board[i][j])) {
                return false
            }
            s.set(board[i][j], 1)
        }
    }

    for (let i = 0; i < 9; i += 3) {
        let r = i + 3
        for (let j = 0; j < 9; j += 3) {
            let c = j + 3
            if (!valid(board, i, r, j, c)) {
                return false
            }
        }
    }
    return true
}





//Below function is most optimal solution

var isValidSudoku = function(board) {
    let s = new Map()
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') continue
            let val = board[i][j]
            let row = val + '_ROW_' + i
            let col = val + '_COL_' + j
            let box = val + '_BOX_' + String(Math.floor(i / 3)) + '-' + String(Math.floor(j / 3))

            if (s.has(row) || s.has(col) || s.has(box)) {
                return false
            }

            s.set(row, 1)
            s.set(col, 1)
            s.set(box, 1)
        }
    }

    return true
}