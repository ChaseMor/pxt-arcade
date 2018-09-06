// https://makecode.com/_WosVHahaLawu

enum SpriteKind {
    Player,
    Enemy,
    A,
    B
}
let A_spawner: Sprite = null
let B_spawner: Sprite = null
let A_button: Sprite = null
let projectile: Sprite = null
let B_button: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onDestroyed(SpriteKind.A, function (sprite) {
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.B, function (sprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.A, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
    info.changeLifeBy(1)
    music.playTone(494, music.beat(BeatFraction.Half))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.B, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
    info.changeLifeBy(1)
    music.playTone(262, music.beat(BeatFraction.Half))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-1)
    A_button.setFlag(SpriteFlag.Ghost, false)
    pause(25)
    A_button.setFlag(SpriteFlag.Ghost, true)

})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-1)
    B_button.setFlag(SpriteFlag.Ghost, false)
    pause(25)
    B_button.setFlag(SpriteFlag.Ghost, true)
})

B_button = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . a a a a a . . . . . . 
. . . . a . . . . . a . . . . . 
. . . a . . . . . . . a . . . . 
. . a . . a a a a . . . a . . . 
. a . . . a . . . a . . . a . . 
. a . . . a . . . a . . . a . . 
. a . . . a a a a . . . . a . . 
. a . . . a . . . a . . . a . . 
. a . . . a . . . a . . . a . . 
. . a . . a a a a . . . a . . . 
. . . a . . . . . . . a . . . . 
. . . . a . . . . . a . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
A_button = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . 3 . . . . . 3 . . . . . 
. . . 3 . . . . . . . 3 . . . . 
. . 3 . . . 3 3 3 . . . 3 . . . 
. 3 . . . 3 . . . 3 . . . 3 . . 
. 3 . . . 3 . . . 3 . . . 3 . . 
. 3 . . . 3 . . . 3 . . . 3 . . 
. 3 . . . 3 3 3 3 3 . . . 3 . . 
. 3 . . . 3 . . . 3 . . . 3 . . 
. . 3 . . 3 . . . 3 . . 3 . . . 
. . . 3 . . . . . . . 3 . . . . 
. . . . 3 . . . . . 3 . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)

B_button.setFlag(SpriteFlag.Ghost, true)
A_button.setFlag(SpriteFlag.Ghost, true)

B_spawner = sprites.create(img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
A_spawner = sprites.create(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
B_button.setPosition(65, 100)
A_button.setPosition(90, 100)
A_spawner.setPosition(A_button.x, 10)
B_spawner.setPosition(B_button.x, 10)
info.setLife(4)
game.onUpdateInterval(1250, function () {
    if (Math.percentChance(33)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . a . . a . . a . . . . . 
. . . . . a . a . a . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 20, SpriteKind.B, B_spawner)
    } else if (Math.percentChance(50)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . 3 . . 3 . . 3 . . . . . 
. . . . . 3 . 3 . 3 . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 20, SpriteKind.A, A_spawner)
    } else {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . 3 . . 3 . . 3 . . . . . 
. . . . . 3 . 3 . 3 . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 20, SpriteKind.A, A_spawner)
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . a . . a . . a . . . . . 
. . . . . a . a . a . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 20, SpriteKind.B, B_spawner)
    }
})
game.onUpdate(function () {
    if (info.life() == 0) {
        game.over()
    }
})