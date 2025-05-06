// Problem: https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

function cross(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false
        }
    }
    return true
}

var findAnagrams = function(s, p) {
    let sStr = new Array(26).fill(0)
    let pStr = new Array(26).fill(0)

    for (let i = 0; i < p.length; i++) {
        let a = p.charCodeAt(i) % 26
        pStr[a]++
    }
    let r = []
    for (let i = 0; i < s.length; i++) {
        let x = s.charCodeAt(i) % 26
        sStr[x]++

            if (i > p.length - 1) {
                let u = s.charCodeAt(i - p.length) % 26
                sStr[u]--
            }

        if (i >= p.length - 1) {
            if (cross(sStr, pStr)) {
                r.push(i - (p.length - 1))
            }
        }
    }
    return r
}

s = "cbaebabacd", p = "abc"

console.log(findAnagrams(s, p))