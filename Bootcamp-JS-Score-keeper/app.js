
//Select elements
const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
var reset  = document.querySelector('#reset');
var numInput = document.querySelector('#numInput');
var p2Score = 0;
var p1Score = 0;
var gameOver = false;
var winningScore = 5;


// Add EventListeners that implement the changes in the scores.

// we are using some simple logic to set the game limit to 5. You get thrown from the loop that allows increment scores if score is past a const.

p1Button.addEventListener('click',function(){
    if(!gameOver){
p1Score ++;
if(p1Score === winningScore){
    p1Display.classList.add('winner');
    gameOver = true;
}
    p1Display.textContent = p1Score;
}
});

p2Button.addEventListener('click',function(){
    if(!gameOver){
p2Score ++;
if(p2Score === winningScore){
    p2Display.classList.add('winner');
    gameOver = true;
}
    p2Display.textContent = p2Score;
}
});

//for reset we need to reset p1score and p2score to 0 and the displays
//we need to remove the winner class
// we need to make gameOver False so we can play again

// so select the button, then add event listener and call the resetNumber function below

reset.addEventListener('click', resetNumber);

function resetNumber (){
     p1Score = 0;
     p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
};


// now implement the play to feature
//this refers to numInput in here

numInput.addEventListener('change', function(){
playTo.textContent = this.value;
winningScore = Number(this.value);
resetNumber();
});
