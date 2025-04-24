function swap(arr, i, j) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

function quickS(a, low, high) {
    let p = a[high]

    let i = low - 1

    for (let j = low; j <= high; j++) {
        if (a[j] < p) {
            i++
            swap(a, i, j)
        }
    }

    swap(a, i + 1, high)
    return i + 1
}


function qs(a, low, high) {
    if (low < high) {
        p = quickS(a, low, high)
        qs(a, low, p - 1)
        qs(a, p + 1, high)
    }


}


function quickSort(a) {
    qs(a, 0, a.length - 1)
}


// let a = [3, 1, 2, 4, 5, 6, 10, 9]
let a = [2, 3, 1, 4, 5]

quickSort(a)

console.log(a)