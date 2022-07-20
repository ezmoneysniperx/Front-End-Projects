const p1 = {
    score : 0,
    button : document.getElementById('p1button'),
    display : document.getElementById('p1Display')
}

const p2 = {
    score : 0,
    button : document.getElementById('p2button'),
    display : document.getElementById('p2Display')
}

const resetButton = document.getElementById('reset')
const winningScoreSelect = document.getElementById('winningScore')
let winningScore = 3

let p1score = 0;
let p2score = 0;
let isGameOver = false

function updateScore(player, opponent){
    if (!isGameOver){
        player.score += 1;
        if (player.score === winningScore){
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.innerText = player.score;
    }
}

function reset() {
    isGameOver = false
    p1.score = 0
    p2.score = 0
    p1.display.innerText = p1score
    p2.display.innerText = p2score
    p1.display.classList.remove('has-text-success','has-text-danger')
    p2.display.classList.remove('has-text-success','has-text-danger')
    p1.button.disabled = false
    p2.button.disabled = false
}

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(winningScoreSelect.value)
    reset()
})

p1button.addEventListener('click', function(){
    updateScore(p1,p2)
})

p2button.addEventListener('click', function (){
    updateScore(p2,p1)
})

resetButton.addEventListener('click', reset)

