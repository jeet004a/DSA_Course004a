function merge(a, low, mid, high) {
    let t = []
    let left = low
    let right = mid + 1
    let n = 0

    while (left <= mid && right <= high) {
        if (a[left] <= a[right]) {
            t[n] = a[left]
            left++
            n++
        } else {
            t[n] = a[right]
            right++
            n++
        }
    }

    while (left <= mid) {
        t[n] = a[left]
        left++
        n++
    }

    while (right <= high) {
        t[n] = a[right]
        right++
        n++
    }


    for (let i = low; i <= high; i++) {
        a[i] = t[i - low]
    }
}

function ms(a, low, high) {
    if (low >= high) {
        return
    }

    mid = low + parseInt((high - low) / 2)
    ms(a, low, mid)
    ms(a, mid + 1, high)
    merge(a, low, mid, high)

}

function mergesort(a) {
    ms(a, 0, a.length - 1)
}

a = [2, 1, 4, 3, 5]
    // let a = [3, 1, 2, 4, 5, 6, 10, 9]

mergesort(a)

console.log(a)