let playerScore=0
let compScore=0

function getComputerChoice() {
    
    let choices= ['Rock', 'Paper', 'Scissors']
    let result= choices[Math.floor(Math.random()*choices.length)];
    return (result)
}

function playRound() {
    let playerChoice=prompt("Current Score- " + "Player: " + playerScore + " Computer: " + compScore + "\n" + "Select Rock, Paper, or Scissors").toLowerCase()
    let computerChoice= getComputerChoice()
console.log(playerChoice + computerChoice)
        if (playerChoice==="rock" && computerChoice==="Rock") {
                alert("Tie!")
                let winner="tie"
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                return (winner)
            }

            else if (playerChoice==="rock" && computerChoice==="Paper") {
                alert("Paper beats Rock, you lose!")
                let winner="computer"
                compScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                //updateScoreboard()
                return (winner)
            }

            else if (playerChoice==="rock" && computerChoice==="Scissors") {
                alert("Rock beats Scissors, you win!")
                let winner="player"
                playerScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                //updateScoreboard()
                return (winner)
            }

            else if (playerChoice==="paper" && computerChoice==="Paper") {
                alert("Tie!")
                let winner="tie"
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                return (winner)
            }

            else if (playerChoice==="paper" && computerChoice==="Rock") {
                alert("Paper beats Rock, you win!")
                let winner="player"
                playerScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                //updateScoreboard()
                return (winner)
            }

            else if (playerChoice==="paper" && computerChoice==="Scissors") {
                alert("Scissors beats Paper, you lose!")
                let winner="computer"
                compScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                //updateScoreboard()
                return (winner)
            }

            else if (playerChoice==="scissors" && computerChoice==="Scissors") {
                alert("Tie!")
                let winner="tie"
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                return (winner)
            }

            else if (playerChoice==="scissors" && computerChoice==="Rock") {
                alert("Rock beats Scissors, you lose!")
                let winner="computer"
                compScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                //updateScoreboard()
                return(winner)
            }

            else if (playerChoice==="scissors" && computerChoice==="Paper") {
                alert("Scissors beats Paper, you win!")
                let winner="player"
                playerScore++
                console.log("Player - " + playerScore + " " + "Computer - " + compScore)
                //updateScoreboard()
                return(winner)
            }

            else if(playerChoice===null || playerChoice===""){
                alert("You must choose one.")
                let winner="tie"
                return(winner)
            }

            else{
                alert("You must choose one.")
                let winner="tie"
                return(winner)

        }

}

function game() {
    for (let i=5; playerScore<i && compScore<i;) {
        playRound()
    }
    if (playerScore==5) {
        alert("Player wins!")
    }

    else if (compScore==5) {
        alert("Computer wins!")
}
}

/*function updateScoreboard() {
    (document.getElementById('Computer_Score').innerHTML = compScore);
    (document.getElementById("Player_Score").innerHTML = playerScore);
    Computer_Score = compScore;
    Player_Score = playerScore;
}*/