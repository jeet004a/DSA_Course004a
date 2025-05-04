//LeetCode 796. Rotate String

var rotateString = function(s, goal) {
    let x = s.split('')

    for (let i = 0; i < s.length; i++) {
        let e = x.shift()
        x.push(e)
        let r = x.join('')
        if (r === goal) {
            return true
        }
    }

    return false
};