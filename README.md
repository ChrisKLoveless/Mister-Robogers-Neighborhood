# Mister Robogers' Neighborhood

#### By _**Chris Loveless**_

#### A website to translate a number Mister Roboger' language

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Bootstrap_

## Description

This is an independent project made to demonstrate proficiency in JavaScript logic, arrays, and looping. It can take user input of anumber and return a robotic translation. 

## Setup/Installation Requirements

1. Access project through github repository (github.com/ChrisKLoveless)
2. Clone repository 
3. Open index.html file in browser

## Known Bugs
* Form is not submitting properly
* Reset button is not functional
* User output is not displayed 

## Testing:

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

Test: "It should add function of numSwap to last branch and return the array"
Code: translateToRobogers(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

## MIT License
Copyright (c) 2022 Chris Loveless

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.