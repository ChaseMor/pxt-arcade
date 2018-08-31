# Activity: Functions Project

Example Projects

## [Jumper](https://makecode.com/_g6f2udLhCWaL)


## [Dodger](https://makecode.com/_51vAwshDXEJb)

## What did we learn? 

1. Describe a feature of this game that you would like to expand and ideas for improved implementation.
2. List the names of the functions you used. Describe for each function name, why it has a good descriptive name and/or how the function name could be improved.

### ~hint

### Possible Answers

Answers **Vary Widely** and are unique to individuals and the games they make.

1. [Instructor: encourage students to think outside the box]  I would like to have my sprite work in 3-D with virtual reality.
2. "setSprites" function is a good name because it says exactly what it does - it "sets the sprites."  "scoring" function is an OK name but could call it "scoringEvents" as an improvement.

### ~



## Task Solution Appendix

### Jumper

```ts
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let projectile: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
function jump() {
    mySprite.y += -30
    pause(600)
    mySprite.y += 30
}
game.splash("Press A to jump")
mySprite = sprites.create(img`
. . . . . . 1 1 1 1 . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
1 1 1 1 . . . 1 1 . . . 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 . 1 1 1 1 1 1 1 1 . 1 1 1 
. 1 1 . . . 1 1 1 1 . . . 1 1 . 
. 1 1 1 . . . . . . . . 1 1 1 . 
. . 1 1 1 . . . . . . 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(32, scene.screenHeight() - 8)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 . . . . . . 
`, -100, 0, SpriteKind.Enemy)
    projectile.y = scene.screenHeight() - 8
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
```

### Dodger

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let level = 0
let mySprite: Sprite = null
function levelStart() {
    game.splash("Level " + level)
    info.setScore(level)
    info.startCountdown(10)
    for (let i = 0; i < level * 8; i++) {
        projectile = sprites.createProjectile(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 . . . . . . 
`, -100, 0, SpriteKind.Enemy)
        projectile.y = Math.randomRange(0, scene.screenHeight())
        pause(1000 / level)
    }
}
info.onCountdownEnd(function () {
    level += 1
    levelStart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . 1 1 1 1 . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
. 1 1 1 . . . 1 1 . . . 1 1 1 . 
1 1 1 1 . . . 1 1 . . . 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 . 1 1 1 1 1 1 1 1 . 1 1 1 
. 1 1 . . . 1 1 1 1 . . . 1 1 . 
. 1 1 1 . . . . . . . . 1 1 1 . 
. . 1 1 1 . . . . . . 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
level = 1
levelStart()
```
