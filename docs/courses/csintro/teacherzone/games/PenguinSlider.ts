enum SpriteKind {
    Player,
    Enemy,
    Goal
}
let goal: Sprite = null
let level = 0
let sprite: Sprite = null
function level3() {
    game.splash("Level 3:")
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f . . . . . . . . f . . . . . f 
f . . . f . . . . . . . . . . f 
f . . . . . . . . . f . . . . f 
f . f . . . . . . . . . . . . f 
f f . . . . . . . f . . . . . f 
f . . . . . . . . . . . . . f f 
f . . . . . . f . . . . . . . . 
f . . f . . . . . . . . . . . . 
f . . . . . . . . . . . . . f f 
f . . . . . . . f . . . . . . f 
f . . . . . f . . . f . . . . f 
f . . . . . . . . . . . . . . f 
f f f f f f f f f f f f f f . f 
`)
    resetVelocities()
    sprite.setPosition(232, 248)
    goal.setPosition(240, 160)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprite.vx == 0 && sprite.vy == 0) {
        sprite.vy = 100
    }
})
function level2() {
    game.splash("Level 2:")
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f 
f . . . . . . . . f f f f f f f 
f . . . . . . . . f f f f f f f 
f f f . . f . f . f f f f f f f 
f . . f . . . . . f f f f f f f 
f . . . . . . . . f f f f f f f 
f . . . . . . . . f f f f f f f 
f . . . . . . . . f f f f f f f 
f . f . . . . . . f f f f f f f 
f . . . . . f . . f f f f f f f 
f . . f . . . . . f f f f f f f 
f f . . . . . . . f f f f f f f 
f . . . . . . . f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
    resetVelocities()
    sprite.setPosition(40, 40)
    goal.setPosition(72, 104)
}
function level1() {
    scene.setTileMap(img`
f f f f f f f f f f 
f f f . . . . . . f 
f f . . . . f . . f 
f . . . . . . f . f 
f . . . f . . . . . 
f . f . . . . . f f 
f . f f . . . . . f 
f f f f f f f f f f 
`)
    resetVelocities()
    game.splash("Level 1:", "reach the fish friend!")
    sprite.setPosition(16, 96)
    goal.setPosition(152, 72)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    if (level == 1) {
        game.splash("Level complete")
        level = 2
        level2()
    } else if (level == 2) {
        game.splash("Level complete")
        level = 3
        level3()
    } else {
        game.splash("Puzzle complete!")
    }
})
function resetVelocities() {
    sprite.vx = 0
    sprite.vy = 0
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprite.vy == 0 && sprite.vx == 0) {
        sprite.vx = -100
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprite.vy == 0 && sprite.vx == 0) {
        sprite.vy = -100
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprite.vx == 0 && sprite.vy == 0) {
        sprite.vx = 100
    }
})
sprite = sprites.create(img`
. . . f f f f f f f f f . . . . 
. . . f 1 1 1 1 1 1 1 f f . . . 
. . f f 1 1 f 1 1 f 1 1 f . . . 
. . f 1 1 1 1 1 4 4 1 1 f . . . 
. . f f 1 1 1 1 4 4 4 4 f . . . 
. . . f f f f 1 1 1 4 4 f . . . 
. . . . f f f f f f f . . . . . 
. . . f f 1 1 1 1 f f f . . . . 
. f f f f 1 1 1 1 1 f f . . . . 
. f f f 1 1 1 1 1 1 f f f . . . 
. f f f 1 1 1 1 1 1 f f f . . . 
f f f f f 1 1 1 1 1 f f f f . . 
. . f f f 1 1 1 1 f f f . . . . 
. . 4 f f 1 1 1 1 f f f . . . . 
. 4 4 4 f f f f f f f 4 4 . . . 
. . 4 4 . . . . . . 4 4 . . . . 
`, SpriteKind.Player)
level = 1
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f . . . . . . . . . . . f f f 
f . f . . . . . . . . . f f . f 
f . . f . . . . . . . . f . . f 
f . . . f f . . . . . f . . . f 
f . . . . f f . . . f . . . . f 
f . . . . . f f . . f . . . . f 
f . . . . . . f f f . . . . . f 
f . . . . . . . f f . . . . . f 
f . . . . . . f f . f . . . . f 
f . . . . f f . . . f f . . . f 
f . . . . f . . . . . f f . . f 
f . . . f . . . . . . . . f f f 
f . f f . . . . . . . . . . f f 
f f f . . . . . . f . . . . . f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(0, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
goal = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 . . . . . . 3 3 . . 
. . 3 3 3 3 3 3 3 . . . 3 3 3 . 
. . 3 3 3 3 3 3 3 . . 3 3 3 3 . 
. 3 3 f 3 3 3 3 3 . 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 f 3 3 3 3 3 . 3 3 3 3 . 
. . f f 3 3 3 3 3 3 . . 3 3 3 . 
. . 3 3 3 3 3 3 . . . . . . 3 . 
. . . . 3 3 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Goal)
level1()
game.onUpdate(function () {
    scene.cameraFollowSprite(sprite)
})
