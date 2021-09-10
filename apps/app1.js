const rollDice = document.getElementById("rollDice");
const hold = document.getElementById("hold");
const winner = document.getElementById("winner");
const diceImage = document.getElementById("diceImage");
const restart = document.getElementById("restart");
const p1CRV = document.getElementById("p1CRV");
const p2CRV = document.getElementById("p2CRV");
const p1TS = document.getElementById("p1TS");
const p2TS = document.getElementById("p2TS");
const p1TR = document.getElementById("p1TR");
const p2TR = document.getElementById("p2TR");

let p1Score = 0;
let p2Score = 0;
let p1CurrentRoll = 0;
let p2CurrentRoll = 0;
let p1CurrentRollValue = 0;
let p2CurrentRollValue = 0;

hold.addEventListener("click", () => {
    if (rollDice.textContent == "P1 Roll Dice"){
        rollDice.textContent = "P2 Roll Dice";
    } else if (rollDice.textContent == "P2 Roll Dice") {
        rollDice.textContent = "P1 Roll Dice";
    }
});
restart.addEventListener("click", () => {
    location.reload();
});
rollDice.addEventListener("click", () => {
    if (rollDice.textContent == "P1 Roll Dice"){
        p1CurrentRollValue = Math.ceil(Math.random() * 6);
        p1CRV.textContent = p1CurrentRollValue;
        p1Score += p1CurrentRollValue;
        if (p1CurrentRollValue == 1) {
            diceImage.src = "images/face1.png";
            p1Score = 0;
            rollDice.textContent = "P2 Roll Dice";
        }
        p1TS.textContent = p1Score;
        p1CurrentRoll++;
        p1TR.textContent = p1CurrentRoll;
        if (p1CurrentRollValue == 2) {
            diceImage.src = "images/face2.png";
        } else if (p1CurrentRollValue == 3) {
            diceImage.src = "images/face3.png";
        } else if (p1CurrentRollValue == 4) {
            diceImage.src = "images/face4.png";
        } else if (p1CurrentRollValue == 5) {
            diceImage.src = "images/face5.png";
        } else if (p1CurrentRollValue == 6) {
            diceImage.src = "images/face6.png";
        } 
        if (p1Score >= 20) {
            winner.textContent = "Player 1 Wins";
            rollDice.style.display = "none";
            hold.style.display = "none";
            diceImage.src = "";
        }
    } else if (rollDice.textContent == "P2 Roll Dice"){
        p2CurrentRollValue = Math.ceil(Math.random() * 6);
        p2CRV.textContent = p2CurrentRollValue;
        p2Score += p2CurrentRollValue;
        if (p2CurrentRollValue == 1) {
            diceImage.src = "images/face1.png";
            p2Score = 0;
            rollDice.textContent = "P1 Roll Dice";
        }
        p2TS.textContent = p2Score;
        p2CurrentRoll++;
        p2TR.textContent = p2CurrentRoll;
        if (p2CurrentRollValue == 2) {
            diceImage.src = "images/face2.png";
        } else if (p2CurrentRollValue == 3) {
            diceImage.src = "images/face3.png";
        } else if (p2CurrentRollValue == 4) {
            diceImage.src = "images/face4.png";
        } else if (p2CurrentRollValue == 5) {
            diceImage.src = "images/face5.png";
        } else if (p2CurrentRollValue == 6) {
            diceImage.src = "images/face6.png";
        } 
        if (p2Score >= 20) {
            winner.textContent = "Player 2 Wins";
            hold.style.display = "none";
            rollDice.style.display = "none";
            diceImage.src = "";
        }
    }
});