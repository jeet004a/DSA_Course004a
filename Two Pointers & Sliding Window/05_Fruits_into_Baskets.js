//leetcode 904. Fruits into baskets


var totalFruit = function(fruits) {
    let m = new Map()
    let r = 0
    let i = 0
    let j = 0
    while (j < fruits.length) {
        if (m.has(fruits[j])) {
            m.set(fruits[j], m.get(fruits[j]) + 1)
        } else {
            m.set(fruits[j], 1)
        }
        while (m.size > 2) {
            m.set(fruits[i], m.get(fruits[i]) - 1)
            if (m.get(fruits[i]) == 0) {
                m.delete(fruits[i])
            }
            i++
        }
        r = Math.max(r, (j - i + 1))
        j++

    }

    return r
};