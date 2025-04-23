function check(n) {
    if (n.length < 1) {
        return n.join("")
    }

    return check(n.slice(1)).concat(n[0])
}


let a = "MADAM"
let b = check(a.split(""))

if (a == b) {
    console.log('Pallindrome')
} else {
    console.log('Not pal')
}
// console.log(b)