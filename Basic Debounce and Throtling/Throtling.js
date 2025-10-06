function check(func, delay) {
    let lasttime = 0

    return function(...args) {
        let now = Date.now()

        if (now - lasttime >= delay) {
            func.apply(this, args)
            lasttime = now
        }
    }
}

let log = check(() => console.log('hello'), 2000)


log()
log()
log()
log()
log()

setTimeout(() => {
    console.log('done')
}, 2000)