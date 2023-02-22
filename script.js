const possibleChoice = ['Paper','Rock','Scissors'];

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    return possibleChoice[a];
}
console.log(getComputerChoice());

let repeatChoice = true;
let cancelChoice = true;


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
    let playerSelection = prompt('Rock, Paper or Scissors?');
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

