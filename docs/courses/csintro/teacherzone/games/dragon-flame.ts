// https://makecode.com/_KTtYErTyCHT4

enum SpriteKind {
    Player,
    Enemy,
    Dragon,
    Fire
}
let flame: Image[] = []
let dragon: Sprite = null
let fire: Sprite = null
scene.setBackgroundColor(1)
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
`, SpriteKind.Dragon)
flame = [
    img`2`,
    img`3`,
    img`4`,
    img`5`
]
game.onUpdate(function () {
    fire = sprites.createProjectile(Math.pickRandom(flame),
        -Math.randomRange(30, 40),
        Math.randomRange(0, 10) - 5,
        SpriteKind.Fire,
        dragon)
    fire.setFlag(SpriteFlag.Ghost, true)
    fire.x += -10
    fire.y += -9
})
