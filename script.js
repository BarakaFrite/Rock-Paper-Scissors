const possibleChoice = ['Paper','Rock','Scissors'];

function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    return possibleChoice[x];
}
let computerChoice;
let playerSelection;


const validChoicesRegex = /^\s*(?:rock|paper|scissors)\s*$/mi;

//validation function

function validate(field,regex){
    regex.lastIndex= 0;
    return regex.test(field)
};

function playRound(userInput,computerInput){
    
    if(userInput.toUpperCase() == computerInput.toUpperCase()){
        console.log ('Tie !')
    }else if (userInput.toUpperCase() == 'ROCK'){
        if (computerInput.toUpperCase() == 'SCISSORS'){
            console.log ('WIN !!');
            scoreUser++;
        }else{
            console.log ('LOSE !!');
            scoreComputer++;
        }
    }else if(userInput.toUpperCase() == 'SCISSORS'){
        if (computerInput.toUpperCase() == 'PAPER'){
            console.log ('WIN !!');
            scoreUser++;
        }else{
            console.log ('LOSE !!');
            scoreComputer++;
        }
    }else{
        if (computerInput.toUpperCase() == 'ROCK'){
            console.log ('WIN !!');
            scoreUser++;
        }else{
            console.log ('LOSE !!');
            scoreComputer++;
        }
    }
}

//main
let scoreUser = 0;
let scoreComputer =0;
let repeatChoice = true;
let cancelChoice = true;


for(let i=0; i< 5;i ++){
    let checkChoice = false;
    console.log('___________________________________');
    console.log('Round : '+ i);
    computerChoice = getComputerChoice();
    console.log('computerChoice : ' + computerChoice);
    while (repeatChoice && cancelChoice){
        console.log(repeatChoice + '  ' + cancelChoice);
        playerSelection = prompt('Rock, Paper or Scissors?');
        console.log('playerSelection : ' + playerSelection);
        if(playerSelection == null){
            console.warn('You choose to stop the game :(. Reload to play again.');
            cancelChoice = false;
        }else{
            checkChoice = validate(playerSelection,validChoicesRegex);
            console.log ('checkChoice : '+ checkChoice);
            if (checkChoice == true){
                repeatChoice = false;
            }else{    
                console.warn('You choose '+ playerSelection + ' instead of Rock, Paper or Scissors.Please try again');
            }
        }
    
    }
    repeatChoice = true;
    cancelChoice = true;
    console.log('test : '+ i +' '+ playerSelection + ' '+ computerChoice);

    playRound(playerSelection,computerChoice);
    console.log ('User score : ' + scoreUser + ' Computer score : ' + scoreComputer);

}
let winnerIs;
if(scoreUser > scoreComputer){
    winnerIs = 'User';
}else if(scoreUser < scoreComputer){
    winnerIs = 'computer';
}else{
    winnerIs = 'no one';
}
console.log('*****************************');
console.warn('Winner is : ' + winnerIs);
console.log('*****************************');
