// https://makecode.com/_eFi3f5PqiRrE

enum SpriteKind {
    Player,
    Enemy,
    dragon,
    Fire
}
let flame: Image[] = []
let dragon: Sprite = null
let fire: Sprite = null
sprites.onDestroyed(SpriteKind.Fire, function (sprite) {
    info.changeScoreBy(1)
})
let count: number = 0
let won: boolean = false

game.splash("Hit A when the", "score reaches 50")

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("" + info.score())
    dragon.say("" + info.score())
    count++
    if (info.score() == 50) {
        dragon.say("Great job!")
        won = true
    }
    
    if (count > 30) {
        game.over(won)
    }
    info.setScore(0);
})
scene.setBackgroundColor(0)
dragon = sprites.create(img`
. . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . f 6 f . . . . . . . . . . . . . . 
. . . . . . . . f 6 f f f f f 6 6 f . . . . . . . . . . . . . . 
. . . . . . . . f 6 f 7 7 7 7 f f . . . . . . . . . . . . . . . 
. . . . . . . . . f 7 2 7 2 7 7 f . . . . . . . . . . . . . . . 
. . . . . . . . . f f f 7 7 7 7 f . . . . . . . . . . . . . . . 
. . . . . . . . f 7 7 7 f 7 7 7 7 f . . . . . . . . . . . . . . 
. . . . . . . f 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . . . . 
. . . . . . . f 7 7 7 7 f 7 7 7 7 f . . . . . . . . . . . . . . 
. . . . . . . . f f f f 7 7 7 7 7 7 f . . . . . . . . . . . . . 
. . . . . . . . . . . f 7 7 7 7 7 7 7 f . . . . . . . . . . . . 
. . . . . . . . . . f 6 6 6 6 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 6 6 7 7 f 7 7 f . . . . . . . . . . . 
. . . . . . . . f f 7 7 7 6 f f f 7 7 7 f . . . . . . f . . . . 
. . . . . . . . f 6 6 f 6 6 f 7 7 7 7 7 f . . f f f f 7 f . . . 
. . . . . . . . f f f 7 7 6 6 f f f 7 7 f f f f 7 7 7 f . . . . 
. . . . . . . . . f 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 f f . . . . . 
. . . . . . . . . f 7 7 7 7 7 6 7 7 7 7 f f f f f . . . . . . . 
. . . . . . . . . . f 6 6 6 6 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . . f 7 6 6 6 6 7 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . f f 7 7 7 7 6 6 7 f 7 7 7 f . . . . . . . . . . . 
. . . . . . . f 7 7 7 7 7 7 7 f 7 7 7 7 f . . . . . . . . . . . 
. . . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.dragon)
dragon.setFlag(SpriteFlag.StayInScreen, true)
flame = [img`
2 
`, img`
3 
`, img`
4 
`, img`
5 
`]
game.onUpdate(function () {
    fire = sprites.createProjectile(Math.pickRandom(flame), 0 - Math.randomRange(60, 80), Math.randomRange(0, 30) - 15, SpriteKind.Fire, dragon)
    dragon.vx = controller.dx(2000)
    dragon.vy = controller.dy(2000)
    fire.setFlag(SpriteFlag.Ghost, true)
    fire.x += -10
    fire.y += -9
    fire.lifespan = 20
})
