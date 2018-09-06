// https://makecode.com/_8i5fiK57mWMH

enum SpriteKind {
    Spaceship,
    Laser,
    Star,
    Asteroid,
    Alien,
    EnemyLaser,
    DestroyedAsteroid,
    PowerUp
}
let upgradedLaser: number = 0
sprites.onDestroyed(SpriteKind.Asteroid, function (sprite) {
    if (sprite.x > 0) {
        for (let i = 0; i < 6; i++) {
            let blast: Sprite = sprites.createProjectile(img`
5 
`, Math.randomRange(0, 120) - 60, Math.randomRange(0, 120) - 60, SpriteKind.Laser, sprite)
            blast.setFlag(SpriteFlag.Ghost, true)
            blast.lifespan = 20
        }
    }
    for (let i = 0; i < 3; i++) {
        let blast: Sprite = sprites.createProjectile(img`
. . . . . . . . 
. . e . . . . . 
. e d e e . . . 
. e d d e . . . 
. e e d e . . . 
. . e e e . . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(0, 80) - 40, Math.randomRange(0, 80) - 40, SpriteKind.DestroyedAsteroid, sprite)
        blast.setFlag(SpriteFlag.Ghost, true)
        blast.lifespan = 30
    }
})
sprites.onOverlap(SpriteKind.EnemyLaser, SpriteKind.Spaceship, function (sprite, otherSprite) {
    game.over()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let laser: Sprite = sprites.createProjectile(img`
2 2 
`, 110, spaceship.vy / 8, SpriteKind.Laser, spaceship)
    laser.x += 8
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (upgradedLaser > 0) {
        let diff: number = 16
        for (let i = -diff; i <= diff; i += diff) {
            let laser: Sprite = sprites.createProjectile(img`
2 2 2
2 2 2`, 110, spaceship.vy / 8 + i, SpriteKind.Laser, spaceship)
            laser.x += 8
        }
        upgradedLaser += -1
        spaceship.say("" + upgradedLaser + " left!", 200)
    } else {
        spaceship.say("no more!", 200)
    }
})
sprites.onOverlap(SpriteKind.Spaceship, SpriteKind.Asteroid, function (sprite, otherSprite) {
    game.over()
})
sprites.onOverlap(SpriteKind.Spaceship, SpriteKind.PowerUp, function (sprite, otherSprite) {
    otherSprite.destroy()
    upgradedLaser += 5
    sprite.say("Upgrade!", 200)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Asteroid, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Alien, function (sprite, otherSprite) {
    otherSprite.destroy()
    aliens.removeElement(otherSprite)
    info.changeScoreBy(6)
})
sprites.onDestroyed(SpriteKind.Alien, function (sprite) {
    for (let i = 0; i < 6; i++) {
        let blast = sprites.createProjectile(img`
5 
`, Math.randomRange(0, 120) - 60, Math.randomRange(0, 120) - 60, SpriteKind.Laser, sprite)
        blast.setFlag(SpriteFlag.Ghost, true)
        blast.lifespan = 20
    }
})
let aliens: Sprite[] = []
game.splash("Press A for Laser", "B for upgraded Laser")
let spaceship: Sprite = sprites.create(img`
. . c c . . . . . 
. c a a 9 . . . . 
c a a a a c c c . 
c b b b a a a a c 
. c c c c c c c . 
`, SpriteKind.Spaceship)
spaceship.x = 20
spaceship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
    if (Math.percentChance(65)) {
        let star: Sprite = sprites.createProjectile(img`
1 
`, -20 - Math.randomRange(0, 30), 0, SpriteKind.Star, null)
        star.y = Math.randomRange(0, scene.screenHeight())
    }
    if (Math.percentChance(35)) {
        let asteroid: Sprite = sprites.createProjectile(img`
. . . . e e e . . . 
. . e e e e e e . . 
. e d e e e d e e . 
. e d e e e d e e e 
. e d e d e d e e e 
e e d e d e e e d . 
e e e e d e e e d . 
. . e e d d d . . . 
. . e e e e . . . . 
`, -30, 0, SpriteKind.Asteroid, null)
        asteroid.y = Math.randomRange(0, scene.screenHeight())
    }
    if (Math.percentChance(20)) {
        let alien: Sprite = sprites.create(img`
. . . . 2 2 . . . . 
. . . . 4 4 . . . . 
. . 4 4 5 5 4 4 . . 
. 4 5 5 f f 5 5 4 . 
4 5 5 5 5 5 5 5 5 4 
4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Alien)
        alien.setPosition(scene.screenWidth() - 15, Math.randomRange(0, scene.screenHeight()))
        aliens.push(alien)
    }
    if (Math.percentChance(5)) {
        let powerUp: Sprite = sprites.createProjectile(img`
. . . . . . . 7 . . . . . . . . 
. . . . . 7 7 1 7 7 . . . . . . 
. . . 7 7 . . . 1 1 7 7 . . . . 
. . 7 . . . . . . . 1 1 7 . . . 
. . 7 . 1 7 . 1 7 . . 1 7 . . . 
1 7 . . 1 7 . 1 7 . . . 1 7 . . 
1 7 . . 1 7 . 1 7 . . . 1 7 . . 
7 . . . 1 7 . 1 7 . . . . 1 7 . 
1 7 . . 1 7 . 1 7 . . . 1 7 . . 
1 7 . . . 1 7 7 1 7 . . 1 7 . . 
. 1 7 . . . . . . . . . 7 . . . 
. 1 7 . . . . . . . . . 7 . . . 
. . 1 7 7 . . . . . 7 7 . . . . 
. . . 1 1 7 7 . 7 7 . . . . . . 
. . . . . 1 1 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.PowerUp, null)
        powerUp.y = Math.randomRange(0, scene.screenHeight())
    }
})
game.onUpdate(function () {
    spaceship.vy = controller.dy(2000)
    spaceship.vx = controller.dx(1000)
    for (let ai of aliens) {
        if (spaceship.y > ai.y) {
            ai.vy = 15
        } else {
            ai.vy = -15
        }
        if (Math.abs(spaceship.y - ai.y) < 10) {
            if (Math.percentChance(3)) {
                let enemyLaser: Sprite = sprites.createProjectile(img`
3 3 3 
3 3 3 
`, -75, 0, SpriteKind.EnemyLaser, ai)
            }
        }
    }
})
