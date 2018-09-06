// https://makecode.com/_Lyq0TraEsT4c

enum SpriteKind {
    Player,
    Enemy,
    Laser
}
let projectile: Sprite = null
let sprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . 2 . . . . 
. . . 2 . . . . 
. . . 2 . . . . 
. . . 2 . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, 0, -40, SpriteKind.Laser, sprite)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let item = 0
item = null
sprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 2 2 . . . 
9 9 9 9 9 9 9 9 
9 8 8 8 8 8 8 9 
9 9 9 9 9 9 9 9 
. . . . . . . . 
`, SpriteKind.Player)
sprite.y = 110
info.startCountdown(25)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . d d d . . . 
. d e d e d d . 
. e b d d d e d 
e d d b d d d d 
e e d d d d b d 
. e d d b d d d 
. e e e d e e e 
. . . e e e . . 
`, 0, 25, SpriteKind.Enemy, null)
    projectile.x = Math.randomRange(5, 155)
})
game.onUpdateInterval(500, function () {
    console.log("" + info.score())
})
game.onUpdate(function () {
    sprite.x += controller.dx()
    sprite.x += controller.dy()
    if (sprite.x < 5) {
        sprite.x = 5
    } else if (sprite.x > 155) {
        sprite.x = 155
    }
})
