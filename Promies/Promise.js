/*
1.Promise.all

Promise.all() takes an array of promises and runs them in parallel.
It waits until all of them are fulfilled, and then returns one promise that resolves with an array of results (in the same order).

If any one promise rejects, the whole thing rejects immediately ❌.

*/

const p1 = Promise.resolve('hello1')
const p2 = Promise.resolve('Hello2')
const p3 = Promise.resolve('Hello3')

Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Not resolved', err)
})


/*
2.Promise.race

Promise.race() takes an array of promises and returns a single Promise that settles (resolves or rejects) as soon as the first one in the array settles — whether that’s a resolve ✅ or a reject ❌.

Think of it as:
“Whoever finishes first wins — success or failure.”
*/

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello1')
    }, 1000)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello2')
    }, 200)
})

Promise.race([p1, p2]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Not resolved', err)
})

//Output  Hello2

/* 
3. Promise.allSettled()


Promise.allSettled() takes an array of promises and returns a single Promise that resolves when all the promises have settled —
that means when each one has either resolved or rejected.

👉 It never rejects, unlike Promise.all.
Instead, it gives you the status and value/reason for each promise.
*/

const p1 = Promise.resolve('hello1')
const p2 = Promise.reject('Hello2')
const p3 = Promise.resolve('Hello3')


Promise.allSettled([p1, p2, p3]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

/*
Output
[
  { status: 'fulfilled', value: 'hello1' },
  { status: 'rejected', reason: 'Hello2' },
  { status: 'fulfilled', value: 'Hello3' }
]
*/



/* 
4. Promise.any

 Promise.any() takes an array of Promises and returns a single Promise that:

✅ Resolves as soon as the first promise fulfills (resolves)
❌ Ignores rejections, unless all of them reject — then it throws a AggregateError.

Think of it as:

“Give me the first successful result, I don’t care about the failures.”

*/

const p1 = Promise.reject('hello1')
const p2 = Promise.reject('Hello2')
const p3 = Promise.resolve('Hello3')


Promise.any([p1, p2, p3]).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

//Output - Hello3