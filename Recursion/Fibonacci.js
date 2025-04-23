function check(n) {
    if (n == 1 || n == 0) {

        return
    }
    console.log(n)
    return check(n - 1) + check(n - 2)
}


// console.log(check(5))
check(5)