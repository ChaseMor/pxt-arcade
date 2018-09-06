# Activity: Projectile Motion


![Asteroid Shooter](/static/courses/csintro1/review/asteroid-shooter.gif)

Start with this basic game code. We will alter this by adding the basic motion concepts that we learned to make the game above.

https://makecode.com/_bWTMspA9EeF2

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 7 . . . 7 7 . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 7 . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 7 . . . . . . . 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
```



## Make the player shoot a laser from their spaceship

1. Make an event for when the player presses the ``||controller:A||`` button
2. In the event, create a projectile that fires with y-velocity of -100 and x-velocity of 0
3. Make the projectile's sprite some sort of laser that fires from the spaceship
4. Make the projectile of kind ``||sprites:Laser||``
5. Set the projectile to fire from ``||variables:mySprite||``

https://makecode.com/_VMVHao8roAcY

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Laser
}
let mySprite: Sprite = null
let projectile: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -100, SpriteKind.Laser, mySprite)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 7 . . . 7 7 . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 7 . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 7 . . . . . . . 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
```

## Add asteroids for the player to shoot at

1. Inside a ``||loops:forever||`` loop, create a projectile with the asteroid sprite
2. Give this projectile a random x-velocity between -50 and 50 and a random y-velocity between -50 and 50
3. Make the projectile of kind ``||sprites:Asteroid||``
4. ``||loops: pause||`` the game for a time that is based on the score. We want the delay between asteroid creation to decrease as the score increases. A good equation to use is `2000 - (50 * score)` ms

https://makecode.com/_6yF5W8LoueDW

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Laser,
    Asteroid
}
let projectile: Sprite = null
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -100, SpriteKind.Laser, mySprite)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 7 . . . 7 7 . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 7 . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 7 . . . . . . . 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
forever(function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKind.Asteroid)
    pause(2000 - 50 * info.score())
})
```

## Give the player a point when they shoot an asteroid

1. Add an event for when a sprite of kind ``||sprites:Laser||`` overlaps with a sprite of kind ``||sprites:Asteroid||``
2. Increase the player's score by one
3. Destroy the asteroid sprite
4. Destroy the laser sprite

https://makecode.com/_Rk7RE0eEs38z

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Laser,
    Asteroid
}
let projectile: Sprite = null
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -100, SpriteKind.Laser, mySprite)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 7 . . . 7 7 . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 7 . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 7 . . . . . . . 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
forever(function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKind.Asteroid)
    pause(2000 - 50 * info.score())
})
```

## Make the player lose a life when they hit an asteroid

1. Add an event for when a sprite of kind ``||sprites:Player||`` overlaps with a sprite of kind ``||sprites:Asteroid||``
2. Decrease the player's life by one
3. Destroy the asteroid sprite

https://makecode.com/_fm090eE737Dc

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Laser,
    Asteroid
}
let projectile: Sprite = null
let mySprite: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -100, SpriteKind.Laser, mySprite)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 7 . . . 7 7 . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 7 . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 7 . . . . . . . 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
forever(function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKind.Asteroid)
    pause(2000 - 50 * info.score())
})
```