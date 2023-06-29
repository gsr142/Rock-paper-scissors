var computerOptions = "RPS"

function rps() {
  for (let i = 0; i < 1; i++ ) {
    var computerChoice = computerOptions.charAt(Math.floor(Math.random() * computerOptions.length));
    console.log(computerChoice);
  }
}

rps()