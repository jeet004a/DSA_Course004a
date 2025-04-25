//Rotate A array
function check(a) {
    let temp = a[0]
    for (let i = 1; i < a.length; i++) {
        a[i - 1] = a[i]
    }
    a[a.length] = temp

    console.log(a)

}


let c = [1, 2, 3, 4, 5]

check(c)