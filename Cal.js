const prompt = require('prompt-sync')();

while (true){
  print_menu();
  let menu = prompt("Please enter the menu\n");
  
  menu = parseInt(menu);
  if (isNaN(menu)){
    console.log("Please enter the integer number.");
    continue;
  }
  else if (menu == 0) {
    break;
  }
  else if (menu < 0 || menu > 4){
    console.log("Please enter the integer number from 0 to 4.");
    continue; 
  }

  switch (menu) {
    case 1:
      let a1 = prompt("Enter A for A + B\n");
      a1 = parseInt(a1);
      if (isNaN(a1)){
        console.log("Please enter a integer number.");
      }
      let b1 = prompt("Enter B for A + B\n");
      b1 = parseInt(b1);
      if (isNaN(b1)){
        console.log("Please enter a integer number.");
      }
      console.log(`${a1} + ${b1} = ${a1+b1}`);
      break;
      
    case 2:
      let a2 = prompt("Enter A for A - B\n");
      a2 = parseInt(a2);
      if (isNaN(a2)){
        console.log("Please enter a integer number.");
      }
      let b2 = prompt("Enter B for A - B\n");
      b2 = parseInt(b2);
      if (isNaN(b2)){
        console.log("Please enter a integer number.");
      }
      console.log(`${a2} - ${b2} = ${a2-b2}`);
      break;

    case 3:
      let a3 = prompt("Enter A for A x B\n");
      a3 = parseInt(a3);
      if (isNaN(a3)){
        console.log("Please enter a integer number.");
      }
      let b3 = prompt("Enter B for A x B\n");
      b3 = parseInt(b3);
      if (isNaN(b3)){
        console.log("Please enter a integer number.");
      }
      console.log(`${a3} x ${b3} = ${a3*b3}`);
      break;

    case 4: 
    let a4 = prompt("Enter A for A / B\n");
      a4 = parseInt(a4);
      if (isNaN(a4)){
        console.log("Please enter a integer number.");
      }
      let b4 = prompt("Enter B for A / B\n");
      b4 = parseInt(b4);
      if (isNaN(b4)){
        console.log("Please enter a integer number.");
      }
      console.log(`${a4} / ${b4} = ${a4/b4}`);
      break;

  }
}

function print_menu(){
  console.log("------MENU------");
  console.log("1. Add"); 
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("0. Quit");
}