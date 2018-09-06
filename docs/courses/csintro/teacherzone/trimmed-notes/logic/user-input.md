# Activity: User Input and String Logic

## Concept: User interaction

## Example #1: Asking a question

## Student Task #1: Option for failure!

https://makecode.com/_Pkrf0s4KEK16

## Concept: Text input

## Example #2: Taking in a user name

## Student Task #2: Making a (secret?) password

### Standard Solution:

https://makecode.com/_RcxFjd30W75D

### Challenge Solution:

https://makecode.com/_RVdg9Ffkbhkd

## What did we learn?

1. In task #2, you implemented a basic "password checker." What is one possible downside of the way that the code was implemented?
2. List at least **2** ways in which user input could be used in writing a text based game.

### ~hint

Possible Solutions:

1. "The system only allows for what password, and does not care who the user is" or "If you can see the code, you can find out the password"
2. Asking whether the user should go north or south, asking for the users name, asking how much food the user wants to eat, asking for the combination to a locker, etc.

### ~



## Task Solution Appendix

### Task #1: Option for failure!

```ts
if (game.ask("Do you want to win?")) {
    game.splash("You win!")
} else {
    if (game.ask("So do you want to lose?")) {
        game.splash("You lose!")
    }
}
```

### Student Task #2: Making a (secret?) password

#### Standard Solution:

```ts
let password = ""
let input = ""
input = game.askForString("What is your name?")
game.splash("Hello " + input + "!")
password = game.askForString("What is your password?")
if (password == "Arcade") {
    game.splash("login successful")
} else {
    game.splash("login failed")
}
```

#### Challenge Solution:

```ts
let password = ""
let input = ""
input = game.askForString("What is your name?")
game.splash("Hello " + input + "!")
password = game.askForString("What is your password?")
if (password == "Arcade" || password == "*******") {
    game.splash("login successful")
} else {
    game.splash("login failed")
}
```