// This question contains a sliding window and two pointer approach.
//3. Leetcode - Longest Substring Without Repeating Characters.
//Hints - 1. Use a hash map to store the last index of each character seen so far.

var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let left = 0
    let maxVal = 0

    for (let right = 0; right < s.length; right++) {

        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left)
        }
        map.set(s[right], right)

        maxVal = Math.max(maxVal, right - left + 1)
    }

    return maxVal
};




//Solve by my own below
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