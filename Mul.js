const prompt = require('prompt-sync')();

while (true){

  let start_num = prompt("Please enter the start number or Q to quit.\n");
  if (start_num == "Q" || start_num == "q"){
    break;
  }

  try {
    start_num = parseInt(start_num);    
    if (isNaN(start_num)){
      throw new Error("Input is not a valid integer.");
    }
    mul(start_num);

  } catch (error) {
    console.log("Error: ", error.message);
    console.log("Please enter the integer number.")
  }
}

function mul(start_num){
  for (let i = 1; i < 10; i++){
    console.log(`${start_num} x ${i} = ${start_num * i}`);
  }
}