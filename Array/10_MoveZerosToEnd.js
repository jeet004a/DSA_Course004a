//Mpve all zeros at the end
function check(a) {
    let c = 0
    let x = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] != 0 && c < 0) { // Basic for all place any non zero element find place it over ith place
            a[c] = a[i]
            a[i] = 0
            c = c + 1
        } else if (a[i] != 0 && i != 0) { // if array first elemt is and non 0 element find at some point
            a[c] = a[i]
            a[i] = 0
            c = c + 1
        } else if (a[i] != 0) { //If array first element is non 0
            a[c] = a[i]
            c = c + 1
        }
    }
}


let c = [0, 0, 2, 0, 3]

check(c)

console.log(c)