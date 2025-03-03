function check(n) {
    n = n.sort((a, b) => a - b)

    let m = 1
    let c = 1
    for (let i = 0; i < n.length; i++) {

        if (n[i] == n[i + 1]) {
            continue
        } else {
            if (n[i + 1] == n[i] + 1) {
                c = c + 1
            } else {
                c = 1
            }
        }

        if (m <= c) {
            m = c
        }
    }
    return m
}


// let a = [102, 4, 100, 1, 101, 3, 2, 1, 1]
// let nums = [100, 4, 200, 1, 3, 2]
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(check(nums))