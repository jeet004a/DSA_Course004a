//Below question constains a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//Q 2. Leetcode - Valid Parentheses

var isValid = function(s) {
    let x = []
    if (s.length < 2) return false
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            x.push(s[i])
        } else {
            let m = x.pop()
            if (s[i] == ')' && m == '(') {
                continue
            } else if (s[i] == ']' && m == '[') {
                continue
            } else if (s[i] == '}' && m == '{') {
                continue
            } else {
                return false
            }
        }
    }

    if (x.length == 0) {
        return true
    }
    return false
};