// https://makecode.com/_59LPuCcExMV0

enum SpriteKind {
    Cloud,
    Enemy,
    Asteroid,
    Duck
}
let projectile: Sprite = null
let spawner: Sprite = null
let player: Sprite = null
let sprite: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player.vy = -60
    music.playSound(music.sounds(Sounds.JumpUp))
})
sprites.onDestroyed(SpriteKind.Asteroid, function (sprite) {
    music.playSound(music.sounds(Sounds.PowerUp))
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Duck, SpriteKind.Asteroid, function (sprite, otherSprite) {
    game.over()
})
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 . . . . . . . 
. . . . 5 5 5 f 5 . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . e e e e . . . . . . . . 
. . . . e e e e . . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 . . . . 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Duck)
scene.setBackgroundColor(9)
player.x = 30
spawner = sprites.create(img`
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
. . . . . . . . . . . . . . . 3 
`, SpriteKind.Enemy)
spawner.setPosition(scene.screenWidth(), 0)
spawner.vy = 200
game.onUpdate(function () {
    player.vy += 3
    if (player.y > scene.screenHeight() + 5 || player.y < -16) {
        game.over()
    }
    if (spawner.y > scene.screenHeight() - 8 || spawner.y < 0) {
        spawner.y = scene.screenHeight() / 2
        spawner.vy = 0 - spawner.vy
    }
    if (Math.percentChance(1)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 4 . . . 
. . . . . . . . . . 4 4 4 . . . 
. . . . . . . . . 4 4 2 4 . . . 
. . . . . . . 4 4 2 2 2 4 . . . 
. . . . . 4 4 2 2 2 5 2 4 . . . 
. . . . 4 2 2 2 5 5 5 2 4 . . . 
. . . . . 4 4 2 2 5 5 2 4 . . . 
. . . . . . . 4 4 2 2 2 4 . . . 
. . . . . . . . . 4 4 2 4 . . . 
. . . . . . . . . . . 4 4 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Asteroid, spawner)
    } else if (Math.percentChance(2)) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 d d d 1 . 1 1 . 
. . 1 d d 1 1 d d d d 1 1 1 1 1 
. . 1 d d d d d d d d d d d 1 1 
. 1 1 d d 1 d d d 1 1 d d d 1 . 
. 1 d d d 1 1 d d d 1 1 d d 1 . 
. 1 d 1 d d 1 1 d d d 1 d d 1 1 
. 1 d d d d d d d d d 1 d d d 1 
. 1 1 1 1 d d d 1 1 d d d d d 1 
. . . . 1 d 1 1 1 d d 1 1 1 1 1 
. . . . 1 1 1 . 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Cloud, spawner)
    }
})
