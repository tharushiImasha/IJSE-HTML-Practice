function addNum(n1 , n2){
    return n1 + n2
}

// const addNumArrowFunction = (n1 , n2) => {
//     return n1 + n2
// }

const addNumArrowFunction = (n1 , n2) => n1 + n2

const sayHello = () => "Hello"

console.log(addNum(10, 20))
console.log(addNumArrowFunction(10, 20))
console.log(sayHello())



//converting named functions to arrow function

const addNumber = (n1 , n2) => n1 + n2
console.log(addNumber(10, 20))

//converting anonymous functions to arrow function

let multiNum = (n1, n2) => n1*n2

console.log(multiNum(10,20))


//converting constructor functions to arrow function

//Syntax wise this is posible
//But, DO NOT DO THIS
//Not supports 'this' , 'new' when using arrow functions

let Student = (name, age, email) => {
    this.name = name
    this.age = age
    this.email = email
}

let student1 = new Student('Kamal', 20, 'kamal@gmail.com')

// console.log(student1)

//converting callback functions to arrow function

let myFunc = (callback) => console.log(callback)

let secondFuntion = () =>{
    console.log('second function')
}

myFunc(secondFuntion)
