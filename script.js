const reRock=/rock/gi;
const rePaper=/paper/gi;
const reScissors=/scissors/gi;

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

function playRound(playerChoice,computerChoice){
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

function getPlayerChoice(){
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