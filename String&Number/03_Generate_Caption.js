// 3582. Generate tag for video caption 

var generateTag = function(caption) {
    caption = caption.trim()
    let x = caption.split(' ')
    x[0] = x[0].toLowerCase()
    if (x.length > 1) {
        for (let i = 1; i < x.length; i++) {
            x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1).toLowerCase()
        }
    } else {

        return `#${x[0].toLowerCase().slice(0,99)}`
    }
    return `#${x.join('').slice(0,99)}`
};