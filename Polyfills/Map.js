if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback, thisArg) {
        if (typeof callback != 'function') {
            throw new TypeError(callback + ' is not a function')
        }

        let array = this
        let result = []

        for (let i = 0; i < array.length; i++) {
            if (i in array) {
                result[i] = callback.call(thisArg, array[i], i, array)
            }
        }
        return result
    }
}

let a = [1, 2, 3, 4, 5]
let k = a.myMap(num => num + 2)

console.log(k)