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