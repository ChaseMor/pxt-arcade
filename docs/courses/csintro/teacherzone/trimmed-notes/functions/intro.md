# Activity: Functions

Functions are a way to group sections of code to be run together. They are regularly used when writing code both to increase the readability of code, and to allow for reuse of common actions. In Blocks, ``||functions:Functions||`` can be found under the `Advanced` section.

![finding functions in blocks](/static/courses/csintro1/functions/finding-functions.gif)

In this activity, student will be introduced to:
* Simple functions in blocks
* Calling functions by name

## Concept: Making a basic function for readability
## Example #1a: Creating Sprites
## Example #1b: Creating Sprites (with functions)
## Student Task #1a: Make your own functions

Solution: https://makecode.com/_J8ohLR9rVYqR

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Human,
    Cow,
    Asteroid
}
let mySprite: Sprite = null
function makeSprite() {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.controlSprite(mySprite, 100, 100)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
function makeMusic() {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
function gameSetup() {
    scene.setBackgroundColor(1)
    info.setScore(0)
    info.startCountdown(10)
}
makeSprite()
makeMusic()
gameSetup()
```

## Student Task #1b: Functions in Events

Solution: https://makecode.com/_4brfuqfU9dp9 (Contains Challenge)

```blocks
enum SpriteKind {
    Player,
    Princess,
    Enemy
}
let princess: Sprite = null
let player: Sprite = null
function meetPrincess() {
    player.say("Excuse me!")
    player.setPosition(80, 60)
}
function scorePoints() {
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    meetPrincess()
    pause(500)
    conversation()
})
function conversation() {
    player.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conversation()
    scorePoints()
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
player.setFlag(SpriteFlag.StayInScreen, true)
princess = sprites.create(sprites.castle.princessFront0, SpriteKind.Princess)
princess.setPosition(50, 50)
```

## What did we learn?

1. Describe how the use of functions in code can help make programming easier.
2. Does putting code into separate functions always make sense? Would it be more or less clear if we took the code from example #2, and made a function that calls the other three, so that our ``||loops:on start||`` block only had a single block inside of it?


### ~hint

### Possible Solutions

1. Using functions allows us to make our code cleaner by clearly seperating out sections of code
2. It usually doesn't make sense to have one block in a function. We want to keep all code that completes a step of the same task to be together. This way we don't have to look around to see each step of what is going on 

###

## Rubrics

### task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Function Tasks | Made three functions in task #1 | Completed all parts of task #1 | Completed task #2 | Completed challenge code |

### Score = \_\_\_\_\_\_ /10

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered one of the questions fully, or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 



## Task Solution Appendix

### Task 1a: Make your own functions

```ts
enum SpriteKind {
    Player,
    Enemy,
    Human,
    Cow,
    Asteroid
}
let mySprite: Sprite = null
function makeSprite() {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.controlSprite(mySprite, 100, 100)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
function makeMusic() {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
function gameSetup() {
    scene.setBackgroundColor(1)
    info.setScore(0)
    info.startCountdown(10)
}
makeSprite()
makeMusic()
gameSetup()
```

### Task 1b: Functions in Events

```ts
enum SpriteKind {
    Player,
    Princess,
    Enemy
}
let princess: Sprite = null
let player: Sprite = null
function meetPrincess() {
    player.say("Excuse me!")
    player.setPosition(80, 60)
}
function scorePoints() {
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    meetPrincess()
    pause(500)
    conversation()
})
function conversation() {
    player.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conversation()
    scorePoints()
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
player.setFlag(SpriteFlag.StayInScreen, true)
princess = sprites.create(sprites.castle.princessFront0, SpriteKind.Princess)
princess.setPosition(50, 50)
```