// Merge sort is one of the sorting techniques that work on the divide and conquer approach. The Given array is divided in half again and again and those parts are arranged in sorted order and merged back to form the complete sorted array.
function merge(arr, low, mid, high) {
    let t = []
    let left = low
    let right = mid + 1
    let n = 0
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            t[n] = arr[left]
            left = left + 1
            n = n + 1
        } else {
            t[n] = arr[right]
            n = n + 1
            right = right + 1
        }
    }

    while (left <= mid) {
        t[n] = arr[left]
        left = left + 1
    }

    while (right <= high) {
        t[n] = arr[right]
        right = right + 1
    }

    for (let i = low; i <= high; i++) {
        arr[i] = t[i - low]
    }

    // console.log(arr)
}


function ms(arr, low, high) {
    if (low >= high) return
    let mid = low + parseInt((high - low) / 2)
    ms(arr, low, mid)
    ms(arr, mid + 1, high)
    merge(arr, low, mid, high)
}

function mergesort(a) {
    ms(a, 0, a.length - 1)

    // console.log(a)
}


let a = [5, 1, 3, 2, 4, 100]

mergesort(a)

console.log(a)