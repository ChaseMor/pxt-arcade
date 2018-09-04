# Activity: Final Project

## Example Games:

### Pizza Space

https://makecode.com/_e17ArKAL6548

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Star,
    Asteroid,
    Laser
}
let enemy: Sprite = null
let projectile: Sprite = null
let asteroid: Sprite = null
let star: Sprite = null
let player: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 40, player.vy / 5, SpriteKind.Laser, player)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(4)
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . c b . . . . . . . . . . . . 
. . a b c c c . . . . . . . . . 
. . a b b f c 9 . . . . . . . . 
. . c c f d d d f . . . . . . . 
. . c c f d d d f . . . . . . . 
. . a b b f c 9 . . . . . . . . 
. . a b c c c . . . . . . . . . 
. . c b . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 25, 75)
player.x = 15
player.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(200, function () {
    star = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-60, -40), 0, SpriteKind.Star)
    star.y = Math.randomRange(0, scene.screenHeight())
    star.setFlag(SpriteFlag.Ghost, true)
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (player.y < value.y) {
            value.vy = Math.randomRange(-10, 0)
        } else {
            value.vy = Math.randomRange(0, 10)
        }
    }
})
game.onUpdateInterval(1000, function () {
    asteroid = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . a b a a . . . . . . 
. . . . . c b a f c a c . . . . 
. . . . c b b b f f a c c . . . 
. . . . b b f a b b a a c . . . 
. . . . c b f f b a f c a . . . 
. . . . . c a a c b b a . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, -30), 0, SpriteKind.Asteroid)
    asteroid.y = Math.randomRange(0, scene.screenHeight())
})
game.onUpdateInterval(2000, function () {
    enemy = sprites.createProjectile(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, Math.randomRange(-40, -40), 0, SpriteKind.Enemy)
    enemy.y = Math.randomRange(0, scene.screenHeight())
})
```

## Topics introduced by each section:

### Sprites
* Sprites
* Say/Splash
* Controller
* User Input

### Motion
* Velocity
* Projectiles
* Overlaps events
* On Create/On Destroy Events

### Loops
* Repeat loops
* For index loops

### Functions
* Functions
* Extensions

### Tilemaps
* Walls/Obstacles

### Logic
* If and else
* Boolean flags
* While loops
* And/Or

### Arrays
* Arrays in general
* Number Arrays
* Sprite Arrays
* Tile Arrays