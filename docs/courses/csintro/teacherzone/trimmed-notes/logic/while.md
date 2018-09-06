# Activity: Logic in Loops

## Concept: While loops

## Example #1: Guessing Game

## Student Task #1: Checking Math

https://makecode.com/_7xRH8zPMg2xk

## Example #2: Fireball Game

## Student Task #2: Creating Fireballs

https://makecode.com/_WyqR4Df8uLig 

## What did we learn?

1. How are ``||loops:while||`` loops different from ``||loops:for index||`` loops?
2. Explain why picking up the ``||variables:fireSource||`` allowed the player to keep making fireballs, without any other buttons being pressed.
3. **Challenge:** if ``||logic:if||`` statements didn't exist, could you use ``||loops:while||`` loops to implement the same behavior in blocks? If so, how?

### ~hint

Possible Solutions:

1. A while loop can be based off of any logical test; a for index loop can only be used to count through numbers (in blocks).
2. The fireSource adds to the life, which keeps the while loop going longer.
3. The easiest way in blocks would be to add a boolean flag - for example, something along the lines of

### ~




## Task Solution Appendix

### Student Task #1: Checking Math

```ts
let guess = 0
let secondValue = 0
let value = 0
value = Math.randomRange(1, 5)
secondValue = Math.randomRange(1, 5)
game.splash("Answer the question!")
while (guess != value + secondValue) {
    guess = parseInt(game.askForString("What is " + value + " + " + secondValue))
}
game.splash("Correct!")
game.over(true)
```

### Student Task #2: Creating Fireballs

```ts
enum SpriteKind {
    Player,
    Enemy,
    Fireball,
    Fire,
    FireSource
}
let projectile: Sprite = null
let fireSource: Sprite = null
let mySprite: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.stopCountdown()
    while (info.life() > 0) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 4 4 4 4 f . . . . . 
. . . . f 4 4 2 4 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . f 4 4 2 2 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, 250, 0, SpriteKind.Fireball, mySprite)
        info.changeLifeBy(-1)
        info.changeScoreBy(1)
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireSource, function (sprite, otherSprite) {
    info.changeLifeBy(5)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
mySprite = sprites.create(img`
. . . . . . . f f f . . . . . . 
. . . . . . f 4 4 4 f . . . . . 
. . . . . f 4 4 4 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 4 f . . . 
. . . . f 4 4 2 2 2 4 4 4 f . . 
. . . f 4 4 2 2 2 2 2 4 4 f . . 
. . . f 4 4 2 2 2 2 2 2 4 4 f . 
. . . f 4 4 2 2 2 5 5 2 4 4 f . 
. . f 4 4 4 2 2 2 5 5 5 4 4 4 f 
. f 4 4 4 2 2 2 5 5 5 5 4 4 4 f 
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f 
f 4 4 2 2 2 2 5 5 5 5 5 5 4 4 f 
. f 4 4 4 2 2 5 5 5 5 5 5 4 f . 
. . f 4 4 4 4 4 4 4 4 4 4 4 f . 
. . . f 4 4 4 4 4 4 4 4 f f . . 
. . . . f f f f f f f f . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(15)
info.startCountdown(3)
game.onUpdateInterval(500, function () {
    fireSource = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 . . 5 . . . . . 
. . 2 . . . . 2 2 5 . . . . . . 
. . 2 . . . . 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 f 2 2 2 2 f 2 . . . . . . 
. . 2 2 f 2 2 f 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 2 f f 2 2 2 . . . . . . 
. . 2 2 f 2 2 f 2 2 . . . . . . 
. . 2 f 2 2 2 2 f 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.FireSource)
})
```

#### Challenge

```ts
let flag = true
let count = 5
while (count > 0 && flag) {
    game.splash("Hello!")
    flag = false
}
game.over(false);
```