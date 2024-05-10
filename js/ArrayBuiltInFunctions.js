let studentNames = ['Kamal', 'Amal', 'Nimal'];
console.log('Student Array : ', studentNames)

//Built-in functions

console.log('=============================================')

//1. push - adds one or more elements to the end of array

studentNames.push('John' , 'Marsh');
console.log('Student Array after pushed: ', studentNames)

console.log('=============================================')

//2. pop - remove the last element from and array and returns that element

let poppedName = studentNames.pop()
console.log('Popped Name : ', poppedName)
console.log('Student Array after popped: ', studentNames)

//3.shift - remove the first element from and array and returns that element

let shiftedName = studentNames.shift()
console.log('Shifted Name : ', shiftedName)
console.log('Student Array after shifted: ', studentNames)
console.log('0 index after shifted : ', studentNames[0])

console.log('=============================================')

//4. unshift - adds one or more elements to the begining of array

studentNames.unshift('Josh' , 'Steve');
console.log('Student Array after unshifted: ', studentNames)

console.log('=============================================')

//5. concat - Combines two or more arrays and returns a new array

let maleNames = ['Kusal', 'Dimuth', 'Pathum']
let femaleName = ['Chamari', 'nimali', 'Ushani']

let cricketers = maleNames.concat(femaleName)
console.log('Cricketers Array : ', cricketers)

console.log('=============================================')

//6. slice - returns a copy of
 
let fruits = ['Apple', 'Mango', 'Orange', 'Grapes']
console.log('Fruits array after slice 0 index : ', fruits.slice(0))
console.log('Fruits array after slice 1 index : ', fruits.slice(1))
console.log('Fruits array after slice 2 index : ', fruits.slice(2))

console.log('=============================================')

//7. splice - 

let fruitsArray = ['Apple', 'Mango', 'Orange', 'Grapes']

fruitsArray.splice(2, 1, 'Mangoose')       //mulin danne ki weni ek lg idnd watenne kiyl, deweniyt dnne ethn idn kiyk ain wenoda kiyl
console.log('Fruits array after splice : ', fruitsArray)

console.log('=============================================')

// 8. reverse

let letters = ['a', 'b', 'c', 'd']

console.log('Letters array ', letters)
console.log('Letters array after reverse ', letters.reverse())

console.log('=============================================')

// 8. sort

let numbers = [10, 40, 60, 20, 90, 50]

console.log('Numbers array ', numbers)

//descending order

console.log('Numbers array after sorted ', numbers.sort().reverse())

let testingA = ['Amal', 'Kamal', 'Dog', 100]
console.log('testing : ', testingA)
console.log('testing 0 index : ', typeof testingA(0))
console.log('testing 2 index : ', typeof testingA(2))


