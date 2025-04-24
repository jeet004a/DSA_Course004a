function bubble(a) {

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let t = a[j]
                a[j] = a[j + 1]
                a[j + 1] = t
            }
        }
    }

}

// let a = [3, 1, 2, 4, 5, 6, 10, 9]
let a = [2, 3, 1, 4, 5]
bubble(a)

console.log(a)