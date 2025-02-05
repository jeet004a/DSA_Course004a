// Please print nth hightest element of n array
function check(a, n) {
    let r = 0
    if (n > a.length) {
        console.log(`You enter ${n} and its bigger than array length`)
        process.exit(0) //to close the programe
    }
    while (n != 0) {
        let m = 0
        for (let i = 0; i < a.length; i++) {
            if (r == 0) { //It works for first time because to store hightest elemnt of the array
                if (m < a[i]) {
                    m = a[i]
                }
            } else { //It works for rest of the case after r store higest element with in him
                if (a[i] < r) { //it works every nth time example 1. r=5 then 2. if a[i]<r then this if works 
                    m = a[i]
                }
            }
        }
        r = m
        n = n - 1
    }
    console.log(r)
}


let c = [1, 2, 3, 4, 5]

check(c, 5)