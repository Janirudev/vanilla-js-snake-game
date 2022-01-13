let score = 0
let highScore = 0

const scoreCounter = document.querySelector('#c-score')
const highScoreCounter = document.querySelector('#h-score')

export function incrementScore() {
    return score++;
}

export function clearScore() {
    return score = 0
}

export function setHighScore(score) {
    highScore = score
    highScoreCounter.textContent = highScore
    localStorage.setItem('snake-highscore', score)
}

export function setScore() {
    scoreCounter.textContent = score

    if(score > highScore) {
        setHighScore(score)
        highScoreCounter.textContent = highScore
    }

    return
}