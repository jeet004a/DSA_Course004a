function prime(n) {
    console.log(1)
    console.log(2)

    let a = []
    for (let i = 2; i < n - 1; i++) {
        let k = 9
        let c = 0
        if (i % 2 != 0 && i < 9) {
            console.log(i)
        } else {
            if (i % 2 != 0) {
                while (k > 2) {
                    if (i % k == 0) {
                        c = c + 1
                        break
                    }
                    k = k - 1
                }
                if (c == 0) {
                    console.log(i)
                }
            }
        }

    }


    // console.log(a)
}


prime(100)