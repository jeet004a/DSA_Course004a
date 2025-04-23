function check(n) {
    if (n == 1 || n == 0) {
        return 1
    }

    return n * check(n - 1)
}

console.log(check(5))