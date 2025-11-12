//Q1.
// Given a string a, find the length of the longest substring without repeating characters.

function check(a) {
    let i = 0; // left pointer
    let m = 0; // max length
    let k = new Map(); // map for character → last index

    for (let j = 0; j < a.length; j++) {
        if (k.has(a[j]) && k.get(a[j]) >= i) {
            i = k.get(a[j]) + 1; // move i just after the duplicate
        }
        k.set(a[j], j); // update latest index
        m = Math.max(m, j - i + 1);
    }

    console.log(m);
}

// ✅ Test cases
check("abcabcbb"); // 3 ("abc")
check("bbbbb"); // 1 ("b")
check("pwwkew"); // 3 ("wke")
check("abc"); // 3 ("abc")
check("abca"); // 3 ("abc")
check("bb"); // 1 ("b")





//Q2.  Create a node application with rate limiter (not using any predefined node module)
import express from 'express'


const app = express()

let limit = 5
setInterval(() => {
    limit = 5
}, 1000)

app.get('/', async(req, res, next) => {
    try {
        if (req) {
            if (limit > 0) {
                limit = limit - 1
                return res.status(200).json({
                    success: true,
                    msg: 'Api response from backend server'
                })
            } else {
                return res.status(400).json({
                    success: false,
                    msg: 'Reached the limit'
                })
            }
        }
    } catch () {
        return res.status(400).json({
            success: false,
            msg: 'Something went wrong'
        })
    }
})


app.listen(PORT, () => {
    console.log(Server started at $ {
        PORT
    })
})


//Q3. What are the indexing strategies for a MongoDB.

//Q4. What are compound indexes in MongoDB.

//Q5. Explain the current project and few questions on that