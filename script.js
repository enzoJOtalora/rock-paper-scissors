const btn1 = document.getElementById('rock-button');
const btn2 = document.getElementById('paper-button');
const btn3 = document.getElementById('scissors-button');
const pScore = document.getElementById('player-score');
const cScore = document.getElementById('computer-score');

btn1.addEventListener('click', () => handleClick('Rock'));

btn2.addEventListener('click', () => handleClick('Paper'));

btn3.addEventListener('click', () => handleClick('Scissors'));

let rounds = {playerWins:0, computerWins:0}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(){
    let choice = getRandomInt(1,3);
    switch (choice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function handleClick(playerChoice){
    let result = playRound(playerChoice);
    if (result==1){
        rounds.playerWins++;
        pScore.textContent=parseInt(rounds.playerWins);
    } else if(result==2){
        rounds.computerWins++;
        cScore.textContent=parseInt(rounds.computerWins);
    } else {
        console.log('draw handle');
    }
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    console.log("Player chose: "+playerChoice);
    console.log("Computer chose: "+computerChoice);
    if (playerChoice===computerChoice){
        console.log("It's a draw!")
        return 0;
    }
    if ((playerChoice==="Rock"&&computerChoice==="Scissors")||
        (playerChoice==="Paper"&&computerChoice==="Rock")||
        (playerChoice==="Scissors"&&computerChoice==="Paper")){
            console.log("Player wins!")
            return 1;
        } else {
            console.log("Computer wins!")
            return 2;
        }
}

function isOver(rounds){
    if(rounds.playerWins===5||rounds.computerWins){
        return true;
    } else {
        return false;
    }
}

/*function getPlayerChoice(){
    let playerInput = prompt("Rock, Paper, Scissors!");

    if(reRock.test(playerInput)){
        return "Rock";
    } else if (rePaper.test(playerInput)){
        return "Paper";
    } else if (reScissors.test(playerInput)){
        return "Scissors";
    } else {
        console.log("Invalid string!");
        getPlayerChoice();}
}

/*function game(){
    let i = 0;
    let rounds = {playerWins: 0, computerWins: 0, draws: 0};
    while (i<5){
        let playerTurn = getPlayerChoice();
        let computerTurn = getComputerChoice();
        let result = playRound(playerTurn,computerTurn);
        switch (result){
            case 0:
                rounds.draws++;
                break;
            case 1:
                rounds.playerWins++;
                break;
            case 2:
                rounds.computerWins++;
                break;
        }
        console.log("Player won "+rounds.playerWins+" times.");
        console.log("Computer won "+rounds.computerWins+" times.");
        console.log("Draw games: "+rounds.draws);
        i++;
    }
    if(rounds.playerWins>rounds.computerWins){
        console.log("Player victory!");
    } else if(rounds.playerWins<rounds.computerWins){
        console.log("Computer victory!");
    } else {
        console.log("Overall draw!");
    }
}

console.log("Input game() to start playing...");*/