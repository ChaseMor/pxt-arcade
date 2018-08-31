# Activity: Projectiles from Sprites

In this activity, students will use:
* ``||sprites:projectile - from sprite||`` sprites
* ``||sprite:on sprite destroyed||``
* ``||math:pick random||``
* ``||sprites:ghost on||``

## Concept: Projectile From Sprite


### Example #1: Throw ball 

[Throw ball](https://makecode.com/_hcy4AV871ix1)

## Student Task #1: Throw a ball at a target

### Solution:

[Throw ball at target](https://makecode.com/_dF76zsDPsgbe)

### Solution Challenge:

[Throw ball at projectile targets](https://makecode.com/_T5rX5k8ACVJw)

## Concept: Projectiles from other Projectile Sprites

## Example #2a: Cloud projectile 

Start with the following cloud moving across the screen: https://makecode.com/_UfeX3VY6CfgD

## Example #2b: Cloud projectile that emits projectile rain 

https://makecode.com/_Es5HF0VEuCiL

## Example #2c: Cloud projectile that widely emits projectile rain

https://makecode.com/_CvEVPuh35bbj

## Example #2d: count destroyed raindrops

The ghost raindrop sprites can't have an overlap event but we can use ``||sprite:on sprite destroyed||``. So we can count the raindrops that make it to the bottom of the screen by counting when they're destroyed!

https://makecode.com/_HhcT57KDxR9s


## Student Task #2: Projectile from Projectile

### ~hint

Use a loop!  Remember if creating many projectiles use ``||sprite:ghost on||`` if no overlap events are needed to increase performance.

### ~

### Solution: 

https://makecode.com/_J1T3YEJFAdFb

### Challenge Solution: 

https://makecode.com/_AckKRmR7m7Ja

## What did we learn?

1. How can we make a sprite that came from a sprite block act like a projectile sprite? Explain the block code to use.
2. Give examples of using ghost and/or on overlap events in a game to make a projectile: decoration, laser beam, coin (reward). Explain each.
3. **Challenge:** Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might make your game run faster than leaving it off.

### ~hint

Can there be overlapping another if either sprite is a ghost?

### ~

### ~hint

### Possible Answers:

1. To make a sprite act like a projectile sprite: Sprites can start on the edge of a screen like x=0, have a velocity away from the edge of the screen vx=20, we can destroy the sprite.
2. a decoration like a bubble or rain is ghost on so no overlap events. A laser beam would use a on overlap event and destroy the object it overlapped with. A coin would have an overlap event and would give a score when it overlaps with the player.
3. Challenge: Sprites use computer resources (memory, processing)- if there are a lot of them they use a lot of resources. Ghost On uses less resources since not having to check if it overlapping.

### ~




## Task Solution Appendix

### Task 1: Throw a ball at a target

```ts
enum SpriteKind {
    Player,
    Enemy,
    Target,
    Ball
}
let mySprite: Sprite = null
let ball: Sprite = null
let targetVelocity = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectile(img`
. . . . . . 7 7 
. . . . . . 7 7 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, -50, 0, SpriteKind.Ball, mySprite)
    pause(200)
})
targetVelocity = 20
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . 7 7 . . 
. . . . . . e d d e . . 7 9 . . 
. . . . . . e d d e . . 4 . . . 
. . . . . . . d d . 4 4 . . . . 
. . . . . . 4 5 5 4 4 . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . 9 4 4 . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 . 3 3 . . . . . . 
. . . . . 3 . . . 3 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . 1 1 . . . 1 1 . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(145, 60)
```

#### CHallenge

```ts
enum SpriteKind {
    Player,
    Enemy,
    Target,
    Ball
}
let mySprite: Sprite = null
let ball: Sprite = null
let target: Sprite = null
let targetVelocity = 0
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Target, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectile(img`
. . . . . . 7 7 
. . . . . . 7 7 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, -50, 0, SpriteKind.Ball, mySprite)
    pause(200)
})
targetVelocity = 20
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e . . 7 7 . . 
. . . . . . e d d e . . 7 9 . . 
. . . . . . e d d e . . 4 . . . 
. . . . . . . d d . 4 4 . . . . 
. . . . . . 4 5 5 4 4 . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . 9 4 4 . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 . 3 3 . . . . . . 
. . . . . 3 . . . 3 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . 1 1 . . . 1 1 . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 0, 100)
mySprite.setPosition(145, 60)
info.startCountdown(10)
game.onUpdateInterval(1000, function () {
    target = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 2 2 2 2 2 1 1 1 . . . 
. . 1 1 1 2 2 2 2 2 1 1 1 . . . 
. . 1 1 1 2 2 2 2 2 1 1 1 . . . 
. . 1 1 1 2 2 2 2 2 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 20, SpriteKind.Target)
    target.x = 5
})
```

### Task 2: Projectile from Projectile

```ts
enum SpriteKind {
    Player,
    Enemy,
    bubble
}
let bubble: Sprite = null
let whale: Sprite = null
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(true)
})
whale = sprites.createProjectile(img`
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
. . . . . . . . . . . . . . . . d d c d d . . . . . . . . . . . 
d . . . . . . . . . . . . . . d d d d d d d d d . . . . . . . . 
d d d d . . d d d . . . . . d d d d d d d d d d d d . . . . . . 
d d d d . . d d d d . . . d d d d d d d d d d d d d d . . . . . 
d d d d . d d d d d . . . d d d d d d d d d d d d d d d d d . . 
d d d d d d d d d . . . d d d d d d d d d d d d d d d d d d . . 
. d d d d d d d . . . . d d d d d d d d d d d d d d c c c d d . 
. . d d d d d . . . . . d d d d d d d d d d d d d d c 1 1 d d d 
. . d d d d . . . . . d d d d d d d d d d d d d d d d 1 9 d d d 
. d d d . . . . . . d d d d d d d d d d d d d d d d d d d d d d 
d d d d . . . . d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d . . . d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d 
d d d d d d d d d d d d d d d d d d d d d d d d d d f 1 1 1 1 . 
. d d d d d d d d d d d d d d d d d d d d d d d d d f f 1 1 . . 
. . d d d d d d d d d d d d d d d d d d d d d d d d d . . . . . 
`, 25, 0, SpriteKind.Player)
whale.y = 100
game.onUpdateInterval(500, function () {
    bubble = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . 9 1 9 9 . . . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -40, SpriteKind.bubble, whale)
    bubble.setFlag(SpriteFlag.Ghost, true)
})
```

#### Challenge

```ts
enum SpriteKind {
    Player,
    Enemy,
    bubble
}
let bubble: Sprite = null
let whale: Sprite = null
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(true)
})
whale = sprites.createProjectile(img`
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
. . . . . . . . . . . . . . . . d d c d d . . . . . . . . . . . 
d . . . . . . . . . . . . . . d d d d d d d d d . . . . . . . . 
d d d d . . d d d . . . . . d d d d d d d d d d d d . . . . . . 
d d d d . . d d d d . . . d d d d d d d d d d d d d d . . . . . 
d d d d . d d d d d . . . d d d d d d d d d d d d d d d d d . . 
d d d d d d d d d . . . d d d d d d d d d d d d d d d d d d . . 
. d d d d d d d . . . . d d d d d d d d d d d d d d c c c d d . 
. . d d d d d . . . . . d d d d d d d d d d d d d d c 1 1 d d d 
. . d d d d . . . . . d d d d d d d d d d d d d d d d 1 9 d d d 
. d d d . . . . . . d d d d d d d d d d d d d d d d d d d d d d 
d d d d . . . . d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d . . . d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f d 
d d d d d d d d d d d d d d d d d d d d d d d d d d f 1 1 1 1 . 
. d d d d d d d d d d d d d d d d d d d d d d d d d f f 1 1 . . 
. . d d d d d d d d d d d d d d d d d d d d d d d d d . . . . . 
`, 25, 0, SpriteKind.Player)
whale.y = 100
game.onUpdateInterval(500, function () {
    bubble = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . 9 1 9 9 . . . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-10, 35), -40, SpriteKind.bubble, whale)
    bubble.setFlag(SpriteFlag.Ghost, true)
})
```