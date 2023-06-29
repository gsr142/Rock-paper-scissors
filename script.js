var computerOptions = "RPS"




var userInput = prompt("Choose R, P, or S");
userInput = userInput.toUpperCase();


function compare (userInput, compChoice()){
  if (userInput === compChoice()){
    alert("Tie");
  }
  else if (userInput == "R" && compChoice() == "P"){
    alert("You lose");
  }
  else if (userInput == "R" && compChoice() == "S"){
    alert("You won")
  }
  else if (userInput == "P" && compChoice() == "S"){
    alert("You lose");
  }
  else if (userInput == "P" && compChoice() == "R"){
    alert("You won")
  }
  else if (userInput == "S" && compChoice() == "R"){
    alert("You lose");
  }
  else if (userInput == "S" && compChoice() == "P"){
    alert("You won")
  }
}

function compChoice()() {
  var computerChoice = computerOptions.charAt(Math.floor(Math.random() * computerOptions.length));
  compare();
  return computerChoice;
}  

compChoice()();
//compare();