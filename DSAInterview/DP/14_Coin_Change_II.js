//Leetcode 518. Coin Change II
//Method using basic DP and memoization


var change = function(amount, coins) {
    let memo = Array.from({ length: coins.length }, () => new Array(amount + 1).fill(-1))

    let solve = (amount, i) => {
        if (amount == 0) {
            return 1
        }
        if (i == coins.length) {
            return 0
        }

        if (memo[i][amount] != -1) {
            return memo[i][amount]
        }
        if (amount < coins[i]) {
            return memo[i][amount] = solve(amount, i + 1)
        }

        let take = solve(amount - coins[i], i)
        let skip = solve(amount, i + 1)

        return memo[i][amount] = take + skip
    }

    return solve(amount, 0)
};