//1. click event

document.getElementById('btnAdd').addEventListener('click', ()=>{
    console.log('Add to cart')
    alert('Added Successfully')
})


//2. mouseover event

document.getElementById('box').addEventListener('mouseover', () => {
    console.log('Mouse Over')
})


//3. mouseout event

document.getElementById('box').addEventListener('mouseout', () => {
    console.log('Mouse Out')
})

let box = document.getElementById('box')

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'red'
})

box.addEventListener('mouseout', () => {
     box.style.backgroundColor = 'green'
})


//4. keydown event

let userNameField = document.getElementById('userName')
userNameField.addEventListener('keydown', (event) => {

    console.log('key : ', event)
    console.log('key code : ', event.keyCode)
    console.log('Key down...' + event.key)
})

//5. keyup event

userNameField.addEventListener('keyup', (event) => console.log('Key up...' + event.key))

//6. submit event

document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Form submited')
})
