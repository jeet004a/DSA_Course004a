function check(s, k) {
    let i = 0
    let m = []
    let x = 0
        // k = k - 1
    for (let j = 0; j < s.length; j++) {
        if (k > 0) {
            if (m.includes(s[j])) {
                m.push(s[j])
                k--
            } else {
                m.push(s[j])

            }
        } else {
            while (k <= 0) {
                m.shift()
                k++
                i++
            }
        }
        x = Math.max(x, m.length)
    }

    console.log(x)
}
// s = "aabacbebebe", k = 3
s = "aabaaab", k = 2
    // s = "abcd", k = 2
    // k = 3
check(s, k)