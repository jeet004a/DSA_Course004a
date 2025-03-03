function check(nuns) {
    if (nums.length < 1) return 0
    let m = 0
    let c = 1
    let s = nums.sort((a, b) => (a - b))
    let majEle = s[0]
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            c = c + 1
        } else {
            if (m < c) {
                m = c
                majEle = s[i]
                c = 1
            }
        }
    }

    return majEle

}



let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 1, 1, 1]
    // let nums = [3, 2, 3]
console.log(check(nums))