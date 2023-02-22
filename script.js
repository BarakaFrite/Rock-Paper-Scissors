const possibleChoice = ['Paper','Rock','Scissors'];
function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    return possibleChoice[a];
}
console.log(getComputerChoice());