//This question contains a sliding window and two pointer approach
// Q 1432 Leetcode - Maximum Points you can obtain from cards
//Hints - 1. You can take cards from the beginning or the end of the array, but not both at the same time.
var maxScore = function(cardPoints, k) {
    let leftSum = 0
    let rightSum = 0
    let maxVal = 0
    for (let i = 0; i < k; i++) {
        leftSum = leftSum + cardPoints[i]
        maxVal = Math.max(maxVal, leftSum)
    }

    let l = cardPoints.length - 1
    k = k - 1
    while (k >= 0) {
        leftSum = leftSum - cardPoints[k]
        leftSum = leftSum + cardPoints[l]
        maxVal = Math.max(maxVal, leftSum)
        k--
        l--
    }

    return maxVal
};