// 784. Leetcode Letter case permuation (Recusion/Backtracking)


// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

var letterCasePermutation = function(s) {
    let result = []

    let dfs = (i, s, slate) => {
        if (i == s.length) {
            result.push(slate.join(''))
            return
        }

        let char = s[i]
        if (!Number.isInteger(parseInt(char))) {
            slate.push(char.toUpperCase())
            dfs(i + 1, s, slate)
            slate.pop()

            slate.push(char.toLowerCase())
            dfs(i + 1, s, slate)
            slate.pop()
        } else {
            slate.push(char)
            dfs(i + 1, s, slate)
            slate.pop()
        }
    }
    dfs(0, s, [])
    return result
};