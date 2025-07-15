// Leetcode 3336. Word Check

var isValid = function(word) {
    let vowelcheck = /[aeiouAEIOU]/.test(word)
    let consonentcheck = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word)
    let upperCheck = /[A-Z]/.test(word)
    let lowerCheck = /[a-z]/.test(word)
    let numberCheck = /[0-9]/.test(word)
    let specialChar = /[^A-Za-z0-9]/.test(word)
    let lengthCHeck = word.length > 2

    if (lengthCHeck && !specialChar && vowelcheck && consonentcheck && (upperCheck || lowerCheck || numberCheck)) {
        return true
    }

    return false
};