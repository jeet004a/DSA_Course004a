// Selection sort is a simple and efficient algorithm that works on selecting either the smallest or the largest element of the list or array and moving it to the correct position.


function selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
        min = i

        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j
            }
        }

        if (min != i) {
            [a[i], a[min]] = [a[min], a[i]]
        }
    }

    console.log(a)
}


let a = [5, 1, 3, 2, 4, 100]

selectionSort(a)