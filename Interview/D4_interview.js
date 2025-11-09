//Q1.
//Leetcode 56. Merge Intervals

var merge = function(a) {
    a.sort((x, y) => x[0] - y[0])
    let result = []
    let current = a[0]

    for (let i = 1; i < a.length; i++) {
        if (current[1] >= a[i][0]) {
            current[1] = Math.max(current[1], a[i][1])
        } else {
            result.push(current)
            current = a[i]
        }
    }
    result.push(current)

    return result
}


//Q2. Diffrence between merge and rebase in git


//Q3. Optimization techniques for a databse query

//Q4. is that clouse provied adstration and please explain how

//Q5. Explain SOLID principels and real life use cases