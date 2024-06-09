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

function playGame(humanSelection){


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


    let tempHuman, tempComp;


    tempHuman = humanSelection;
    tempComp = getComputerChoice();

    if (tempHuman === tempComp){
        alert("Human and Computer selections are the same. Apologies, please re-select your choice.")
        return;
    }
      
    const humanChoice = tempHuman;
    const computerChoice = tempComp;

    playRound(humanChoice, computerChoice);

    

    const choiceContainer = document.querySelector("#choice");
    const hC = document.createElement("p1");
    const cC = document.createElement("p1");

    
    hC.textContent = "You chose " + humanChoice;
    
    cC.textContent = "Computer chose " + computerChoice;
    
    choiceContainer.appendChild(hC);
    choiceContainer.appendChild(document.createElement("br"));
    choiceContainer.appendChild(cC);
    choiceContainer.appendChild(document.createElement("br"));


    const hScore = document.createElement("p1");
    const cScore = document.createElement("p1");

    if (k == 1){

        hScore.textContent = "Your score after " + k +  " round: " + humanScore;
        cScore.textContent = "Computer score after " + k +  " round: " + computerScore;

    }
    else{

        hScore.textContent = "Your score after " + k +  " rounds: " + humanScore;
        cScore.textContent = "Computer score after " + k +  " rounds: " + computerScore;

    }


    choiceContainer.appendChild(hScore);
    choiceContainer.appendChild(document.createElement("br"));
    choiceContainer.appendChild(cScore);
    choiceContainer.appendChild(document.createElement("br"));
    choiceContainer.appendChild(document.createElement("br"));
    

    k++;
    
    if (humanScore == 500){ 
    
        const container = document.querySelector("#winner");
        const humanWinner = document.createElement("h1");
        humanWinner.textContent = "You win! Congratulations! To play again, refresh the page!";

        container.appendChild(humanWinner);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        return;

    }

    if (computerScore == 500){ 

        const container = document.querySelector("#winner");
        const compWinner = document.createElement("h1");
        compWinner.textContent = "Computer wins! Congratulations! To play again, refresh the page!";

        container.appendChild(compWinner);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        return;
    } 

}      


rock.addEventListener("click", function(e){
    let humanSelection = "Rock";
    playGame(humanSelection);
});

paper.addEventListener("click", function(e){
    let humanSelection = "Paper";
    playGame(humanSelection);
});

scissors.addEventListener("click", function(e){
    let humanSelection = "Scissors";
    playGame(humanSelection);
});

let humanScore = 0;

let computerScore = 0;

let k = 1;
