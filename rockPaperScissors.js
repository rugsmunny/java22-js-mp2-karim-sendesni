
const playerForm = document.querySelector('#playerForm');
const getPlayerName = document.querySelector('#nameRegister');
const playerName = document.querySelector('#playerName');
const displayPlayerChoice = document.querySelector('#playerChoice');
const displayPlayerScoreH3 = document.querySelector('#playerScoreH3');

const displayCpuScoreH3 = document.querySelector('#cpuScoreH3');
const displayCpuChoice = document.querySelector('#cpuChoice');

const gameContainer = document.querySelector('#gameContainer');

const playerWeaponChoice = document.querySelectorAll('#weaponSelection button');

const score = [0, 0];
const weapons = ['ROCK', 'PAPER', 'SCISSORS']

const result = document.querySelector('#result');

document.querySelector('#registerPlayerBtn').addEventListener('click', event => {
    event.preventDefault();
    getPlayerName.value === '' ? reloadPage() : startGame();
});
function startGame() {
    console.log(getPlayerName.value);
    playerName.innerText = getPlayerName.value;
    getPlayerName.value = '';
    playerForm.style.display = 'none';
    gameContainer.style.cssText = 'display: flex; flex-flow: column; align-items: center;';
    updateScore();
}
console.log(playerWeaponChoice)

playerWeaponChoice.forEach(btn => {
    btn.addEventListener('click', checkResulOfBattle)
});
function checkResulOfBattle(event) {
    const random = Math.floor(Math.random()*3);
    const cpuChoice = weapons[random];


    const playerChoice = weapons[event.target.value];

    displayCpuChoice.innerText = cpuChoice;

    displayPlayerChoice.innerText = playerChoice;
    result.innerText = playerChoice === cpuChoice ? 'TIE' :
        ((playerChoice === 'ROCK' && cpuChoice === 'SCISSORS') ||
            (playerChoice === 'PAPER' && cpuChoice === 'ROCK') ||
            (playerChoice === 'SCISSORS' && cpuChoice === 'PAPER')) ? 'WIN' : 'LOSE';

    updateScore(result);


}

const updateScore = () => {
    result.innerText === 'WIN' ? score[0] += 1 : result.innerText === 'LOSE' ? score[1] += 1 : '';
    displayPlayerScoreH3.innerText = score[0];
    displayCpuScoreH3.innerText = score[1];
    score[0] === 3 ? restartGame('YOU WIN!!') : score[1] === 3 ? restartGame('YOU LOSE!!') : '';
}

const restartGame = (string) => {
    result.innerText = '';
    playerWeaponChoice.forEach(btn => {
        btn.removeEventListener('click', checkResulOfBattle);
    })
    const div = document.createElement('div');
    const aNo = document.createElement('a');
    aNo.innerText = 'NEJ';
    aNo.setAttribute('class', 'no');

    aNo.href = 'https://youtu.be/wDYNVH0U3cs?t=3';
    const aYes = document.createElement('a');
    aYes.setAttribute('class', 'yes');
    aYes.innerText = 'JA';
    aYes.href = '.';

   //addEventListener('click', window.location.reload)
    div.innerText = string + '\n\nVill du spela igen?';
    div.append(aNo, aYes);
    result.insertBefore(div, result.children[0]);

}

const reloadPage = () => {
    alert('Försöker du ge mig IG?\nSkriv något i textrutan först SEN kan du klicka dig vidare...');
}
