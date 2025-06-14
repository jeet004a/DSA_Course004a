// 205. Isomorphic String


var isIsomorphic = function(s, t) {
    if (s.length != t.length) {
        console.log(false)
        process.exit(1)
    }

    let m = {}
    let result = ""
    for (let i = 0; i < s.length; i++) {
        let x = s[i]
        if (m[s[i]]) {
            result = result + m[s[i]]
        } else {
            if (!Object.values(m).includes(t[i])) {
                m[s[i]] = t[i]
                result = result + t[i]
            }

        }
    }

    return result == t
};