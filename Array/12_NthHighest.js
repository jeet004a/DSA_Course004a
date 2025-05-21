//Brute force approch for unsorted array
let check = (a, x) => {
    let first = 0
    let second = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > first) {
            first = a[i]
        }
    }

    console.log(first)

    for (let i = 0; i < a.length; i++) {
        if (a[i] < first && a[i] > second) {
            second = a[i]
        }
    }

    console.log(second)
}


// Please print nth hightest element of n array and array should be sorted
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


// let c = [1, 2, 3, 4, 5]

let c = [64, 34, 25, 12, 22, 11, 90]

check(c, 2)


//Below code is most optimal solution and works for unsorted array as well
let check = (a, x) => {
    let first = 0
    let last = 0
    let c = 0
    while (x > 0) {
        for (let i = 0; i < a.length; i++) {
            if (c == 0) {
                if (a[i] > first) {
                    first = a[i]
                }
            } else {
                if (a[i] > first && a[i] < last) {
                    first = a[i]
                }
            }
        }
        last = first
        if (x == 1) {
            break
        } else {
            first = 0
        }
        c++
        x--
    }

    console.log(first)
}

// a = [2, 1, 4, 3, 5]
// let a = [64, 34, 25, 12, 22, 11, 90]
let a = [5, 1, 1, 2, 0, 0]
    // mergesort(a)
check(a, 1)

// console.log(a)