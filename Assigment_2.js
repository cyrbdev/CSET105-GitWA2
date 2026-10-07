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
    index = grade.indexOf(exixtingrade)
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
    for (let i = 0; i < grade.length; i++) {
        console.log(grade[i])
        
    }
    return i
}




while (option !== 6){
    console.log(`Welcome to your Student Grade Manager!`)
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
        // here goes find
    }

    else if (option === 5){
        // here goes print
    }
}