//1. setTimeout - executes a function once after a specific delay
//setTimeout(callback, delay)

let timeOut = setTimeout(() => console.log('Hello......'), 2000)

//cancel the timeout
clearTimeout(timeOut)

// setInterval
// setInterval(callback, interval)

let interval = setInterval(() => console.log('Hey...........'), 1000);

//cancel the interval
clearInterval(interval)

let greet = () => console.log('Hello world...')

setInterval(greet, 1000);
