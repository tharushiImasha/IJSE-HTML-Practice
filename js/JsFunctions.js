function sayHello(){
    console.log('Hello World')
}

sayHello()

function greeting(firstName , lastname){
    console.log('Good Morning '+firstName +' '+lastname)
    return firstName+ ' ' + lastname
}

greeting('Kamal')
greeting()
greeting('Kamal', 'Perera')
greeting(1, 2)

let greetingReturned = greeting('Nimal', 'Silva')
console.log(greetingReturned)

