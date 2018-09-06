// https://makecode.com/_dcEe4VEKU9r0

enum SpriteKind {
    Hero,
    Key,
    Player,
    Enemy,
    Door
}

sprites.onOverlap(SpriteKind.Hero, SpriteKind.Door, function (sprite, otherSprite) {
    if (info.score() >= 3) {
        game.over(true)
    } else {
        sprite.say("Not enough keys!", 1000)
    }
})
sprites.onOverlap(SpriteKind.Hero, SpriteKind.Key, function (exit, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.setBackgroundColor(1)
let hero: Sprite = sprites.create(img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d f d f d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Hero)
let character: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d f d f d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
let character2: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d f d f d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . f f f e 8 e f . . . . . . 
. . . f f e e e e e . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
let character3: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`

let character4: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f f . . . . . . . . . 
. . . . . f f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
let character5: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`

let character6: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d f d f d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`

let character7: Image = img`
. . . . . . f f . . . . . . . . 
. . . . . f 9 9 f f . . . . . . 
. . . . f 9 9 9 9 f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d f d f d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f e 8 e f . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . . f f . . . . . . . . . 
. . . . . f f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
hero.addMovementFrame(character, sprites.MovementDirection.Right, true)
hero.addMovementFrame(character2, sprites.MovementDirection.Right, true)
hero.addMovementFrame(character5, sprites.MovementDirection.Up, false)
hero.addMovementFrame(character3, sprites.MovementDirection.Up, false)
hero.addMovementFrame(character5, sprites.MovementDirection.Up, false)
hero.addMovementFrame(character4, sprites.MovementDirection.Up, false)

hero.addMovementFrame(character, sprites.MovementDirection.Down, false)
hero.addMovementFrame(character6, sprites.MovementDirection.Down, false)
hero.addMovementFrame(character, sprites.MovementDirection.Down, false)
hero.addMovementFrame(character7, sprites.MovementDirection.Down, false)

scene.cameraFollowSprite(hero)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 e 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 e 7 7 e 7 7 e 7 e 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 e 7 7 7 7 e 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 e 7 7 7 7 7 7 e 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 e 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 e 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 e 7 7 7 e e 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 e 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 e e 7 7 7 e 7 7 7 7 e 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(14, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 
7 7 5 7 7 7 d d d d 7 7 7 5 6 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 5 6 7 
7 6 5 7 7 7 7 7 7 7 d 7 7 5 7 7 
7 6 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 6 7 7 7 7 7 e 7 7 7 e 7 7 7 7 
7 6 7 7 7 7 e 7 e e e e 7 7 7 7 
7 7 7 7 7 7 e 7 e e 7 e 7 7 7 7 
7 7 7 7 7 7 e e e e e e 7 7 7 7 
7 7 7 7 7 e e e e e e e e 7 7 7 
7 7 7 7 e e e e e e e e e e 7 7 
d 7 7 e e e e e e e e e e e e 7 
d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 d 7 5 7 7 5 7 7 7 5 7 7 7 7 
`, true)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
let keyOne: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 . . . . . . . . . . . 
. . . 5 . 5 . . . . . . . . . . 
. . 5 . 5 5 5 5 5 5 5 . . . . . 
. . . 5 . 5 . . 5 . 5 . . . . . 
. . . . 5 . . . . . 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
let keyTwo: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 . . . . . . . . . . . 
. . . 5 . 5 . . . . . . . . . . 
. . 5 . 5 5 5 5 5 5 5 . . . . . 
. . . 5 . 5 . . 5 . 5 . . . . . 
. . . . 5 . . . . . 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
let keyThree: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 . . . . . . . . . . . 
. . . 5 . 5 . . . . . . . . . . 
. . 5 . 5 5 5 5 5 5 5 . . . . . 
. . . 5 . 5 . . 5 . 5 . . . . . 
. . . . 5 . . . . . 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
let tmSize: number = 512
keyOne.y = tmSize - 24
keyTwo.y = tmSize / 2
keyTwo.x = tmSize / 2
keyThree.x = tmSize - 24
let exit: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . b b b b b b b b b . . . . 
. . . b d d d d d d d b . . . . 
. . . b d c d c d c d b . . . . 
. . . b d c d c d c d b . . . . 
. . . b d c d c d c d b . . . . 
. . . b d c d c d c d b . . . . 
. . . b d c d c d c d b . . . . 
. . . b d d d d d d d b . . . . 
. . . b d c c d d d d b . . . . 
. . . b d d d d d d d b . . . . 
. . . b d d d d d d d b . . . . 
. . . b b b b b b b b b . . . . 
. . . b . . . . . . . b . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Door)
exit.setPosition(tmSize - 24, tmSize - 24)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 d 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 d 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 d 7 
7 7 7 7 6 7 7 7 7 7 7 7 7 7 d 7 
7 7 7 7 6 5 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 6 5 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 6 5 7 7 7 7 7 6 7 7 7 7 
7 7 7 7 6 5 7 7 7 7 7 6 5 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 6 5 7 7 7 
7 7 d 7 7 7 7 7 7 7 7 6 5 7 7 7 
7 7 d 7 7 7 7 d 7 7 7 7 5 7 7 7 
7 7 d 7 7 7 7 d 7 7 7 7 7 7 7 7 
7 7 d 7 7 7 7 d 7 7 7 7 7 7 7 7 
7 7 d 7 7 7 7 d 7 7 7 7 7 7 7 7 
7 7 d 7 7 7 7 d 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 d 7 7 7 7 7 7 7 7 
`)
game.onUpdate(function () {
    hero.vx = controller.dx(2000)
    hero.vy = controller.dy(2000)
})
