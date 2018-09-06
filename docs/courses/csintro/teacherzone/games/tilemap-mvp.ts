enum SpriteKind {
    Player,
    Enemy
}
let smiley: Sprite = null
scene.setTile(7, img`
6 6 6 6 6 6 6 6 6 7 7 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 6 7 7 6 6 
6 7 6 6 6 6 6 6 7 6 6 6 6 6 6 6 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 7 6 6 6 6 7 6 7 6 6 6 6 6 6 7 
6 6 6 6 6 6 7 7 6 6 6 6 7 6 6 7 
6 6 6 6 6 6 6 7 6 6 6 6 7 7 7 7 
6 6 6 6 6 6 6 7 6 6 6 6 6 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 6 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 6 7 7 6 6 6 6 6 6 6 6 6 6 7 6 
6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 7 6 6 7 6 6 
`)
scene.setTile(15, img`
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
d d d d d d 1 d d d d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d 1 d d d d d d d d 1 d d d d 
d d 1 d d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d d 1 d d d d d d d d d 
`, true)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 f e e e e e f 
f 2 2 2 2 2 2 2 2 e e e e e e f 
f 2 2 2 2 2 2 2 2 e e e e e e f 
f f 2 f f f f f f f e e e e e f 
f c c c c c c c c f e e e e e f 
f c c c c c c c c f f f f 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f c c c c c c c c f 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
smiley = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 f 5 5 5 f 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 f 5 5 5 5 5 f 5 . . . . 
. . . 5 5 f 5 5 5 f 5 5 . . . . 
. . . . 5 5 f f f 5 5 . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(smiley)
game.onUpdate(function () {
    smiley.x += controller.dx(100)
    smiley.y += controller.dy(100)
})
