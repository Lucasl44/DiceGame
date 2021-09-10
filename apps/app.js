const rollDice = document.getElementById("rollDice");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const roll = document.getElementById("currentRoll");
const cRollValue = document.getElementById("currentRollValue");
const winner = document.getElementById("winner");
const loser = document.getElementById("loser");
const restart = document.getElementById("restart");

diceImage.style.display = "none";
winner.style.display = "none";
loser.style.display = "none";
restart.style.display = "none";


rollDice.addEventListener("click", () => {
    diceImage.style.display = "block";
    stopButton.style.display = "block";
});
restart.addEventListener("click", () => {
    location.reload();
});
let score = 0;
let currentRollValue = 0;
let currentRoll = 0;


rollDice.addEventListener("click", () => {
        currentRollValue = Math.ceil(Math.random() * 6);
        if (currentRollValue == 1){
            loser.style.display = "block";
            rollDice.style.display = "none";
            restart.style.display = "block";
            diceImage.src = "images/face1.png";
        }
        if (currentRollValue == 2) {
            diceImage.src = "images/face2.png";
        } else if (currentRollValue == 3) {
            diceImage.src = "images/face3.png";
        } else if (currentRollValue == 4) {
            diceImage.src = "images/face4.png";
        } else if (currentRollValue == 5) {
            diceImage.src = "images/face5.png";
        } else if (currentRollValue == 6) {
            diceImage.src = "images/face6.png";
        } 

        currentRoll += 1;
        score += currentRollValue;
        totalScore.textContent = score;
        roll.textContent = currentRoll;
        cRollValue.textContent = currentRollValue;
        if (score >= 20 && currentRollValue != 1) {
            winner.style.display = "block";
            rollDice.style.display = "none";
            restart.style.display = "block";
        }
});