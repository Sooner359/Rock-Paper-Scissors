let playerLives=5
let playerScore=0

function getComputerChoice() {
    let result=Math.floor(Math.random()*10)+1;
    console.log(result)
    return(result)
}

function game() {
    let choice= prompt("Choose a number between 1-10")
    let result=getComputerChoice()
    if (choice==result) {
        alert("Nice one!")
        playerScore++
        if(playerScore==3){
            alert("YOU ARE THE MASTER COMMANDER")
        }
    }
    else{
        alert("You lose!")
        playerLives--
        updateLife()
        endGame()
    }
    console.log(choice)
}

function updateLife() {
    document.getElementById("lives").innerHTML=playerLives
}

function endGame() {
    if (playerLives==0) {
        alert("game over")
        window.location.href="index.html"
    }
    else{}
}