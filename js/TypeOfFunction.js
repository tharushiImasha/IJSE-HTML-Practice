//Type of functions

//01. Named Functions
function addNum(n1, n2){
    return n1+n2
}

console.log(addNum(10, 20))

console.log("======================================================")

// 02. Anonymous Functions
let multiNum = function (n1, n2){
    return n1*n2
}

console.log(multiNum(10,20))

console.log("======================================================")
 

//03. Arrow Functions

// let subNum = (n1, n2) => {
//     console.log('Inside arrow function')
//     return n1 - n2
// }

let subNum = (n1, n2) => n1 - n2

console.log(subNum(20, 10))

console.log("======================================================")

//04. Constructor Functions
function Student(name, age, email){
    this.name = name
    this.age = age
    this.email = email
}

let student1 = new Student('Kamal', 20, 'kamal@gmail.com')

console.log(student1)

console.log("======================================================")


//05. Callback Functions
function myFunc(callback){
    if(typeof callback == 'function'){
        callback()
    }
    else if(typeof callback == 'object'){
        console.log(person)
    }
}

// myFunc(100)

// let numbersArray = [1, 2, 3, 4]

let person = {
    name: 'Kamal',
    age: 20
}

function secondFuntion(){
    console.log('second function')
}

myFunc(person)
myFunc(secondFuntion)

console.log("======================================================")


//07. Recursive Functions
function factorial(n){
    if (n == 0){
        return 1
    }
    return  n * (factorial(n-1))
}

console.log(factorial(5))