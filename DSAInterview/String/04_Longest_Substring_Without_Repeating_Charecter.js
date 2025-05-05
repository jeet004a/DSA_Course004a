var lengthOfLongestSubstring = function(s) {
    let m = new Map()
    let i = 0
    let p = 0
    for (let j = 0; j < s.length; j++) {
        let right = s[j]
        if (!m.get(right)) {
            m.set(right, 1)
        } else {
            while (m.get(right) > 0) {
                let left = s[i]
                if (left == right) {
                    m.set(left, m.get(left) - 1)
                }
                m.delete(left)
                i++
            }
            m.set(right, 1)
        }

        p = Math.max(p, j - i + 1)

    }

    return p
};