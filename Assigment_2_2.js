const prompt = require("prompt-sync")();

// THE CODE STARTS HERE!
let movies = []
var option = 0

function addMovie(){
    console.log(`Let's add a new movie!`)
    let newmovie = prompt(`Add your movie: `)
    movies.push(newmovie)
    console.log(`Movie added successfully.`)
    return movies
}


function removeMovie(){
    if (movies.length === 0){
        console.log(`You dont have movies!!!!`)
    }
    else{
        console.log(`This are your saved movies: ${movies}`)

        let existingmovie = prompt(`Remove one of your movies: `)
        let found = false
        for (let i = 0; i < movies.length; i++){

            if (movies[i].toLowerCase() === existingmovie.toLowerCase()){
                movies.splice(i, 1)
                found = true
                break
            }
        }
        if (found === false){
            console.log(`Movie does not exist.`)
        }
    }
    return movies
}


function searchMovie(){
    if (movies.length === 0){
        console.log(`You dont have movies!!!!`)
    }
    else{
        let searchmovie = prompt(`What movie do you want to search? `)
        let found = false

        for (let i = 0; i < movies.length; i++){

            if (movies[i].toLowerCase() === searchmovie.toLowerCase()){
                found = true
            }
        }
        if (found === true){
            console.log(`Movie found!`)
        }
        else{
            console.log(`Movie not found.`)
        }
    }
}


function allMovies(){
    if (movies.length !== 0){

        for (let i = 0; i < movies.length; i++){
            console.log(`${i + 1}. ${movies[i]}`)
        }
    }
    else{
        console.log(`You dont have movies!!!!`)
    }
}


function countMovies(){
    let total = movies.length
    console.log(`Total movies: ${total}`)
    return total
}


function uppercaseMovie(){
    if (movies.length === 0){
        console.log(`You dont have movies!!!!`)
    }
    else{
        let movie = prompt(`What movie do you want to display in uppercase? `)
        let found = false

        for (let i = 0; i < movies.length; i++){

            if (movies[i].toLowerCase() === movie.toLowerCase()){
                movie = movies[i]
                found = true
            }
        }
        if (found === true){

            let finaltext = ""

            for (let i = 0; i < movie.length; i++){

                let code = movie.charCodeAt(i)

                if (code >= 97 && code <= 122){
                    let upperCode = code - 32
                    let upperLetter = String.fromCharCode(upperCode)
                    finaltext = finaltext + upperLetter
                }
                else{
                    finaltext = finaltext + movie[i]
                }
            }

            console.log(finaltext)
        }
        else{
            console.log(`Movie not found.`)
        }
    }
}

while (option !== 7){

    console.log(`
Movie Collection Manager
1. Add Movie
2. Remove Movie
3. Search Movie
4. Print All Movies
5. Count Movies
6. Display Movie in Uppercase
7. Exit`)

    option = Number(prompt(`Please select one of this options: `))
    if (option === 1){
        addMovie()
    }

    else if (option === 2){
        removeMovie()
    }

    else if (option === 3){
        searchMovie()
    }

    else if (option === 4){
        allMovies()
    }

    else if (option === 5){
        countMovies()
    }

    else if (option === 6){
        uppercaseMovie()
    }

    else if (option === 7){
        console.log(`Goodbye!`)
    }

    else{
        console.log(`Invalid option!`)
    }
}