function check(a, n) {
    let obj = {}

    for (let i = 0; i < a.length; i++) {
        let check = n - a[i]
        if (obj[check] != undefined) {
            console.log(obj[check], i)
            process.exit()
        }
        obj[a[i]] = i
    }

    console.log('No')
}


let s = [1, 2, 3, 4, 5, 6]

check(s, 11)