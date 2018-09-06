# Task list:

## Sprite

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Circles
}
let circles: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += -5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += 5
})
circles = sprites.create(img`
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 3 . . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 2 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 . . 
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 2 3 . 
. 3 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 3 3 2 3 . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 3 . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Circles)
circles.say("I'm ready to play!", 1000)
circles.x = 30
circles.y = 30
circles.ay = 5
circles.ax = 2
```
## Sprite Kinds and Info
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Circles,
    Stars
}
let circles: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Circles, SpriteKind.Stars, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += 5
})
sprites.onCreated(SpriteKind.Stars, function (sprite) {
    sprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 5 1 . . . . . . . 
. . . . . 1 1 5 1 1 . . . . . . 
. . . . 1 5 5 5 5 5 1 . . . . . 
. . . . . 1 1 5 1 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    sprite.x = Math.randomRange(0, scene.screenWidth())
    sprite.y = Math.randomRange(0, scene.screenHeight())
    sprite.z = -5
    sprite.lifespan = 100
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += 5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += -5
})
circles = sprites.create(img`
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 3 . . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 2 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 . . 
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 2 3 . 
. 3 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 3 3 2 3 . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 3 . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Circles)
game.splash("Catch the Stars before time runs out!")
circles.say("I'm ready to play!", 1000)
circles.x = 30
circles.y = 30
circles.ay = 5
info.startCountdown(30)
game.onUpdateInterval(500, function () {
    sprites.createEmptySprite(SpriteKind.Stars)
})
```

## Debugging
In the following examples, identify what part of the provided code is causing the behavior to be different from the expected behavior. All of the examples are small segments of code similar to what you made above, so looking at your game might help in finding the bugs.

### Student 1: Bill

Bill decided he wanted to make a simple game where a timer counts down to 5. After making the countdown, he decides that it's not very helpful without telling the player that that is what is going to happen, so he adds in a splash screen to tell the player - unfortunately, the game now starts at some number less than 5, and occasionally is already over when he closes the splash screen. What is going wrong with this code, and how can it be fixed?
```blocks
info.startCountdown(5)
game.splash("Hello! This will count down from 5 for you!")
```
### ~hint

The countdown will still run while the splash screen is being shown; Bill should move the countdown to start *after* the splash screen (that is, swap the order of the blocks).

### ~

### Student 2: Emma

Emma decides that she does not like the Stars being destroyed when the ``||variables:circles||`` overlap them, so she removes the ``||sprite:destroy||`` block so that the ``||sprites:Stars||`` remain. However, this makes the game score behave weirdly, and no longer represent the number of stars that have been overlapped. What went wrong? (Challenge: can you fix it?)
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Circles,
    Stars
}
sprites.onOverlap(SpriteKind.Circles, SpriteKind.Stars, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
```
### ~hint

Because the game does not destroy the Stars, the circles will continue to overlap with them, and continue to add to the score as long as the Stars exist and the circles stay over them. There are two approaches students might take to fix this. One would be to destroy the old star and replace it with a new Star of a different kind. A more clear / clean approach would be to set the ``||variables:otherSprite||`` to ``||sprite:ghost on||``, so that it won't trigger collisions after the first one.

### ~

### Student 3: Sebastian

Sebastian wants to add in a splash screen that shows the score the player reached before ending the game, so he uses the ``||info:on countdown end||`` block to add in this behavior, and then end the game. This block allows you to change the behavior of the countdown ending from the normal "game over" sequence to something different.

```blocks
info.onCountdownEnd(function () {
    game.splash("")
    game.over()
})
```

Everything seems like it's working fine to start, until he tries to add in the score to the splash screen, as shown in the animation below. What is going wrong, and how can he fix it?
![Adding score to splash screen](/static/courses/csintro1/review/score-to-splash.gif)

### ~hint

The splash screen needs to have a string to display, not a number - to display a number, you need to use ``||text:join||`` to force the number to be converted to a string. Joining it with an empty string will create just the number; otherwise, it will become the number and the other string next to one another.
```blocks
info.onCountdownEnd(function () {
    game.splash("" + info.score())
    game.over()
})
```

### ~