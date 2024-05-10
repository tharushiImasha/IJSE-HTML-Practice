let i = 1;

let count = () => {

    console.log(i)
    i++;

    if(i == 11) {
        clearInterval(interval)
    }

}

let interval = setInterval(count, 2000)

