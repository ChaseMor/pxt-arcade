# Activity: Projectile Project

Example Projects

https://makecode.com/_EW28qDiCFLXw 

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Ped,
    Safe
}
let item: Sprite = null
let ped: Sprite = null
let projectile: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Ped, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.say("ow!", 1000)
    otherSprite.say("beep beep", 500)
    sprite.image.flipY()
})
sprites.onOverlap(SpriteKind.Safe, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("My Car!", 1000)
})
scene.setBackgroundColor(1)
ped = sprites.create(img`
. . . . . . c c c . . . . . . . 
. . . . c c c c c . . . . . . . 
. . . . . . f 4 4 . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 9 . . . . . . . . 
. . . . . 9 9 9 9 9 . . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . 
. 8 8 9 . . 9 9 9 . 9 9 . . . . 
. 8 8 . . . 9 9 9 . . 9 . . . . 
. . . . . . 9 9 9 . . 9 . . . . 
. . . . . b b b b . 8 8 . . . . 
. . . b b b . . b . 8 8 . . . . 
. . . b . . . . b b . . . . . . 
f . . b . . . . . b b b . . . . 
. . f f . . . . . . f f . . . . 
`, SpriteKind.Ped)
ped.y = 110
ped.x = 40
info.startCountdown(15)
game.onUpdateInterval(3000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . 2 . 2 . . . . . . . . . . . . . 2 . 2 2 . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . 2 . . . 2 2 . . 
. . . . . . 2 . . . 2 . . . . . . . . . . . . . 2 . . . . . 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 
2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 2 
2 2 2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 
. . . . f f f . . . . . . . . . . . . . . . . . . . . . f f f . 
. . . . . f . . . . . . . . . . . . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, -24, 0, SpriteKind.Enemy, item)
    projectile.y += Math.randomRange(-5, 5)
})
game.onUpdate(function () {
    ped.y += controller.dy(25)
})
```

## [Extinguisher](https://makecode.com/_PMPcw19LtWyq)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Water
}
let hose: Sprite = null
let projectile: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 9 9 8 8 8 8 8 8 8 . . . 
. . 8 8 8 9 9 8 8 8 8 8 8 . . . 
. . . 8 8 9 9 9 9 9 8 8 . . . . 
. . . . 8 8 9 9 9 9 8 8 . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
`, 50, 0, SpriteKind.Water, hose)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    hose.y += -10
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Water, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    hose.y += 10
})
scene.setBackgroundColor(1)
hose = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f 2 2 . . . f f . . . 
. . . . 2 2 2 2 2 2 . f f f . . 
. . . . 2 2 2 2 2 2 . . f f f f 
. . . . 2 1 1 1 1 2 . . . f f f 
. . . . 2 1 1 1 1 2 . . . . . . 
. . . . 2 1 1 1 1 2 . . . . . . 
. . . . 2 1 1 1 1 2 . . . . . . 
. . . . 2 1 1 1 1 2 . . . . . . 
. . . . 2 1 1 1 1 2 . . . . . . 
. . . . 2 1 1 1 1 2 . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
`, SpriteKind.Player)
hose.x = 8
info.setScore(0)
info.startCountdown(60)
game.onUpdate(function () {
    
})
game.onUpdateInterval(1500, function () {
    sprite = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . 2 4 2 2 . . . . . . . 
. . . . . 2 4 4 2 2 . . . . . . 
. . . . 2 4 5 4 2 2 2 . . . . . 
. . . . 2 4 5 5 4 2 2 2 . . . . 
. . . 2 4 4 5 5 4 4 2 2 . . . . 
. . 2 2 4 4 5 5 4 4 4 2 . . . . 
. 2 2 2 4 5 5 5 5 4 4 2 2 2 . . 
2 2 2 2 4 5 5 5 5 4 4 4 2 2 2 . 
2 2 4 4 4 5 5 5 5 5 4 4 2 2 2 . 
2 2 2 4 4 5 5 5 5 5 4 4 2 2 2 2 
2 2 4 4 4 4 4 4 4 4 4 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -10, 0, SpriteKind.Enemy)
    sprite.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
})
```

## Student Task #1:

## What did we learn? 

1. What did you learn making a MVP version of the game? What was useful and what was difficult?
2. Were items in the list of elements of a game to use in the game were not used? Why? If all were used explain which ones were essential to the game versus less essential elements of a game.

### ~hint

### Possible Answers

Answers **Vary Widely**

1. Projectiles can be made easily. Projectiles are better with random placement and/or velocity. Say speech bubbles sometimes get in the way of games.
2. Didn't have a projectile emit from a sprite - takes time to make it look good. Didn't use Ghost since I wanted the overlaps. The basic projectile is very useful in making the game dynamic - especially when used with random....

### ~