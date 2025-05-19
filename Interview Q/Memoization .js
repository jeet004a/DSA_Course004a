function check(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum
}


//Below function is concept of closure and memoization
const optimizeFun = () => {
    let result = {}
    return function(...arg) {
        let n = arg[0]
        if (result[n]) {
            console.log('chached returned')
            return result[n]
        } else {
            console.log('Run for first time')
            let d = check(n)
            result[n] = d
            return d
        }
    }
}


// console.time()
// console.log(check(5))
// console.timeEnd()

let ft = optimizeFun()
console.time()
console.log(ft(5))
console.timeEnd()

console.time()
console.log(ft(5))
console.timeEnd()