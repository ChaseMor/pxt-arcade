// https://makecode.com/_ejMgmjAJJgaR

enum SpriteKind {
    Player,
    Enemy,
    Dog,
    Bacon
}
let bacon: Sprite = null
let dog: Sprite = null
sprites.onOverlap(SpriteKind.Dog, SpriteKind.Bacon, function (sprite, otherSprite) {
    game.over()
})
scene.setBackgroundColor(9)
dog = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . f d d d f f f f d e d f . . . . . . . . . . . . . . . . 
. . . . f e e f d d e e f e e f . . . . . . . . . . . . . . . . 
. . . . f e f f d d e e f f d f . . . . . . . . . . . . . . . . 
. . . . . f f f d d d e f f f . . . . . . . . . . f . . . . . . 
. . . . . . f e e e d d d f . . . . . . . . . . f f . . . . . . 
. . . . . f f e f e d f d f f . . . . . . . . f e f . . . . . . 
. . . . f f f e e e d d d d f . . . . . . . f f e f . . . . . . 
. . . . . f d d d d d e e e f . . . . . . . f d e f . . . . . . 
. . . . . f d d d d e e e f f . . . . . . . f d d f f . . . . . 
. . . . . f f f e d d e e f f . . . . . . . f f d d f f . . . . 
. . . . . . . f e d d d e f f f . . . . . . . f d e e f f . . . 
. . . . . . . f f f 2 f f f d f f f . . . . . f d e e e f . . . 
. . . . . . . f d f 2 f d d d d d f f f f f f d d d d f f . . . 
. . . . . . f d d d f d d e e d d d d d d d d d d d f f . . . . 
. . . . f f f d d d d d d e e e d d d d e e e d d f . . . . . . 
. . . f f d d d d d d d d e e e d d d d e e e d d f . . . . . . 
. . . f e d d f f d d d d d d d f f d e e e e d e f . . . . . . 
. . . f e e f f f e e f f f f f f f d d d d d d e f f . . . . . 
. . . f e f f f f e e f . . . . . f d d d f f d e e f . . . . . 
. . . f f f . f d d f f . . . . . f d e d f f d d d f . . . . . 
. . . f f . . f d f f . . . . . . f e e f f f f d d f . . . . . 
. . . . . . . f f f . . . . . . . f f f f . . f f f f . . . . . 
. . . . . . . f f . . . . . . . . . f f . . . . f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Dog)
bacon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . e e e e e e e e . . . . 
. e e e e e e e e e e e e e e e 
. e e e e 2 2 2 2 2 e e e e e e 
. e e 2 2 2 e e e 2 2 2 2 2 e e 
. e e e e e e 2 e e e e e e e e 
. e e 2 2 2 2 e 2 2 2 2 2 2 e e 
. e e e e e e e e e e e e e e e 
. e e e e e . . . e e e e e e e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Bacon)
bacon.setFlag(SpriteFlag.StayInScreen, true)
dog.setFlag(SpriteFlag.StayInScreen, true)
bacon.setPosition(15, 15)
dog.setPosition(scene.screenWidth() - 20, scene.screenHeight() - 20)
game.onUpdate(function () {
    info.changeScoreBy(1)
    bacon.vx = controller.dx(4000)
    bacon.vy = controller.dy(4000)
    if (bacon.x > dog.x) {
        dog.vx = 15
    } else if (bacon.x < dog.x) {
        dog.vx = -15
    }
    if (bacon.y > dog.y) {
        dog.vy = 15
    } else if (bacon.vy < dog.y) {
        dog.vy = -15
    }

    if (Math.percentChance(1)) {
        dog.say("wait", 250)
    } else if (Math.percentChance(1)) {
        dog.say("beg", 250)
    } else if (Math.percentChance(1)) {
        dog.say("bacon", 250)
    }
})
