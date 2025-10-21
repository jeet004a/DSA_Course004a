/* Q1.
Design youtube


1. create three table structure user video comments
2. in commnets user have reply comments as well


follow up questions/ cover corner cases
write a query that capture the user information and joins between comments and user table


Q2. Create basic promise and resolve it.

Q3. Create a function and return something after 2000 milisecond 

Q4. return a promise and print suche a way that reference below
example 
Hello 1
Hello 2
Hello 3
*/
function check() {
    return new Promise((resolve, reject) => {
        reject('hello')
    })
}

let tryc = 3
let maxTry = 1

async function abc(fnc, delay) {
    let timer
    if (maxTry <= tryc) {
        fnc().then((data) => {
            console.log(data)
        }).catch(() => {
            setTimeout(() => {
                console.log('Hello', maxTry)
                maxTry++
                abc(fnc, delay)
            }, 2000)
        })
    }


}

abc(check, 3000)







/*
Q5. Create request pipeline that have one bussiness logic function and before sending the response to the user add a key value paire on it

Q6. Diffrence between find and aggregate.

*/