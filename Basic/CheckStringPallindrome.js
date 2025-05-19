function check(v) {
    // let k = 123
    let sum = ""
        // console.log(k % 10)
        // console.log(Math.floor(k / 10))
    let k = v.length - 1

    while (k >= 0) {
        sum = sum + v[k]
        k--
    }

    if (sum == v) {
        console.log('Pallindrome')
    } else {
        console.log("Not pallindrome")
    }
}


let a = "aba"

check(a)