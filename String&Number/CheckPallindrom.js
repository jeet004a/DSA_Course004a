function check(n) {
    let x = 0
    let res = n
    while (n > 0) {
        let m = n % 10 //Took last the character
        x = m + (x * 10) //Then multiply by 10 last and then add new from step 5
        n = Math.floor(n / 10) //Remove the last element
    }

    if (x == res) {
        console.log('Pallindrome')
    } else {
        console.log('Not a pallindrome')
    }
}


let x = 121
check(x)