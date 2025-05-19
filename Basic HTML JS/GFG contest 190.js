function pandemo(s) {
    const check = {}
    let odd = ''
    let evenSwap = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] in check) {
            check[s[i]] = check[s[i]] + 1
        } else {
            check[s[i]] = 1
        }
    }


    for (let char in check) {
        if (check[char] % 2 != 0) {
            if (!odd || odd > char) {
                odd = char
            }
        }

        evenSwap = evenSwap + char.repeat(Math.floor(check[char] / 2))
    }

    console.log(odd)
    console.log(evenSwap)

    evenSwap = evenSwap.split('').sort().join('')

    finalString = evenSwap + odd + evenSwap.split('').reverse().join('')
    console.log(finalString)

}


const s = 'abaccd'

pandemo(s)