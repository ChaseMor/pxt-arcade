# Activity: Arrays Project

## [Example #1: Enemy Following](https://makecode.com/_6CpUj0iPbD3H)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let enemy: Sprite = null
let player: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprite.say("ow", 100)
})
scene.setTileMap(img`
f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 f 
f 1 1 f 1 1 1 f 1 f 
f 1 1 1 1 1 f 1 1 f 
f 1 1 1 f 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f 
`)
scene.setTile(15, img`
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e f e e e e e e e 
e e e e e e e e f e e e e e e e 
e e e e e e e e f e e e e e e e 
e e e e e e e e f e e e e e e e 
f f f f f f f f f f f f f f f f 
`, true)
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 . . . . . 
. . . . . . . 8 . . 8 . . . . . 
. . . . . . . 8 . . 8 . . . . . 
. . . . . . . 8 8 8 8 . . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . 8 8 8 8 8 . . . . 
. . . . . . . . . 8 . . . . . . 
. . . . . . . . 8 . 8 . . . . . 
. . . . . . . 8 . . . 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.getTile(1, 1).place(player)
controller.controlSprite(player, 100, 100)
for (let i = 0; i < 10; i++) {
    enemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    enemy.setPosition(Math.randomRange(32, 144), Math.randomRange(32, 112))
}
info.startCountdown(15)
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (player.x < value.x) {
            value.vx = -3
        } else {
            value.vx = 3
        }
        if (player.y < value.y) {
            value.vy = -3
        } else {
            value.vy = 3
        }
    }
    info.changeScoreBy(1)
})
```

## [Example #2: Hazards ](https://makecode.com/_TWiWPpFDo5jF)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Hazard
}
let mySprite: Sprite = null
let expressionArray: string[] = []
let spriteArray: Sprite[] = []
let textToSay = ""
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hazard, function (sprite, otherSprite) {
    textToSay = expressionArray[Math.randomRange(0, expressionArray.length - 1)]
    if (otherSprite == spriteArray[0]) {
        textToSay = "" + textToSay + " That's Hot!"
    } else if (otherSprite == spriteArray[1]) {
        textToSay = "" + textToSay + " That's Cold!"
    } else {
        textToSay = "" + textToSay + " That's Sharp!"
    }
    sprite.say(textToSay, 1000)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    pause(1000)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
scene.setTileMap(img`
f f f f f f f f f f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f f f f f f f f f f 
`)
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
spriteArray = [sprites.create(img`
. . . . . . . . 3 . . . . . . . 
. . . . . . . . 2 3 . . . . . . 
. . . . . . . 3 2 2 3 . . . . . 
. . . . . . . 2 4 4 2 3 . . . . 
. . . 4 . . 2 2 4 4 2 2 . . . . 
. . 3 4 . 4 2 4 4 4 2 2 . . . . 
. . . . . 2 2 4 4 4 2 2 . . . . 
. . 3 3 . 2 4 4 4 4 2 2 3 3 . . 
. . 2 4 3 2 4 4 5 4 4 2 2 2 . . 
. . 2 2 2 2 4 5 5 4 4 2 2 2 . . 
. . 2 2 4 4 4 5 5 4 4 4 2 2 . . 
. . 2 2 4 4 5 d d 5 5 4 2 2 . . 
. . . 2 4 5 5 d 1 d 5 4 2 3 . . 
. . . 2 2 5 d 1 1 d 5 4 4 . . . 
. . . 3 2 4 5 1 1 5 4 4 . . . . 
. . . . . 3 5 d d 5 . . . . . . 
`, SpriteKind.Hazard), sprites.create(img`
. . . . . d d d d d d d d . . . 
. . . d d b b b b b b b b b . . 
. d b 9 9 9 9 9 9 9 1 1 d b 6 d 
d 9 6 6 6 6 6 b b d d b b 6 9 b 
b 9 9 6 b 6 6 b b b b 6 6 b 9 b 
b 9 9 b 6 6 b b 9 b 6 6 b 6 6 d 
b 9 1 6 6 6 b b d 6 c b 9 6 6 d 
d 9 9 6 b b b b b 6 6 b 9 6 6 d 
d 9 6 b 9 d b 1 1 b 6 b 9 6 6 b 
d 9 6 9 9 6 b 1 1 b 6 6 9 6 9 b 
b 1 1 9 9 6 9 d 1 6 c 6 9 9 1 b 
b 1 1 1 9 b b b d 6 6 9 1 1 1 d 
d 1 1 1 1 d 1 1 1 d 1 9 9 1 b . 
. d d 1 1 1 1 1 1 9 9 9 b d . . 
. . . d b d 1 1 1 9 6 b . . . . 
. . . . . . d d d d d . . . . . 
`, SpriteKind.Hazard), sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f f f f f f f f f . . . . 
. d d f f f f f f f f f d d . . 
. . . f f f f f f f f f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Hazard)]
expressionArray = ["Ouch!", "Wow!", "Yikes!"]
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
for (let value of spriteArray) {
    scene.getTile(Math.randomRange(1, 8), Math.randomRange(1, 6)).place(value)
}
```

## Challenge: Boolean Arrays

```blocks
enum SpriteKind {
    Player,
    Enemy,
    FirstKey,
    SecondKey,
    ThirdKey,
    Door
}
let exit: Sprite = null
let thirdKey: Sprite = null
let secondKey: Sprite = null
let firstKey: Sprite = null
let player: Sprite = null
let keysObtained: boolean[] = []
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.FirstKey, function (sprite, otherSprite) {
    keysObtained[0] = true
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SecondKey, function (sprite, otherSprite) {
    keysObtained[1] = true
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ThirdKey, function (sprite, otherSprite) {
    keysObtained[2] = true
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (keysObtained[0] && keysObtained[1] && keysObtained[2]) {
        music.playSound(music.sounds(Sounds.PowerUp))
        pause(250)
        sprite.destroy()
        pause(250)
        game.over(true)
    } else {
        otherSprite.say("You need to get the keys!", 250)
    }
})
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f f f f f f f f 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
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
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . 7 . . 7 . . 7 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.getTile(1, 1).place(player)
controller.controlSprite(player, 100, 100)
scene.cameraFollowSprite(player)
firstKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . 3 . . 3 . . . . . . . 
. . . . . 3 . . 3 . . . . . . . 
. . . . . 3 3 3 3 . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . 3 3 3 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.FirstKey)
scene.getTile(1, 6).place(firstKey)
secondKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 . . 5 . . . . . . . 
. . . . . 5 . . 5 . . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 . . . . . . . . 
. . . . . . 5 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
. . . . . . 5 5 . . . . . . . . 
. . . . 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.SecondKey)
scene.getTile(5, 5).place(secondKey)
thirdKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . 4 . . 4 . . . . . . . 
. . . . . 4 . . 4 . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . 4 4 4 . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . 4 4 4 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.ThirdKey)
scene.getTile(26, 1).place(thirdKey)
keysObtained = [false, false, false]
exit = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e 5 5 e e e e e e . . . 
. . . . e 5 e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e 4 4 e e e e e e . . . 
. . . . e 4 e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e 3 3 e e e e e e . . . 
. . . . e 3 e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
`, SpriteKind.Door)
scene.getTile(5, 3).place(exit)
```