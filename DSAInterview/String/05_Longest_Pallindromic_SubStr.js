//Below is brute force solution to find the longest palindromic substring
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }
    if (s.length === 2) {
        if (s[0] != s[1]) {
            return s[0]
        }
    }
    let result = ""
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let sub = s.slice(i, j + 1)
            let rev = sub.split("").reverse().join('')
            if (sub == rev) {
                if (sub.length > result.length) {
                    result = sub
                }
            }
        }
    }


    if (result.length == 0) {
        return s[0]
    }
    return result
};


//Below is Optial Solution
function getDrom(left, right, s) {
    while (left >= 0 && right < s.length) {
        if (s[left] != s[right]) {
            break
        }
        right++
        left--
    }

    return [left + 1, right]
}

var longestPalindrome = function(s) {
    let m = [0, 1]
    for (let i = 0; i < s.length; i++) {
        let even = getDrom(i - 1, i, s)
        let odd = getDrom(i - 1, i + 1, s)

        let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even

        m = m[1] - m[0] > currMax[1] - currMax[0] ? m : currMax
    }

    return s.slice(m[0], m[1])
};