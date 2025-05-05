class Solution {
    longestKSubstr(s, k) {
        // code here
        let m = -1
        let i = 0
        let r = new Map()
        for (let j = 0; j < s.length; j++) {
            let right = s[j]

            if (!r.get(right)) {
                r.set(right, 1)
            } else {
                r.set(right, r.get(right) + 1)
            }

            while (r.size > k) {
                let left = s[i]

                if (r.get(left) > 1) {
                    r.set(left, r.get(left) - 1)
                } else {
                    r.delete(left)
                }
                i++
            }

            m = Math.max(m, j - i + 1)
        }

        if (r.size < k) {
            return -1
        } else {
            return m
        }
    }
}