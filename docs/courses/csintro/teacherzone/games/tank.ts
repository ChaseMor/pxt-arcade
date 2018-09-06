enum SpriteKind {
    Player,
    Enemy,
    Laser
}

let dir: number = 0
let speed: number = 30

scene.setBackgroundColor(1)
let dirImages: Image[] = [img`
. . 2 . . 
. f f f . 
. f f f . 
. f f f . 
. . . . . 
`, img`
2 . . . . 
. f f f . 
. f f f . 
. f f f . 
. . . . . 
`, img`
. . . . . 
. f f f . 
2 f f f . 
. f f f . 
. . . . . 
`, img`
. . . . . 
. f f f . 
. f f f . 
. f f f . 
2 . . . . 
`, img`
. . . . . 
. f f f . 
. f f f . 
. f f f . 
. . 2 . . 
`, img`
. . . . . 
. f f f . 
. f f f . 
. f f f . 
. . . . 2 
`, img`
. . . . . 
. f f f . 
. f f f 2 
. f f f . 
. . . . . 
`, img`
. . . . 2 
. f f f . 
. f f f . 
. f f f . 
. . . . . 
`]
let agent: Sprite = sprites.create(dirImages[dir], SpriteKind.Player)
agent.setFlag(SpriteFlag.StayInScreen, true)

game.onUpdate(function () {
    dir += -controller.dx()
    maintainAngle()
    if (controller.up.isPressed()) {
        agent.vx = speed * getXComponent()
        agent.vy = speed * getYComponent()
    } else if (controller.down.isPressed()) {
        agent.vx = -speed * getXComponent()
        agent.vy = -speed * getYComponent()
    } else {
        agent.vx = agent.vx * .8
        agent.vy = agent.vy * .8
    }
    let index = Math.round(dir * dirImages.length / 360)
    agent.setImage(dirImages[index])
    if (Math.percentChance(5)) {
        let projectile = sprites.createProjectile(
                            sprites.space.spaceAsteroid0,
                            Math.randomRange(0, 60) - 30,
                            Math.randomRange(0, 60) - 30,
                            SpriteKind.Enemy,
                            null)
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectile(
                img`8`,
                getXComponent() * speed * 2,
                getYComponent() * speed * 2,
                SpriteKind.Laser,
                agent)
})
sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})

function maintainAngle() {
    dir = dir % 360;
    if (dir < 0) dir += 360;
}

function getYComponent() {
    return -Math.cos(dir * Math.PI / 180)
}

function getXComponent() {
    return -Math.sin(dir * Math.PI / 180)
}
