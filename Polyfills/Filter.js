if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback, thisArg) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' this is not a function')
        }

        let array = this
        let result = []

        for (let i = 0; i < array.length; i++) {
            if (i in array) {
                if (callback.call(thisArg, array[i], i, array)) {
                    result.push(array[i])
                }
            }
        }
        return result
    }
}

let a = [1, 2, 3, 4, 5, 6, 7, 8]
let k = a.myFilter(num => num % 2 == 0)
console.log(k)