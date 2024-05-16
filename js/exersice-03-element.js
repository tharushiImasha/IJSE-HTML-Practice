let input = document.getElementById('input-num')

input.addEventListener('keydown', (event) => {

    console.log('key code : ', event.keyCode)
    console.log('Key down...' + event.key)

    if(event.keyCode > 58 || event.keyCode < 47){
        alert('Invalid')
        event.preventDefault()
    }
    
})

