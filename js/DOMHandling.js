let box = document.getElementById('box')
console.log(box)

//1. Inner HTML - sets of returns the HTML content(including HTML tags) of an element

console.log(box.innerHTML)

box.innerHTML = '<span>Hello</span>'

console.log(box.innerHTML)


//2. textContent - sets or return the text content of an element, excluding HTML tags

console.log(box.textContent)

box.textContent = 'Kamal Perera'
console.log(box.textContent)


//3. innerText - SAme as textContent. But, InnertExt shows as DOM renders
//while textContent shows only the textual content

console.log(box.innerText)
box.innerText = 'Nimal Silva'

console.log(box.innerText)


// 4. Applying Styles

let img = document.getElementById('image')

img.style.width = '300px'
img.style.height = '200px'
img.style.marginTop = '50px'


//5. setAttributes - sets the value of an attribute on the selected element

img.setAttribute('src', '/assets/bgPic.jpg')

//6. classList - Allows you to manipulate  classes on an element

console.log(box.classList)

box.classList.add('abc', 'xyz', 'ccc')
console.log(box.classList)

box.classList.remove('ccc')
console.log(box.classList)

box.classList.replace('abc', 'lmn')
console.log(box.classList)


//7. append & appendChild

let parentDiv = document.createElement('div')

box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr', 'new')

parentDiv.appendChild(childDiv)

//8. remove & removeChild

parentDiv.removeChild(childDiv)
// parentDiv.remove()