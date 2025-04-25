function check(n) {
    if (n < 1) {
        return n
    }

    return check(n.slice(1)).concat(n[0])
}

let a = [1, 2, 3, 4, 5]
let result = check(a)

console.log(result)