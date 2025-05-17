// 6. ZigZag conversion
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let r = Array.from({ length: numRows }).fill('')
    let c = 0
    let check = false

    for (let i of s) {
        r[c] += i

        if (c == 0 || c === numRows - 1) {
            check = !check
        }

        c += check ? 1 : -1
    }

    return r.join('')
};