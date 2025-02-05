function check(a, n) {
    n = n % a.length


    function rotate(start, end) {
        while (start < end) {
            let t = a[start]
            a[start] = a[end]
            a[end] = t
            start = start + 1
            end = end - 1
        }
    }

    rotate(0, n - 1) //reverse first D element
    rotate(n, a.length - 1) //reverse the element after d
    rotate(0, a.length - 1) // reverse full array for exact result

    // console.log(a)



}




let c = [1, 2, 3, 4, 5]

check(c, 2)

console.log(c)