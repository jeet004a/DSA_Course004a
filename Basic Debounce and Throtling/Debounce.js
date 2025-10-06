//Below consist basic debounce function 

function check(func, delay) {
    let timer

    return function(...args) {
        clearInterval(timer)
        timer = setTimeout(() => {
            func.call(this, args)
        }, delay)
    }
}


let log = check(() => console.log('hello logged'), 2000)

log()
log()
log()