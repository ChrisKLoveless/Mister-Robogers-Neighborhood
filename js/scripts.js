function numSwap(num) {
  let stringNum = num.toString();
  if (stringNum.includes('3')) {
    return "Won't you be my neighbor?";
  } else if (stringNum.includes('2')) {
    return "Boop!";
  } else if (stringNum.includes('1')) {
    return "Beep!";
  }
}

function translateToRobogers(num) {
  let array = []
  let userNumber = num.toString();
  if (num.includes("a", "b", "c", "d", "e","f","g","h","i", "j","k","l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z")) {
    return "No translation....that is NOT a number!";
  } else {
    for (i = 0; i <= userNumber; i++) {
      array.push(i);
    }
  }
  return array;
}
