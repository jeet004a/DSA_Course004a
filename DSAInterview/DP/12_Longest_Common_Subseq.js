// Leetcode 1143. Longest Common Subsequence
//Reference Video link - https://www.youtube.com/watch?v=MTCvNG4Zfd8&list=PLpIkg8OmuX-JhFpkhgrAwZRtukO0SkwAt&index=20

//Below code is using recursion and memoization
var longestCommonSubsequence = function(s1, s2) {
    let t = Array.from({ length: s1.length }, () => new Array(s2.length).fill(-1))
    let solve = (a1, a2, i, j) => {
        if (i >= a1.length || j >= a2.length) {
            return 0
        }

        if (t[i][j] != -1) {
            return t[i][j]
        }
        if (a1[i] == a2[j]) {
            return t[i][j] = 1 + solve(a1, a2, i + 1, j + 1)
        }

        return t[i][j] = Math.max(solve(a1, a2, i + 1, j), solve(a1, a2, i, j + 1))
    }

    return solve(s1, s2, 0, 0)
};