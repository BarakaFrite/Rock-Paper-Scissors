const possibleChoice = ['Paper','Rock','Scissors'];

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    return possibleChoice[a];
}
let computerChoice = getComputerChoice();
console.log(computerChoice);

let repeatChoice = true;
let cancelChoice = true;
let playerSelection;


const validChoicesRegex = /^\s*(?:rock|paper|scissors)\s*$/gmi;

//validation function

function validate(field,regex){
    if(regex.test(field)){ 
        a = 'valid';
    }else{
        a='invalid';
    } 
    console.log( 'a : ' + a);
    return a  
};

while (repeatChoice && cancelChoice){
    console.log(repeatChoice + '  ' + cancelChoice);
    playerSelection = prompt('Rock, Paper or Scissors?');
    console.log('playerSelection : ' + playerSelection);
    if(playerSelection == null){
        console.warn('You choose nothing. Reload to play again.');
        cancelChoice = false;
    }else{
        let checkChoice = validate(playerSelection,validChoicesRegex);
        if (checkChoice == 'valid'){
            repeatChoice = false;
        }else{    
            console.warn('You choose '+ playerSelection + ' instead of Rock, Paper or Scissors.Please try again');
        }
    }

}
console.log('playerSelection2 : ' + playerSelection);
function checkWinner(userInput,computerInput){
    if(userInput.toUpperCase() == computerInput.toUpperCase()){
        console.log ('Tie !')
    }else if (userInput.toUpperCase() == 'ROCK'){
        if (computerInput.toUpperCase() == 'SCISSORS'){
            console.log ('WIN !!')
        }else{
            console.log ('LOSE !!')
        }
    }else if(userInput.toUpperCase() == 'SCISSORS'){
        if (computerInput.toUpperCase() == 'PAPER'){
            console.log ('WIN !!')
        }else{
            console.log ('LOSE !!')
        }
    }else{
        if (computerInput.toUpperCase() == 'ROCK'){
            console.log ('WIN !!')
        }else{
            console.log ('LOSE !!')
        }
    }
}
console.log('test : '+ playerSelection + ' '+ computerChoice);
checkWinner(playerSelection,computerChoice);
