const prompt = require('prompt-sync')();

const check_array = ["R", "S", "P"];
const win_RSP = {
  R: "P",
  S: "R",
  P: "S"
};

while (true){
  let player1= prompt("Please enter R / S / P for Player1 or Q to quit.\n");
  player1 = player1.toUpperCase();
  if (player1 == "Q"){
    break;
  }
  else if (!check_array.includes(player1)){
    console.log("Please enter R, S, P or Q.");
    continue;
  }

  let player2 = prompt("Please enter R / S / P for Player2 or Q to quit.\n");
  player2 = player2.toUpperCase();
  if (player2 == "Q"){
    break;
  }
  else if (!check_array.includes(player2)){
    console.log("Please enter R, S, P or Q.");
    continue;
  }
  // console.log(`player1: ${player1}, player2: ${player2}, dict: ${win_RSP[player1]}`);
  isWin(player1, player2); 
}


function isWin(player1, player2){
  if (win_RSP[player1] == player2){
    console.log("Player2 Wins!");
  }
  else if (player1 == player2) {
    console.log("Draw!");
  }
  else if (win_RSP[player2] == player1){
    console.log("Player1 Wins!");
  }
}