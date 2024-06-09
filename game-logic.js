function getComputerChoice(){

    let value = Math.random();

    if (value <= 0.33){ return "Rock"; }

    if (value <= 0.66 && value > 0.33){ return "Paper"; }

    if (value <= 1 && value > 0.66){ return "Scissors"; }

}

function getHumanChoice(){

    let flag = false;

    while (!flag){
        let ogInput = prompt("Please enter your input (Rock, Paper, or Scissors)");

        let input = ogInput.toLowerCase();

        if (input == "rock"){ return "Rock";}
        if (input == "paper"){ return "Paper";}
        if (input == "scissors"){ return "Scissors";}

    }
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){


        if (humanChoice == "Rock"){

            if (computerChoice == "Paper"){
                computerScore += 100;
                return;
            }
            if (computerChoice == "Scissors"){
                humanScore += 100;
                return;
            }
        }

        if (humanChoice == "Paper"){

            if (computerChoice == "Rock"){
                humanScore += 100;
                return;
            }
            if (computerChoice == "Scissors"){
                computerScore += 100;
                return;
            }
        }
        
        if (humanChoice == "Scissors"){

            if (computerChoice == "Rock"){
                computerScore += 100;
                return;
            }
            if (computerChoice == "Paper"){
                humanScore += 100;
                return;
            }

        }
    }

    let k = 1;
    for (let i = 0; i < 5; i++){

        let flag2 = false;

        let tempHuman, tempComp;

        while (!flag2){

            tempHuman = getHumanChoice();
            tempComp = getComputerChoice();

            if (tempHuman != tempComp){
                flag2 = true;
                break;
            }
            alert("Human and Computer selections are the same. Apologies, please re-enter your input.")
        }

        const humanChoice = tempHuman;
        const computerChoice = tempComp;


        console.log("You chose " + humanChoice);
        console.log("Computer chose " + computerChoice);


        playRound(humanChoice, computerChoice);

        console.log("Human Score after " + k +  " round: " + humanScore);
        console.log("Computer Score after " + k +  " round: " + computerScore);
        k++;
    }

    if (humanScore > computerScore){ 
    
        console.log("You win! Congratulations!"); 
        const container = document.querySelector("#winner");
        const humanWinner = document.createElement("h1");
        humanWinner.textContent = "You win! Congratulations!";

        container.appendChild(humanWinner);

    }
    else{ 
        console.log("Computer wins! Congratulations!"); 

        const container = document.querySelector("#winner");
        const compWinner = document.createElement("h1");
        compWinner.textContent = "Computer wins! Congratulations!";

        container.appendChild(compWinner);
    } 

}      

playGame();
