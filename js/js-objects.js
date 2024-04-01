let student = {}        //object 1k create krn hti
console.log('Type of varieble : ', typeof student)
console.log('Type of student : ', student)

student = {
    firstName: 'Kamal',
    lastName: 'Perera',
    email: 'kamal@gmail.com',
    phoneNumber: '0778249127',
    age: 20,
    isRegistered: true
}

console.log('Student : ', student)

console.log('Email (using dot notation) : ', student.email)

console.log('Email (using square bracket notation) : ', student['email'])


//assigning values using dot notation

student.age = 25;
console.log('Student : ', student)

//assigning values using square bracket notation

student['age'] = 30;
console.log('Student : ', student.age)