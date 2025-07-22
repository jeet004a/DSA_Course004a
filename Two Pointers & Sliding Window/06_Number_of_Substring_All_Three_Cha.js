//leetcode 1358. Number of Substring Containing all three charecter

//Most optimal
var numberOfSubstrings = function(s) {
    let m = { a: 0, b: 0, c: 0 }
    let left = 0
    let c = 0
    for (let right = 0; right < s.length; right++) {
        m[s[right]]++
            while (m['a'] > 0 && m['c'] > 0 && m['b'] > 0) {
                c = c + (s.length - right)
                m[s[left]]--
                    left++
            }
    }

    return c
};






// Below is brute force - and own
var numberOfSubstrings = function(s) {
    let i = 0
    let j = 0
    let c = 0

    while (i < s.length) {
        j = i
        let m = new Map()

        while (j < s.length) {
            m = m.set(s[j], (m.get(s[j]) || 0) + 1)
            if (m.size > 2) {
                c++
            }
            j++
        }
        i++
    }

    return c
};