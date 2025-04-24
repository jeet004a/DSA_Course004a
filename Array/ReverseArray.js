//How to reverse an array
function check(a) {
    let n = a.length

    // console.log(Math.floor(n / 2))

    for (let i = 0; i < Math.floor(n / 2); i++) {
        [a[i], a[n - i - 1]] = [a[n - i - 1], a[i]]
    }

    console.log(a)
}



let a = [1, 2, 3, 4, 5]

check(a)
"hello"