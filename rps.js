let playerScore=0
let compScore=0

function getWinner() {
    if (playerScore==5) {
        //alert("Player wins!")
        document.getElementById('result').innerHTML="Player wins!"
        document.getElementById("winlink").innerHTML="Game unlocked!"
    }

    else if (compScore==5) {
        //alert("Computer wins!")
        document.getElementById('result').innerHTML="Computer wins!"
}
}

function getComputerChoice() {
    
    let choices= ['Rock', 'Paper', 'Scissors']
    let result= choices[Math.floor(Math.random()*choices.length)];
    return (result)
}

function chooseRock() {
if (playerScore<5 && compScore<5){
   playerChoice= document.getElementById  ("rock").innerHTML
    console.log(playerChoice)
    return (playerChoice, playRound())
}
    else {getWinner()}
}


function choosePaper() {
    if (playerScore<5 && compScore<5){
        playerChoice= document.getElementById  ("paper").innerHTML
         console.log(playerChoice)
         return (playerChoice, playRound())
     }
         else {getWinner()}
 }

 function chooseScissors() {
    if (playerScore<5 && compScore<5){
        playerChoice= document.getElementById  ("scissors").innerHTML
         console.log(playerChoice)
         return (playerChoice, playRound())
     }
         else {getWinner()}
 }


function playRound() {
    let computerChoice= getComputerChoice()
console.log("Player: " + playerChoice + " " + "Computer: " + computerChoice)

        if (playerChoice==="Rock" && computerChoice==="Rock") {
                //alert("Tie!")
                document.getElementById('result').innerHTML="Tie!"
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
            }

            else if (playerChoice==="Rock" && computerChoice==="Paper") {
                //alert("Paper beats Rock, you lose!")
                document.getElementById('result').innerHTML="Paper beats rock, you lose!"
                compScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                updateScoreboard()
                getWinner()
            }

            else if (playerChoice==="Rock" && computerChoice==="Scissors") {
                //alert("Rock beats Scissors, you win!")
                document.getElementById('result').innerHTML="Rock beats scissors, you win!"
                playerScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                updateScoreboard()
                getWinner()
            }

            else if (playerChoice==="Paper" && computerChoice==="Paper") {
                //alert("Tie!")
                document.getElementById('result').innerHTML="Tie!"
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
            }

            else if (playerChoice==="Paper" && computerChoice==="Rock") {
                //alert("Paper beats Rock, you win!")
                document.getElementById('result').innerHTML="Paper beats rock, you win!"
                playerScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                updateScoreboard()
                getWinner()
            }

            else if (playerChoice==="Paper" && computerChoice==="Scissors") {
                //alert("Scissors beats Paper, you lose!")
                document.getElementById('result').innerHTML="Scissors beats paper, you lose!"
                compScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                updateScoreboard()
                getWinner()
            }

            else if (playerChoice==="Scissors" && computerChoice==="Scissors") {
                //alert("Tie!")
                document.getElementById('result').innerHTML="Tie!"
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
            }

            else if (playerChoice==="Scissors" && computerChoice==="Rock") {
                //alert("Rock beats Scissors, you lose!")
                document.getElementById('result').innerHTML="Rock beats scissors, you lose!"
                compScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                updateScoreboard()
                getWinner()
            }

            else if (playerChoice==="Scissors" && computerChoice==="Paper") {
                //alert("Scissors beats Paper, you win!")
                document.getElementById('result').innerHTML="Scissors beats paper, you win!"
                playerScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                updateScoreboard()
                getWinner()
            }

            else if(playerChoice===null || playerChoice===""){
                alert("You must choose one.")
            }

            else{
                alert("You must choose one.")
            }
        }

function updateScoreboard() {
    (document.getElementById('Computer_Score').innerHTML = compScore);
    (document.getElementById("Player_Score").innerHTML = playerScore);
    Computer_Score = compScore;
    Player_Score = playerScore;
}