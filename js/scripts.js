// Business Logic

function numSwap(num) {
  let stringNum = num.toString();
  if (stringNum.includes('3')) {
    return "Won't you be my neighbor?";
  }
  else if (stringNum.includes('2')) {
    return "Boop!";
  }
  else if (stringNum.includes('1')) {
    return "Beep!";
  }
  else {
    return num;
  }
}

function translateToRobogers(num) {
  let array = []
  let userNumber = num.toString();
  if (userNumber.includes("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")) {
    return "No translation....that is NOT a number!";
  }
  else if (num <= -1 || num >= 999999) {
    return "I'm sorry.... I cannot translate that.";
  }
  else {
    for (i = 0; i <= userNumber; i++) {
      array.push(numSwap(i));
      arrayString = array.toString();
    }
  }
  return arrayString;
}

// UI Logic

window.addEventListener("load", function() {
  const form = this.document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("form submitted");

    const userInput = document.getElementById("number").value;
    console.log(userInput);
    const result = translateToRobogers(parseInt(userInput));    

    document.getElementById("output").innerText = result;
 
  const reset = document.getElementById("reset-btn");
  reset.addEventListener("click", function() {
    document.location.reload();
  });
  })   
});
