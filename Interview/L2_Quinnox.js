// Q1.
const promise = new Promise(res => res(2))


promise.then(i => {
    console.log(i) //2
    return i * 2
}).then(i => {
    console.log(i) //4
    return i * 2
}).then(i => {
    console.log(i) // 8
}).finally(i => {
    console.log(i) // 6
    return i * 2;
})



// Q2. Output based question
Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => {
        throw new Error('My Error')
    }) //
    .catch(() => 1)
    .then((x) => x + 1)
    .then((x) => console.log(x)) // 2
    .catch(console.error)



// Q3. Output based question
const tasks = [1, 2, 3, 4, 5, 6];

async function fakeAPI(id) {
    console.log('Start:', id);
    await new Promise((res) => setTimeout(res, 300));
    console.log('Done:', id);
}

async function runLimited(limit) {
    const running = [];
    for (const t of tasks) {
        const p = fakeAPI(t);
        running.push(p);
        if (running.length >= limit) {
            await Promise.race(running); // First settled promise
            running.splice(0, running.length - limit + 1);
        }
    }
    await Promise.all(running); // 
}

runLimited(2);




//Q4. Output based question
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (data) => {
    console.log(data);
});

console.log('Statement A');
eventEmitter.emit('myEvent', 'Statement B');
console.log("Statement C");