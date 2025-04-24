function insertionSort(a) {

    for (let i = 0; i < a.length; i++) {
        let j = i

        if (j > 0 && a[j - 1] > a[j]) {
            let t = a[j - 1]
            a[j - 1] = a[j]
            a[j] = t
        }
    }

}



// let a = [3, 1, 2, 4, 7]
// let a = [3, 1, 2, 4, 5, 6, 10, 9]
a = [2, 1, 4, 3, 5]

insertionSort(a)
console.log(a)