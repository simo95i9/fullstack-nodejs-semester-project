const barbieMovies = [
    { name: "Barbie of Swan Lake", year: 2003 },
    { name: "Barbie as the Princess and the Pauper", year: 2004 },
    { name: "Barbie and the Three Musketeers", year: 2008 },
]
console.log("barbieMovies =", barbieMovies)

// TASK: Use Array.prototype.map() below to give all the movie a 10 rating (out of 10 of course)
const ratedBarbieMovies = barbieMovies.map(movie => { return {...movie, rating: "11/10"} })
console.log("ratedBarbieMovies =", ratedBarbieMovies)


// TASK: Return the movie that are more recent that 2005
const recentBarbieMovies = ratedBarbieMovies.filter(movie => movie.year > 2005)
console.log("recentBarbieMovies = ", recentBarbieMovies)