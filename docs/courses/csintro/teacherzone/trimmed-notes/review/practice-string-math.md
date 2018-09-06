# Practice 1: New Food Idea

https://makecode.com/_Lf1HKPCxuXLe

```blocks
let sandwichName = ""
let favFood2 = ""
let favFood1 = ""
favFood1 = game.askForString("What's your favorite food?")
favFood2 = game.askForString("What's another favorite food?")
sandwichName = "" + favFood1 + favFood2
game.splash("You should try making a ", sandwichName + " sandwich!")
```

# Practice 2: Phone Numbers

https://makecode.com/_ch5JFdeUwAci

```blocks
let lineNumberSentence = ""
let officeNumberSentence = ""
let areaCodeSentence = ""
let lineNumber = ""
let officeNumber = ""
let areaCode = ""
let wholeNumber = ""
wholeNumber = game.askForString("\"Give me a US phone number please! (Ex: 555-555-5555) but no dashes\"")
areaCode = wholeNumber.substr(0, 3)
officeNumber = wholeNumber.substr(3, 3)
lineNumber = wholeNumber.substr(6, 4)
areaCodeSentence = "The area code is " + areaCode
officeNumberSentence = "The office number is " + officeNumber
lineNumberSentence = "The line number is " + lineNumber
game.splash("" + areaCodeSentence + "!!")
game.splash("" + lineNumberSentence + "!!")
game.splash("" + officeNumberSentence + "!!")
```

