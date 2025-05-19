let searchBox = document.getElementById("abc");

function debounce(fn, delay) {
    let timer
    let i = 0
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            i++
            console.log(i)
                // fn.apply(this, args)
            fn(args[0])
        }, delay)
    }
}


async function check() {
    let query = searchBox.value
    if (!query) {
        console.log("empty")
    } else {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?title=${encodeURIComponent(query)}`)
        const data = await response.json()
        printData(data)
    }
}

function printData(data) {
    resultsDiv.innerHTML = '';
    if (data.length === 0) {
        resultsDiv.innerHTML = 'No results found.';
        return;
    }
    const ul = document.createElement('ul');
    data.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);

}

const debounceFN = debounce(check, 1000)

searchBox.addEventListener('keyup', debounceFN)
const resultsDiv = document.getElementById('xyz');