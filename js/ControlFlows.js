//Javascript Control Flows

// 1. if/else/else if

let num = 0

if(num > 0){
    console.log('Number is positive')
}

if(num < 0){
    console.log('Number is negative')
}

if(num == 0){
    console.log('Number is zero')
}

// 2.Switch statement

let dayOfWeeks = 1

switch(dayOfWeeks){
    case 1:
        console.log('Sunday')
        break
    case 2:
        console.log('Monday')
        break
    case 3:
        console.log('Tuesday')
        break
    case 4:
        console.log('Wednesday')
        break
    case 5:
        console.log('Thursday')
        break
    case 6:
        console.log('Friday')
        break
    case 7:
        console.log('Saturday')
        break
    default:
        console.log('Invalid')
}

console.log('=============================')

//3.For/while/do-while


for(let i = 0; i < 5; i++){
    console.log(i)
}

let j = 5

while(j<5){
    console.log(i)
}



//5.continue

// for(let i = 0; i < 5; i++){
//     if(i===3)
// }


function itterateNum(){
    for(var i = 0; i < 5; i++){
        console.log(i)
    }

    console.log(i)                  //var - fuctin scoped                 let - block scope

}

itterateNum()