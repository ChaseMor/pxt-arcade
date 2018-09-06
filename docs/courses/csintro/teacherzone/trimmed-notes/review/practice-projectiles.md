# Practice 1: Shooting Stars

1. On every 500 ms game update, make a new projectile with a star sprite. 
2. Run it! The stars should come from all 4 corners and have random speeds.

https://makecode.com/_bwPVCD6DHCr4

```block
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . 5 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 . 5 5 5 5 5 . . . 
. . . 5 5 5 . . . . 5 5 5 . . . 
. . 5 5 5 . . . . . . 5 5 5 . . 
. . 5 5 . . . . . . . . 5 5 . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKind.Player)
})
```

# Practice 2: Plants vs Blocks

1. Make a sprite of some plant or flower.
2. On up button press, make a projectile (any sprite) whose vx (horizontal velocity) is 0, but vy (vertical velocity) is -50. 
3. On each of the remaining arrow key button presses (down, left, and right) make a projectile start from the plant in the center of our screen and shoot it in the direction of the arrow key pressed. 
4. Add a timer so the game last 30 seconds

https://makecode.com/_Af2Uy9P0E3ao

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let sprite: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, -50, 0, SpriteKind.Player, sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 50, 0, SpriteKind.Player, sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, 50, SpriteKind.Player, sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, -50, SpriteKind.Player, sprite)
})
sprite = sprites.create(img`
. . . 5 5 5 . . . . 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 e 5 5 5 5 5 5 . . 
. 5 5 5 5 5 e e e 5 5 5 5 5 . . 
. 5 5 5 5 e e e e e 5 5 5 5 . . 
. . . 5 5 5 e e e 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 . 7 5 5 5 5 . . . . 
. . . . . . . 7 . 5 5 5 . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . 7 7 7 7 7 . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(30)
```

Challenge:
1. Make a target sprite that stays in center of a wall randomly.
2. When projectiles overlap with the target, change the score by one.

https://makecode.com/_4CWHDUAEzWUg

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Block
}
let target: Sprite = null
let projectile: Sprite = null
let side = 0
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Block, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, -50, SpriteKind.Block, sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, -50, 0, SpriteKind.Block, sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 50, 0, SpriteKind.Block, sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 0, 50, SpriteKind.Block, sprite)
})
info.setScore(0)
sprite = sprites.create(img`
. . . 5 5 5 . . . . 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 e 5 5 5 5 5 5 . . 
. 5 5 5 5 5 e e e 5 5 5 5 5 . . 
. 5 5 5 5 e e e e e 5 5 5 5 . . 
. . . 5 5 5 e e e 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 . 7 5 5 5 5 . . . . 
. . . . . . . 7 . 5 5 5 . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . 7 7 7 7 7 . . . . . . . 
`, SpriteKind.Player)
target = sprites.create(img`
. . . . . 2 2 2 2 2 . . . . . . 
. . 2 2 2 1 1 1 1 2 2 2 . . . . 
. . 2 1 1 1 1 1 1 1 1 2 2 2 . . 
. 2 1 1 2 2 2 2 2 1 1 1 1 2 2 2 
2 2 1 2 2 1 1 1 1 2 2 1 1 1 1 2 
2 1 1 2 1 2 2 2 1 1 2 2 1 1 1 2 
2 1 1 2 1 2 1 2 2 1 1 2 1 1 1 2 
2 1 1 2 1 2 1 1 2 2 1 2 2 1 1 2 
2 1 1 2 1 2 1 2 1 2 1 1 2 1 1 2 
2 1 1 2 1 2 2 1 1 2 1 1 2 1 1 2 
2 1 1 2 2 1 2 2 2 2 1 2 2 1 1 2 
2 1 1 1 2 2 1 1 1 1 2 2 1 1 1 2 
. 2 2 1 1 2 2 2 2 2 2 1 1 1 1 2 
. . 2 2 1 1 1 1 1 1 1 1 1 2 2 2 
. . . 2 2 1 1 1 1 1 1 2 2 2 . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
`, SpriteKind.Enemy)
target.setPosition(80, 8)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    side = Math.randomRange(0, 3)
    if (side == 0) {
        target.setPosition(80, 8)
    } else if (side == 1) {
        target.setPosition(152, 64)
    } else if (side == 2) {
        target.setPosition(80, 120)
    } else {
        target.setPosition(8, 64)
    }
})
```
