function check(v) {
    let a = []

    for (let i = 0; i < v.length; i++) {
        if (!a.includes(v[i])) {
            a.push(v[i])
        }
    }

    let result = a.join("")
    console.log(result)
}

let a = "abaac"

check(a)