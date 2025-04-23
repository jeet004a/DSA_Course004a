function check(n) {
    if (n < 1) {
        return
    }
    // console.log(n) //Print reverse order 5 4 3 2 1
    check(n - 1)
    console.log(n) //Print order 1 2 3 4 5


}

check(5)