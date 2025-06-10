// 40. Combination Sum II

var combinationSum2 = function(candidates, target) {
    let result = []
    candidates.sort((a, b) => (a - b))
    let dfs = (candidates, target, i, slate) => {
        //backtracking case
        if (target < 0) {
            return
        }

        //base case
        if (target == 0) {
            result.push(slate.slice())
            return
        }

        //DFS recursive case
        for (let j = i; j < candidates.length; j++) {
            if (i != j && candidates[j] == candidates[j - 1]) continue
            slate.push(candidates[j])
            dfs(candidates, target - candidates[j], j + 1, slate)
            slate.pop()
        }
    }

    dfs(candidates, target, 0, [])

    return result
};