var computerOptions = "RPS"

function rps() {
    var computerChoice = computerOptions.charAt(Math.floor(Math.random() * computerOptions.length));
    console.log(computerChoice);
}


var userInput = prompt("Choose R, P, or S");

rps();

function compare (userInput,rps() ){
  if (userInput === rps() ){
    alert("Tie");
  }
  else if (userInput === "R" && rps() === "P"){
    alert("You lose");
  }
  else if (userInput === "R" && rps() === "S"){
    alert("You won")
  }
  else if (userInput === "P" && rps() === "S"){
    alert("You lose");
  }
  else if (userInput === "P" && rps() === "R"){
    alert("You won")
  }
  else if (userInput === "S" && rps() === "R"){
    alert("You lose");
  }
  else if (userInput === "S" && rps() === "P"){
    alert("You won")
  }
}