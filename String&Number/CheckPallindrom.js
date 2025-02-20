function check(n) {
    let x = 0
    let res = n
    while (n > 0) {
        let m = n % 10
        x = m + (x * 10)
        n = Math.floor(n / 10)
    }

    if (x == res) {
        console.log('Pallindrome')
    } else {
        console.log('Not a pallindrome')
    }
}


let x = 121
check(x)