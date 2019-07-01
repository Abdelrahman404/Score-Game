// Varibales and Selectors
let limit = 5;
let scoreOne = 0;
let scoreTwo = 0;

let playerOneScore = document.querySelector('#playerOneScore').addEventListener('click',increaseScoreOne);
let playerTwoScore = document.querySelector("#playerTwoScore").addEventListener('click' , increaseScoreTwo);

let scoreOneText = document.querySelector('#scoreOneText');
let scoreTwoText = document.querySelector('#scoreTwoText');

let winnerArea = document.querySelector('#winnerArea');

function increaseScoreOne(){
    if (scoreOne < limit && scoreTwo != limit){
        scoreOne++;
        console.log(scoreOne);
        scoreOneText.textContent = scoreOne;
        }
        printWinner();
}

function increaseScoreTwo(){
    if (scoreTwo < limit && scoreOne != limit) {
        scoreTwo++;
        console.log(scoreTwo);
        scoreTwoText.textContent = scoreTwo;
    }
    printWinner();
}

function printWinner(){
    if (scoreOne === limit || scoreTwo === limit){
        if (scoreOne > scoreTwo){
            console.log("Player One is Winner");
            winnerArea.textContent = 'Player One is Winner';
        }else if(scoreTwo > scoreOne){
            console.log('Player Two is Winner');
            winnerArea.textContent = 'Player Two is Winner';
        }
    }
}