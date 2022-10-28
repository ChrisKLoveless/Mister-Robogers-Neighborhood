Testing:

Describe: numSwap(num);

Test: "It should replace the number 3 with 'Won't you be my neighbor?'"
Code: numSwap('3');
Expected Output: 'Won't you be my neighbor?'

Test: "It should replace the number 2 with 'Boop!'"
Code: numSwap('2');
Expected Output: "Boop!"

Test: "It should replace the number 1 with 'Beep!'"
Code: numSwap('1')
Expected Output: "Beep!"

Describe: translateToRobogers(num);

Test: "It should return an array of numbers from 0 to user input"
Code: translateToRobogers('10');
Expected Output: [0,1,2,3,4,5,6,7,8,9,10]

Test: "It should return 'No translation....that is NOT a number!' if user inputs a letter 'a'"
Code: translateToRobogers('a');
Expected output: 'No translation....that is NOT a number!'

Test: "It should return 'No translation....that is NOT a number!' if user inputs any letter"
Code: translateToRobogers('abcdefghijklmnopqrstuvwxyz');
Expected output: 'No translation....that is NOT a number!'

Test: "It should return "I'm sorry.... I cannot translate that." if user inputs a number less than 0 or greater than or equal to 999999"
Code: translateToRobogers(-1, 999999);
Expected output: 'I'm sorry.... I cannot translate that.'