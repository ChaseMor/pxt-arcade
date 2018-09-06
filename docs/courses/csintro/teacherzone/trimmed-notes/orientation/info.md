# Activity: Info Category Variable Properties

### ~hint

This section dips slightly into a topic that will be covered at length later in the course - events and event handling. This section uses the ``||controller:on any button pressed||`` event block. This is simply a small introduction to the topic - if any students get particularly caught up on the subject, it's likely best to table it for now and tell them that it will be returned to later in the course in greater detail.

### ~

In this activity students will:

* use the ``||info:score||`` and ``||info:life||`` variables
* combine numeric values with math operators (\*)
* identify the benefits of using ``||info:score||`` and ``||info:life||`` over other options
* use the ``||info:countdown||`` block to put a time limit on a game
* use the ``||loops:pause||`` block to wait a set amount of time

## Concept: Using ``||info:score||`` to keep track of button presses

## Example: Counting button presses

## Student Task 1: 10 second button smash

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.startCountdown(10)
```

## Concept: Using ``||info:life||``
## Example: changing ``||info:life||`` totals

## Student Task 2: Touch the button 15 times

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
})
info.setLife(15)
info.startCountdown(2)
```
### Simplify Blocks chained together with JavaScript

## Student Task 3: Estimate rate of presses
### Overview

Standard Solution:
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let minuteScore = 0
let mySprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d d d d d d . . . . . 
. . . . d d d d d d d d . . . . 
. . . . d d f d d f d d . . . . 
. . . . d d d d d d d d . . . . 
. . . . d d f d d f d d . . . . 
. . . . d d d f f d d d . . . . 
. . . . . d d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(25, 60)
game.splash("Press buttons for 6 seconds!")
pause(6000)
minuteScore = 10 * info.score()
mySprite.say("Press/minute= " + minuteScore)
```

Challenge Solution:
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let hiMinuteScore = 0
let lowMinuteScore = 0
let mySprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d d d d d d . . . . . 
. . . . d d d d d d d d . . . . 
. . . . d d f d d f d d . . . . 
. . . . d d d d d d d d . . . . 
. . . . d d f d d f d d . . . . 
. . . . d d d f f d d d . . . . 
. . . . . d d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(25, 60)
game.splash("Press buttons for 6 seconds!")
pause(6000)
lowMinuteScore = 10 * (info.score() - 1)
hiMinuteScore = 10 * (info.score() + 1)
mySprite.say("minute " + ("" + lowMinuteScore + ("-" + hiMinuteScore)))
```

## What did we learn? 
1. List one extra behavior you get for each of the three values we used in the ``||info:info||`` category (``||info:score||``, ``||info:lives||``, and ``||info:countdown||``).
2. List one potential downside of using ``||info:score||`` over just using your own variables to keep track of the state of your game.

### ~hint

What would you do if you needed to keep track of the number of coins the player has earned, the number of keys they have collected, and the number of chicken legs they have to eat. Would using ``||info:score||`` be helpful in storing all these values?

### ~

### ~hint

### Possible Solutions:

1. The value of it is shown on the screen by default. There are built in events for when they reach certain values
2. May have to add in events to prevent the game from ending when the countdown reaches 0 or lives run out

### ~

### Task rubrics

| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Button Presses | Completed Task 1 | Completed Task 2 | Completed Task 3 | Completed the **challenge code** in Task 3 |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 1 question fully or answered both questions but parts are unclear or lack detail | Explanations address all three parts of question 1 fully | all answers have clear explanations |  has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 
