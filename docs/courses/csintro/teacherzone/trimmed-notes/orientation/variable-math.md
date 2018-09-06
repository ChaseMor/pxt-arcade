# Activity: Math Operators with Variables 

In this activity student will:

* combine numeric values with math operators (+, -, \*, /)
* store the result of an equation in a variable 
* evaluate equations using variables
* modify and create variable equations
* display text with ``||game:splash||`` by using ``||text:join||``
* differentiate between number and string data types

## Concept: Assign Number Variables and displaying numeric values

## Concept: Using Math Operators with Variables

## Example: math equation in a variable

### ~hint

## Discuss with students

The join block is used to **coerce** a number into a string JavaScript needs to have strings for "splash" or "show long text" so we use join in this case. Then splash knows that we are displaying the string representation of our `answer` variable.

If only displaying a number we use an empty string in the join 

### ~

```blocks
let answer = 0
answer = 3 + 5
game.splash("" + answer)
```

### ~hint

**coercion**: changing Type within an operation (e.g. - string to number for a comparison will compare the number value of the string `"3"` in `3 >= "3"` or number to string using join in the splash message example above)

### ~

## Student Task 1: Try new values in the equation 

https://makecode.com/_h6vfmy28s34T

### ~

https://makecode.com/_VaeKM9dowVam

## Concept: basic math operators with variables 

### Operators 

## Example:

## Student Task 2: basic math operators with variables

### ~hint

## Tell students

Look at the JavaScript. Parenthesis `( )` are first in order of Operations. With Multiple operators **Blocks often create parenthesis**, always check the JavaScript to see if that is what you intended.
![animation: Parenthesis in math code](/static/courses/csintro1/orientation/parenthesis-math.gif)

### ~

https://makecode.com/_Euh8RJRuzhsf

## Student Task 3: multiple operators and variables equation

### Standard:

https://makecode.com/_eC9Cwk3uXiCr

### Challenge:

https://makecode.com/_WyA12wV0K74p

## Student Task 4: Conversion

https://makecode.com/_A3PHiyg9rTD6

## Student Task 5: Debugging

https://makecode.com/_dm7i6WUHdKsh

## Variables Summary

## What did we learn? 

1. In MakeCode JavaScript what is the resulting value of answer for `answer = 5 + 3 * 2`? Explain why the answer is **not** 16.
2. How is putting operators and numbers into a calculator different than writing in code (example: 2 + 3 + 4 * 4)? Explain.
3. Research and describe 2 other Math Operators using the math menu in MakeCode (hover over values for more information) and/or use other JavaScript resources.

## Rubrics

### ~hint

### Possible Solutions:

1. The answer is 11 because JavaScript goes based off of the order of operations (PEMDAS) so it completes the multiplication operation first, which turns the expression into 5 + 6 which evaluates to 11
2. JavaScript will use the order of operations while standard calculators, not graphing or scientific, will calculate one operation at a time from left to right
3. Students answers will vary

###

### Code Tasks

| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Variable Math Tasks | Completed at least 4 coding tasks | Completed all 5 coding tasks |All coding tasks completed plus at least 1 Challenge | Completed 2 or more Challenges |

### Score = \_\_\_\_\_\_ /10 

### What did we learn Questions

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 2 questions fully, or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | Uses multiple examples and clear explanations | Explanations are outstanding in detail and/or use creative examples |
### Score = \_\_\_\_\_\_ /10




## Task Solution Appendix

### Task 1: Try new values in the equation 

```ts
let answer = 0
answer = 9 + 2
game.splash("9 + 2 = " + answer)
answer = 17 + 12 
game.splash("17+12 = " + answer)
answer = 17 + 12 
game.splash("21+22 = " + answer)
```
```ts
let answer = 0
answer = 13 + 9 + 1 + 0 + 18 + 5
game.splash("13+9+1+0+18+5=" + answer)
/* longer equation */
answer = 13 + 9 + 1 + 0 + 18 + 5 + 19 + 4 + 7
game.showLongText("13 + 9 + 1 + 0 + 18 + 5 + 19 + 4 + 7 = " + answer, DialogLayout.Bottom)
```

### Task 2: Basic math operators with variables

```ts
let answer = 0
let firstNumber = 0
let secondNumber = 0
let thirdNumber = 0
firstNumber = 15
secondNumber = 5
thirdNumber = 3
answer = firstNumber + secondNumber * thirdNumber
game.splash("15 + 5 * 3 = " + answer)
answer = firstNumber * secondNumber + thirdNumber
game.splash("15 * 5 + 3 = " + answer)
```

### Task 3:multiple operators and variables equation

#### Standard:

```ts
let answer = 0
let firstNum = 0
let secondNum = 0
let thirdNum = 0
let fourthNum = 0
firstNum = 15
secondNum = 5
thirdNum = 9
fourthNum = 6
answer = firstNum * secondNum + thirdNum / fourthNum
game.splash("15 * 5 + 9 / 6 = " + answer)
```

#### Challenge:

```ts
let answer = 0
let fifthNum = 0
let fourthNum = 0
let thirdNum = 0
let secondNum = 0
let firstNum = 0
firstNum = 15
secondNum = 5
thirdNum = 9
fourthNum = 6
fifthNum = 10
answer = firstNum * secondNum + thirdNum / fourthNum - fifthNum
game.splash("15*5+9/6-10 = " + answer)
```

### Task 4: Conversion

```ts
let tempF = 0
let tempC = 0
tempC = 22
tempF = tempC * (9 / 5) + 32
game.splash("" + tempC + " C", "Fahrenheit " + tempF)
tempF = 75
// Challenge
tempC = (tempF - 32) * (5 / 9)
game.splash("" + tempF + " F", "Celsius " + tempC)
```

## Student Task 5: Debugging

1. Use ``||text:join||`` to show sprite

```ts
let c = 0
let b = 0
let a = 0
a = 3
b = a + 5
c = (a + 2) * b
game.splash("" + c)
```

2. Fix the output

```ts
let c = 0
let b = 0
let a = 0
a = 3
b = a + 5
c = a + (2 * b)
game.splash("" + c)
```

## Variables Summary

## What did we learn? 

1. In MakeCode JavaScript what is the resulting value of answer for `answer = 5 + 3 * 2`? Explain why the answer is **not** 16.
2. How is putting operators and numbers into a calculator different than writing in code (example: 2 + 3 + 4 * 4)? Explain.
3. Research and describe 2 other Math Operators using the math menu in MakeCode (hover over values for more information) and/or use other JavaScript resources.

## Rubrics

### ~hint

### Possible Solutions:

1. The answer is 11 because JavaScript goes based off of the order of operations (PEMDAS) so it completes the multiplication operation first, which turns the expression into 5 + 6 which evaluates to 11
2. JavaScript will use the order of operations while standard calculators, not graphing or scientific, will calculate one operation at a time from left to right
3. Students answers will vary

###

### Code Tasks

| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Variable Math Tasks | Completed at least 4 coding tasks | Completed all 5 coding tasks |All coding tasks completed plus at least 1 Challenge | Completed 2 or more Challenges |

### Score = \_\_\_\_\_\_ /10 

### What did we learn Questions

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 2 questions fully, or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | Uses multiple examples and clear explanations | Explanations are outstanding in detail and/or use creative examples |
### Score = \_\_\_\_\_\_ /10 