function maxProfit(prices) {
    let mini = prices[0]
    let maxSum = 0
    for (let i = 1; i < prices.length; i++) {
        let sum = 0
        if (prices[i] < mini) {
            mini = prices[i]
        }

        sum = prices[i] - mini

        if (sum > maxSum) {
            maxSum = sum
        }
    }

    console.log('Maximum profit:-', maxSum)
}

// let a = [7, 1, 5, 3, 6, 4]
let a = [7, 6, 4, 3, 1]

maxProfit(a)