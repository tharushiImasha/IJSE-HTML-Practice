
let interval = setInterval(() => console.log('ABCD'), 500)


setTimeout(() => {
    clearInterval(interval)
}, 5000)

