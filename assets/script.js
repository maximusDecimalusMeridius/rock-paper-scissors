// As a user, I want to play Rock, Paper, Scissors against an automated opponent.
// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// As a user, I expect the computer to choose R, P, or S in return.
// As a user, I want the option to play again whether I win or lose.
// As a user, I want to see my total wins, ties, and losses after each round.

// Specifications
// Must use:
// alert()[Pop-up message with OK button]
// confirm()[Pop-up message with OK button and cancel]
// prompt()[text-input with OK and cancel button]
// methods to collect user input and display information to the user.

// The computer's selection must be random to ensure a fair game.
function generateChoice() {
    switch(Math.floor(Math.random() * 3)){
        case 0:
            computerChoice = "Rock";
            return("r");

        case 1:
            computerChoice = "Paper";
            return("p");

        case 2:
            computerChoice = "Scissors";
            return("s");

        default:
            alert("Oh node! Something went wrong!");    
            break;
    }
}

function whoWon(human, computer) {
    
        //Present an error and prompt user for a valid input until they enter one
    while(!validationArray.includes(human) || human === null){
        human = prompt("ERROR: Please select a VALID choice - R, P, or S to signify your choice of rock, paper, or scissors");
        // set global userInput variable to new value
        userInput = human;
    }

    switch(human){
        case ("r"):
            yourChoice = "Rock";
            break;
        case ("p"):
            yourChoice = "Paper";
            break;
        case ("s"):
            yourChoice = "Scissors";
            break;
        default:
            alert("Oh node! Something went wrong!");
    }

    if(human === computer){
        outcomeMessage = `${yourChoice} = ${computerChoice}. Tie. :|`
        return("Tie");
    } else {
        switch (computer){
            case ("r"):
                if(human === "s"){
                    outcomeMessage = "Rock crushes your scissors. You lose. :(";
                    return("Loss");
                } else if (human === "p"){
                    outcomeMessage = "Paper overshadows rock!!! Winner!"
                    return("Win!");
                }
                break;
                
            case ("p"):
                if(human === "s"){
                    outcomeMessage = "Scissors slice through paper!! You win!!"
                    return("Win!");
                } else if(human === "r") {
                    outcomeMessage = "Paper covers your rock. You lose. :(";
                    return("Loss");
                }
                break;
                    
            case ("s"):
                if(human === "p"){
                    outcomeMessage = "Your paper got cut.  You lose. :(";
                    return("Loss");
                } else if(human === "r"){
                    outcomeMessage = "Rock smashes scissors into tiny bits!! You win!!!";
                    return("Win!");
                }

            default:
                alert("Oh node! Something went wrong!");
                break;
        }
    }
}

function countIt(result) {
    switch (result){
        case ("Win!"):
            winCount++;
            break;
        case ("Tie"):
            tieCount++;
            break;
        case ("Loss"):
            lossCount++;
            break;
        default:
            break;
    }
}

function displayRecord() {
    
    alert(`
    Your choice: ${yourChoice}
    Computer choice: ${computerChoice}

    ${outcomeMessage}
    
    ============
     Scoreboard
    ============
    Wins:   ${winCount}
    Ties:   ${tieCount}
    Losses: ${lossCount}
    `
    );
}

// Variables
var userInput, computerInput;                           // Declare inputs
var yourChoice, computerChoice, outcomeMessage;         // Wordified values of selections
var winCount = 0, lossCount = 0, tieCount = 0;          // Initialize counters
var playAgain = 1;                                      // Flag tracking whether or not a player plays the game once.
const validationArray = ["r","p","s"];

// Display welcome message to user explaining the rules
// Caution, disgusting spacing to bump to multiple lines in dialog box!!!
if (confirm("Welcome to Browser RPS!  Click 'OK/Confirm' to Proceed                                   Click 'Cancel' to run away :'(")){
    
    do{
    
        // Read and store input from user
        // Generate PC choice   
        userInput = prompt("Please Select R, P, or S to signify your choice of rock, paper, or scissors");
        while(!validationArray.includes(userInput) || userInput === null){
            userInput = prompt("ERROR: Please select a VALID choice - R, P, or S to signify your choice of rock, paper, or scissors");
        }
        computerInput = generateChoice();
        
        // Compare values and count
        countIt(whoWon(userInput.toLowerCase(), computerInput));
        
        // Display scoreboard
        displayRecord();

        if(!confirm("Would you like to play again?")){
           playAgain = 0; 
        }
    } while (playAgain === 1);

}
// else {

//     // Change goodbye message if user visits the page but doesn't play a round
//     var goodbyeMessage = document.getElementById("goodbye-message");
//     var newSpan = document.createElement("span");
//     var text = document.createTextNode("even though you didn't play :P");
//     newSpan.appendChild(text);
//     goodbyeMessage.appendChild(newSpan);

// }

// Make the user message div visible when the player is finished playing
document.getElementById("user-message").style.display = "block";