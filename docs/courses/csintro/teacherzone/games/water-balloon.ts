// https://makecode.com/_M69TU609dJs8

enum SpriteKind {
    Player,
    Enemy,
    Balloon,
    Splash
}
let projectile: Sprite = null
let yDirection = 0
let xDirection = 0
let balloon: Sprite = null
let block: Sprite = null
sprites.onOverlap(SpriteKind.Balloon, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
    for (let index = 0; index <= 50; index++) {
        xDirection = Math.randomRange(0, 100) - 50
        yDirection = Math.randomRange(0, 100) - 50
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 9 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, xDirection, yDirection, SpriteKind.Splash, sprite)
        projectile.setFlag(SpriteFlag.Ghost, true)
    }
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.vx = 40
    balloon.vy = -50
    balloon.ay = 40
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.destroy()
    balloon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Balloon)
    balloon.x += -50
})
scene.setBackgroundColor(6)
block = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 2 2 1 1 2 2 2 1 2 1 1 2 1 f 
f 1 2 1 2 1 2 1 2 1 2 2 1 2 1 f 
f 1 2 1 2 1 2 2 2 1 2 1 2 2 1 f 
f 1 2 2 1 1 2 1 2 1 2 1 1 2 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 2 2 1 1 f 
f 1 2 1 1 1 2 1 1 1 2 1 2 1 1 f 
f 1 2 1 2 1 2 2 1 1 2 2 2 1 1 f 
f 1 2 2 2 1 2 2 2 1 2 1 1 2 1 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
block.x += 50
balloon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . 8 9 8 8 9 9 8 9 8 . . . . 
. . 8 9 9 8 8 8 9 8 9 9 8 . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 9 8 8 8 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Balloon)
balloon.x += -50
