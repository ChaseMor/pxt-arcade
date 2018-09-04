# Avoid the cars!

## Provided Starter Code:


```blocks
enum SpriteKind {
    Player,
    Enemy,
    Car
}
let agent: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    game.over()
})
agent = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 5 f f 5 5 . . . 
. 5 5 5 f f 5 5 5 f f 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
. . 5 5 5 5 f f f 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
agent.setFlag(SpriteFlag.StayInScreen, true)
agent.y += 40
controller.controlSprite(agent, 100, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {

})
```

## Student Task 1:

https://makecode.com/_AovFoTepiKvq

## Student Task 2

https://makecode.com/_0pMhRuYx4Tsd





## Task Solution Appendix

### Task 1:

```ts
enum SpriteKind {
    Player,
    Enemy,
    Car
}
let projectile: Sprite = null
let agent: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    game.over()
})
agent = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 5 f f 5 5 . . . 
. 5 5 5 f f 5 5 5 f f 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
. . 5 5 5 5 f f f 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
agent.setFlag(SpriteFlag.StayInScreen, true)
agent.y += 40
controller.controlSprite(agent, 100, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 8 8 7 7 7 8 8 7 7 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.Car)
})
```

### Task 2: 

```ts
enum SpriteKind {
    Player,
    Enemy,
    Car
}
let agent: Sprite = null
let projectile: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    game.over()
})
agent = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 5 f f 5 5 . . . 
. 5 5 5 f f 5 5 5 f f 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
. . 5 5 5 5 f f f 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
agent.setFlag(SpriteFlag.StayInScreen, true)
agent.y += 40
controller.controlSprite(agent, 100, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 8 8 7 7 7 8 8 7 7 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.Car)
    projectile.y = Math.randomRange(0, scene.screenHeight())
})
```