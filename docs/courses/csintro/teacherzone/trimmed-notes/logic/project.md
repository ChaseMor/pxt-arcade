# Activity: Logic Project

## [Example Game #1: Collection Message](https://makecode.com/_FxzKYsgV4cc0)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Collectible
}
let projectile: Sprite = null
let value = false
let player: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectible, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . 7 7 . 7 7 . . . . . 
. . . . . . 7 . . 7 7 . . . . . 
. . . . . 7 . . . . 7 . . . . . 
. . . . . 7 . . . 7 7 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 9 9 9 . . . . 
. . . . . . . . 9 9 . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . 9 9 . . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . . . . 9 9 9 . . . . . 
. . . . . . . . . . 9 . . . . . 
. . . . . . . . . . 9 9 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -30, 0, SpriteKind.Collectible)
    projectile.y = Math.randomRange(0, scene.screenHeight())
})
game.onUpdate(function () {
    value = info.score() >= 10
    if (value) {
        player.say("Good job!")
    } else {
        player.say("Not yet")
    }
})
```

## [Example game #2: life based scoring, continue playing](https://makecode.com/_aos50hDCmhzj)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Fire,
    Coin
}
let projectile: Sprite = null
let fire: Sprite = null
let player: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
info.onLifeZero(function () {
    if (game.ask("Do you want to keep playing?")) {
        info.changeLifeBy(3)
    } else {
        game.over()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fire, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    if (info.life() <= 2) {
        sprite.say("You're low on health!", 2000)
        info.changeScoreBy(5)
    } else {
        info.changeScoreBy(1)
    }
    otherSprite.destroy()
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . a a a a a . . . . . 
. . . . . a a . . . a a . . . . 
. . . . . a . . . . a . . . . . 
. . . . . a . . . . a . . . . . 
. . . . . a a . . a a . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . a a a a . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . a . . . a a . . . . . 
. . . . a . . . . . a . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
info.setLife(5)
game.onUpdateInterval(750, function () {
    fire = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . 2 2 . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . 2 . . 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 4 5 4 4 2 . . . 
. . . . 2 4 2 4 4 5 4 4 2 . . . 
. . . . 2 4 2 2 4 5 5 4 2 . . . 
. . . 2 4 2 2 2 4 5 4 4 2 . . . 
. . . 2 2 4 2 4 4 5 4 2 2 . . . 
. . . 2 4 4 2 4 5 4 2 2 . . . . 
. . . 2 2 4 2 4 4 2 2 . . . . . 
. . . . 2 4 2 2 2 2 . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Fire)
    fire.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    fire.lifespan = 2000
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 . . . . . . . 
. . . 5 5 4 4 4 5 5 5 . . . . . 
. . . 5 4 4 5 4 4 4 5 . . . . . 
. . . 5 4 4 5 4 4 4 5 5 . . . . 
. . . 5 4 4 5 4 4 4 4 5 . . . . 
. . . 5 4 4 5 4 4 4 5 5 . . . . 
. . . 5 5 4 4 4 4 4 5 . . . . . 
. . . . 5 5 5 4 4 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKind.Coin)
})
```

## [Example #3: AND "Gate"](https://makecode.com/_Va2THxgeRYat)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Plate
}
let plate2: Sprite = null
let flag2 = 0
let flag1 = 0
let plate1: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Plate, function (sprite, otherSprite) {
    if (otherSprite == plate1) {
        flag1 = 1
    } else {
        flag2 = 1
    }
    otherSprite.setImage(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    checkGate()
    pause(1000)
    otherSprite.setImage(img`
f f f f f f f f f f f f f f f f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`)
    if (otherSprite == plate1) {
        flag1 = 0
    } else {
        flag2 = 0
    }
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
function setupTilemap() {
    scene.setTileMap(img`
1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
    scene.setTile(15, img`
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
1 1 1 d d f f 9 9 f f d d 1 1 1 
`, true)
    scene.setTile(13, img`
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
`, true)
}
function setupPlayer() {
    mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
    controller.controlSprite(mySprite, 100, 100)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
function checkGate() {
    if (flag1 == 1 && flag2 == 1) {
        scene.setTileAt(scene.getTile(6, 3), 1)
        scene.setTileAt(scene.getTile(6, 4), 1)
    }
}
function setupPlates() {
    plate1 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Plate)
    plate2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f d d d d d d d d d d d d d d f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Plate)
    scene.getTile(5, 2).place(plate1)
    scene.getTile(5, 5).place(plate2)
    flag1 = 0
    flag2 = 0
}
setupTilemap()
setupPlates()
setupPlayer()
```