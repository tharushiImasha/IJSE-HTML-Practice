function gradingFunc(mark){
    let result
    if(mark >= 90){
        result = 'A+'
    }
    else if(mark < 90 && mark >= 80){
        result = 'A-'
    }
    else if(mark < 80 && mark >= 75){
        result = 'A'
    }
    else if(mark < 75 && mark >= 65){
        result = 'B-'
    }
    else if(mark < 65 && mark >= 55){
        result = 'C'
    }
    else if(mark < 55 && mark >= 35){
        result = 'S'
    }
    else if(mark < 35){
        result = 'F'
    }
    else{
        result = 'Invalid Mark'
    }

    return result
}

function getStudentResult(student, marks){

    for(let i = 0; i <= marks.length; i++){
        console.log(student[i],'\'s Grade for ', marks[i], ' -> ', gradingFunc(marks[i]))
    }
    
}

function getStudentResult1(studentArr){

    for(let i = 0; i <= studentArr.length; i++){
        console.log(studentArr[i].name,'\'s Grade for ', studentArr[i].mark, ' -> ', gradingFunc(studentArr[i].mark))
    }
    
}


let studentArr = [
    {name: 'Kamal', mark: 92},
    {name: 'Saman', mark: 73},
    {name: 'Nimal', mark: 78},
    {name: 'Tharu', mark: 100},
    {name: 'Uchi', mark: 12},
    {name: 'Sarasi', mark: 38},
    {name: 'Hansi', mark: 59},
    {name: 'Naveen', mark: 62},
    {name: 'Sithmi', mark: -10}
]

let student = ['Kamal', 'Saman', 'Nimal', 'Tharu', 'Uchi', 'Sarasi', 'Hansi', 'Naveen', 'Sithmi']
let marks = [92, 73, 78, 100, 12, 38, 59, 62, -10]

getStudentResult(student, marks)

console.log("======================================================")

getStudentResult1(studentArr)
