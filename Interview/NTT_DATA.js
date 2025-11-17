// Q1. Explain your current project

//Q2. What are authentication stretegies you are used till now and explain few of them.

//Q3. when to using clustering and threading

//Q4. Expalin JWT token atuthentication strategies

//Q5. Leetcode 183. Move Zeros (approch - two pointers).

var moveZeroes = function(input) {
    let i = 0
    let j = 0
    while (j < input.length) {
        if (input[j] != 0) {
            while (i < j) {
                if (input[i] == 0) {
                    break
                }
                i++
            }
            if (input[i] == 0) {
                let temp = input[j]
                input[j] = 0
                input[i] = temp
            }
        }
        j++
    }
    return input
};