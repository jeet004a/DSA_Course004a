let selectionSort = (a) => {
    let n = a.length

    for (let i = 0; i < n - 1; i++) {
        let ind = i

        for (let j = i + 1; j < n; j++) {
            if (a[ind] > a[j]) {
                ind = j
            }
        }

        let t = a[i]
        a[i] = a[ind]
        a[ind] = t
    }

    console.log(a)
}



let a = [64, 34, 25, 12, 22, 11, 90]
    // let a = [5, 1, 1, 2, 0, 0]
selectionSort(a)