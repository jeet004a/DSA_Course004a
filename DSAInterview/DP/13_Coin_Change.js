//leetcode 322. Coin Change

//Using top down

var coinChange = function(coin, amount) {
    let memo = new Map();
    let m = Infinity;
    coin.sort((a, b) => b - a)
    const solve = (rem, i, path) => {
        if (rem === 0) {
            m = Math.min(m, path.length);
            return;
        }

        if (i === coin.length || rem < 0) {
            return;
        }

        // Correct memo key
        const key = `${rem}-${i}`;

        // If we have seen this state with a smaller or equal path length → prune
        if (memo.has(key) && memo.get(key) <= path.length) {
            return;
        }

        // Store best path length so far
        memo.set(key, path.length);

        // TAKE
        path.push(coin[i]);
        solve(rem - coin[i], i, path);
        path.pop();

        // SKIP
        solve(rem, i + 1, path);
    };

    solve(amount, 0, []);

    return m === Infinity ? -1 : m;
}



//Below solution is for best time complexity

var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1).fill(-1);

    function dfs(rem) {
        if (rem === 0) return 0;
        if (rem < 0) return Infinity;

        if (memo[rem] !== -1) return memo[rem];

        let min = Infinity;
        for (const c of coins) {
            const res = dfs(rem - c);
            if (res !== Infinity) {
                min = Math.min(min, res + 1);
            }
        }

        memo[rem] = min;
        return min;
    }

    const ans = dfs(amount);
    return ans === Infinity ? -1 : ans;
}