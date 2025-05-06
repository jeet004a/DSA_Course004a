/**
 * @param {number} n
 * @return {boolean}
 */

function cross(n) {
    let x = 0
    while (n > 0) {
        a = n % 10
        a = a * a
        x = x + a
        n = Math.floor(n / 10)
    }
    return x
}

var isHappy = function(n) {
    let m = new Map()
    let s = n

    while (s > 1) {
        s = cross(s)
        if (!m.has(s)) {
            m.set(s, 1)
        } else {
            return false
        }
    }

    return true
};


// n=2
n = 19

console.log(isHappy(n))