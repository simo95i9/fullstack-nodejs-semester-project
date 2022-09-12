const game = {
    score: null,
    playerOne: null,
    playerTwo: null
}

function initializeScore(score = 301) {
    game.score = score
}

function initializePlayers(playerOne, playerTwo) {
    game.playerOne = playerOne
    game.playerTwo = playerTwo
}

function initializeGame() {
    console.log(`The players are ${game.playerOne} VS ${game.playerTwo}`)
    console.log(`The game starts with score... ${game.score}`)
}

module.exports = { initializeScore, initializePlayers, initializeGame }
