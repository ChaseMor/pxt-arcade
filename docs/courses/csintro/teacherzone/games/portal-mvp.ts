enum SpriteKind {
    Player,
    Enemy,
    Portal
}
let portal2: Sprite = null
let portal: Sprite = null
let player: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    sprite.setPosition(scene.screenWidth() - otherSprite.x, scene.screenHeight() - otherSprite.y)
})
scene.setBackgroundColor(1)
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f . f . . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
player.setFlag(SpriteFlag.StayInScreen, true)
portal = sprites.create(img`
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . 8 8 9 9 9 9 9 8 8 . . . . 
. . 8 9 9 9 9 9 8 9 9 9 8 . . . 
. . 8 9 9 9 9 8 9 8 9 9 8 . . . 
. 8 9 9 9 9 8 9 9 9 8 9 9 8 . . 
. 8 9 9 9 8 9 9 8 9 9 8 9 8 . . 
8 9 9 9 8 9 9 8 9 8 9 9 8 9 8 . 
. 8 9 9 9 8 9 9 8 9 9 8 9 8 . . 
. 8 9 9 9 9 8 9 9 9 8 9 9 8 . . 
. . 8 9 9 9 9 8 9 8 9 9 8 . . . 
. . 8 9 9 9 9 9 8 9 9 9 8 . . . 
. . . 8 8 9 9 9 9 9 8 8 . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Portal)
portal2 = sprites.create(img`
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . 8 8 9 9 9 9 9 8 8 . . . . 
. . 8 9 9 9 9 9 8 9 9 9 8 . . . 
. . 8 9 9 9 9 8 9 8 9 9 8 . . . 
. 8 9 9 9 9 8 9 9 9 8 9 9 8 . . 
. 8 9 9 9 8 9 9 8 9 9 8 9 8 . . 
8 9 9 9 8 9 9 8 9 8 9 9 8 9 8 . 
. 8 9 9 9 8 9 9 8 9 9 8 9 8 . . 
. 8 9 9 9 9 8 9 9 9 8 9 9 8 . . 
. . 8 9 9 9 9 8 9 8 9 9 8 . . . 
. . 8 9 9 9 9 9 8 9 9 9 8 . . . 
. . . 8 8 9 9 9 9 9 8 8 . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Portal)
portal.setPosition(10, 10)
portal2.setPosition(40, 90)
game.onUpdate(function () {
    player.x += controller.dx()
    player.y += controller.dy()
})
