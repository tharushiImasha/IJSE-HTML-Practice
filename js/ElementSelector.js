console.log('Hello')

//ID selector

let calButton = document.getElementById('btnCalculate')
console.log(calButton)

calButton.style.backgroundColor = 'purple'
calButton.style.color = 'white'

//button click event listner
calButton.addEventListener('click', () => alert('Hello World'))


//Class selector

let boxes = document.getElementsByClassName('box')
console.log(boxes)

//Tag selector

let headings = document.getElementsByTagName('h1')
console.log(headings)

//Query selector

let button = document.querySelector('#btnCalculate')
console.log(button)

let test = document.querySelector('.test-div')
console.log(test)

let box = document.querySelector('.box')
console.log(box)

let b = document.querySelectorAll('.box')
console.log(b)

let bb = document.querySelector('#container .box')      //box kiyl eliye ekk mulin hmbwel ek print wen ek nwttnn container ek athule thiyen box ek gnn kiynw
console.log(bb)

let bbb = document.querySelectorAll('#container .box')   
console.log(bbb)