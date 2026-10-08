const prompt = require("prompt-sync")();

// THE CODE STARTS HERE!
let grade = []
var option = 0
function addGrade(){
    console.log(`Let's add a new grade!`)
    let newgrade = Number(prompt(`Add your grade: `))
    if (newgrade >= 0 && newgrade <=100){
        grade.push(newgrade)
    }
    else{
        console.log(`Your grade have to be 0 to 100!`)
        addGrade()
    }
    return grade
}

function removeGrade(){
    console.log(`Let's remove a grede!`)
    console.log(`This are your save grades: ${grade}`)
    let exixtingrade = Number(prompt(`Remove one of your grades: `))
    let index = grade.indexOf(exixtingrade)
    if (index !== -1){
        grade.splice(index, 1)
    }
    else{
        console.log(`Grade DON'T finded!`)
        removeGrade()
    }
    return grade
}

function calculateAve(){
    let total = 0
    for (let i = 0; i < grade.length; i++) {
        total = total + grade[i];
    }
    let average = total / grade.length
    if (grade.length === 0){
        console.log(`You not have a grade!!!!!`)        
    }
    else{
    console.log(`Grades: ${grade}`)
    console.log(`Average: ${average}`)
    }
    return average
}

function findGrade(){
     let max = 0
    for (let i = 0; i < grade.length; i++){
        if (grade[i] > max){
            max = grade[i];
        } 
    }
    if (grade.length === 0){
        console.log(`You dont have a grade!!!!`)
    }
    else {
        console.log(`Your highest grade is ${max}`)
    }
    return max
}

function allGrade(){
    numero = 0
    if (grade.length !==0){
        for (let i = 0; i < grade.length; i++) {
        console.log(`${i + 1}. ${grade[i]}`)
        }
    }
    else{
        console.log(`You dont have a grade!!!!`)
    }
}



while (option !== 6){
    console.log(`Student Grade Manager!`)
    console.log(`1. Add Grade
2. Remove Grade
3. Calculate Average
4. Find Highest Grade
5. Print All Grades
6. Exit`)
    option = Number(prompt(`Please select one of this options: `))

    if (option === 1){
        addGrade()
    }
    else if (option === 2){
        removeGrade()
    }

    else if (option === 3){
        calculateAve()
    }

    else if (option === 4){
        findGrade()
    }

    else if (option === 5){
        allGrade()
    }
}