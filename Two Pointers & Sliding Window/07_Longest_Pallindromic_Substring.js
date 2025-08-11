// Leetcode 5. Longest pallindromic substring


var longestPalindrome = function(s) {
    let i = 0
    let j = 0
    let m = 0
    let p = 0
    let index = 0
    let a = s.split('')

    let isPal = (k, x) => {
        while (k <= x) {
            if (a[k] != a[x]) {
                return false
            }
            k++
            x--
        }
        return true
    }

    while (i < a.length) {
        j = i
        while (j < a.length) {
            if (isPal(i, j)) {
                if ((j - i + 1) > m) {
                    p = i
                    m = Math.max(m, (j - i + 1))
                }

            }
            j++
        }
        i++
    }
    return s.slice(p, p + m)
}




//Below is most optimal
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