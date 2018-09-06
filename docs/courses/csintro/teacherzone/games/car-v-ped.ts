// https://makecode.com/_8kraMHLMVVri

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
    music.playTone(262, music.beat(BeatFraction.Half))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ped.y += -8
})
sprites.onOverlap(SpriteKind.Safe, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("My Car!", 1000)
})
scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
1 1 1 1 1 1 1 1 1 1 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 
`)
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
game.onUpdateInterval(3000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . e e e e e e e e e e e e . . 
. . e . . e e . e e . . . e . . 
. . e . e . e e . e e . . e . . 
. . e e . e . . . . . e . e . . 
. . e e e . . . . . . e e e . . 
. . e . e . . . . . . . e e . . 
. . e e . . . . . . . e . e . . 
. . e e e . . . . . . e e e . . 
. . e . e . . . . . e . e e . . 
. . e . . e e . e e . e . e . . 
. . e . . . e e . e e . . e . . 
. . e e e e e e e e e e e e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 16, SpriteKind.Safe, item)
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
})
