enum SpriteKind {
    Player,
    Enemy,
    Arrow
}
let dir: number = 0
let alien: Sprite = null
let projectile: Sprite = null
let rate: number = 0
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Player, function (sprite, otherSprite) {
    game.over()
})
info.setScore(0)
scene.setBackgroundColor(11)
alien = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 2 2 f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 7 7 7 7 7 7 f . . . . 
. . . f 7 7 7 f f 7 7 7 f . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
alien.setPosition(10, 4)
alien.vx = 20
rate = 20
dir = 1
game.onUpdate(function () {
    rate = Math.sqrt(info.score()) * 3 + 20
    if (alien.x <= 6) {
        dir = 1
    } else if (alien.x >= screen.width - 6) {
        dir = -1
    }
    alien.vx = dir * rate
})

corgi.horizontalMovement()
corgi.verticalMovement()
corgi.updateSprite()

game.onUpdateInterval(50, function () {
    if (Math.percentChance(8)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . 7 5 5 e 7 e 5 5 7 . . . . 
. . . . 7 e 5 7 5 e 7 . . . . . 
. . . . . 7 5 7 5 7 . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, rate + Math.randomRange(0, 15), SpriteKind.Arrow, alien)
    }
    info.changeScoreBy(1)
})