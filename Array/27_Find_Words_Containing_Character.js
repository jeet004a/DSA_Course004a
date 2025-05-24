// 2942. Find Words Containing Character

var findWordsContaining = function(words, x) {
    let result = []
    for (let i = 0; i < words.length; i++) {
        let p = words[i].split('')
        if (p.includes(x)) {
            result.push(i)
        }
    }

    console.log(result)
};

// test case 1
words = ["leet", "code"], x = "e"
findWordsContaining(words, x)