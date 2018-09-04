# Activity: Arrays of Sprites

## Student Task #1: Moving a random asteroid

1. Start with the code from example #1
2. Instead of moving every asteroid, select a random asteroid from ``||variables:my sprite array||`` and move only that asteroid when the ``||controller:A||`` button is pressed
3. **Challenge:** choose another random asteroid, and have it ``||sprites:say||`` "woosh" for 300 ms. Are the two randomly chosen asteroids the same? (Can they be the same?)

https://makecode.com/_XjECpqX0eRdh


## Student Task #2: Bigger and Better Fireworks

1. Start with the code from example #2b
2. Add a ``||loops:repeat||`` loop in the ``||loops:on start||`` that will create 100 fireworks (hint: make sure to surround all three blocks in the ``||loops:on start||``, to maintain the same behavior for all fireworks)
3. Use ``||sprites:array of sprites of kind||`` block to get an array of all the fireworks in the ``||controller:on any button pressed||`` event, and store it in the variable ``||variables:sprite list||``
4. Add an ``||logic:if||`` condition around the rest of the ``||controller:on any button pressed||``, so that the rest of the event only occurs if the ``||arrays:length of array sprite list||`` is greater than 0
5. Select a firework from ``||variables:sprite list||`` at random, and store that in the variable ``||variables:origin||``. Replace all references to ``||variables:firework||`` in the event to refer to this new variable
6. **Challenge:** change the ``||controller:on any button pressed||`` event to only trigger when the ``||controller:A||`` button is pressed, and make a ``||controller:on B button pressed||`` event that will create a new firework. Make sure to use either a ``||functions:function||`` or an ``||sprites:on created sprite of kind||`` event to reduce the redundancy between the new event and the ``||loops:on start||`` block

https://makecode.com/_LKd4yMYVCHvD



## Student Task #3: Tracking with all sprites of a kind

1. Start with the code from example #3
2. Add a ``||loops:repeat 20 times||`` loop that creates 20 enemies in random positions on the screen
3. In the ``||game:on game update||`` event, use ``||sprites:array of sprites of kind Enemy||`` in a loop to make all the enemies follow the player, not just the last one that was created
4. **Challenge:** add an ``||sprites:on overlap||`` event between two enemies, that moves both enemies between -2 and 2 pixels in both directions, so that the enemies no longer stack on top of each other 

https://makecode.com/_ch39HFM7xPkV



## What did we learn?

1. How could using arrays of sprites influence the way you design games? List at least **two** ways.
2. How is using ``||sprites:array of sprites of kind||`` easier than keeping track of all the sprites in an array manually?

### ~hint

### Possible Solutions: Answers may vary

1. A few examples: better organization of enemies, easier to change behavior of many sprites, etc.
2. It is less code to write and is simpler to understand

### ~



## Task Solution Appendix

### Task #1: Moving a random asteroid

```ts
enum SpriteKind {
    Player,
    Enemy,
    Asteroid
}
let my_sprite_array: Sprite[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    my_sprite_array[Math.randomRange(0, my_sprite_array.length - 1)].setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
my_sprite_array = [sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid), sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid), sprites.create(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, SpriteKind.Asteroid)]
```


### Student Task #2: Bigger and Better Fireworks
```ts
enum SpriteKind {
    Player,
    Enemy,
    Firework
}
let origin: Sprite = null
let firework: Sprite = null
let sprite_list: Sprite[] = []
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite_list = sprites.allOfKind(SpriteKind.Firework)
    if (sprite_list.length > 0) {
        origin = sprite_list[Math.randomRange(0, sprite_list.length)]
        for (let i = 0; i < 30; i++) {
            let projectile = sprites.createProjectile(img`
1 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player, origin)
            origin.setFlag(SpriteFlag.Ghost, true)
            projectile.image.fill(Math.randomRange(1, 14))
        }
        origin.destroy()
    }
})
for (let i = 0; i < 100; i++) {
    firework = sprites.create(img`
1 1 1 
1 2 1 
1 1 1 
`, SpriteKind.Firework)
    firework.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    firework.setFlag(SpriteFlag.Ghost, true)
}
```


### Student Task #3: Tracking with all sprites of a kind
```ts
enum SpriteKind {
    Player,
    Enemy
}
let enemy: Sprite = null
let player: Sprite = null
player = sprites.create(img`
1 . . . 1 
1 . . . 1 
. . . . . 
. . . . . 
1 . . . 1 
. 1 1 1 . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
for (let i = 0; i < 20; i++) {
    enemy = sprites.create(img`
2 . . 2 
. . . . 
. 2 2 . 
2 . . 2 
`, SpriteKind.Enemy)
    enemy.x += Math.randomRange(-40, 40)
    enemy.y += Math.randomRange(-40, 40)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (player.x > value.x) {
            value.vx = 2
        } else {
            value.vx = -2
        }
        if (player.y > value.y) {
            value.vy = 2
        } else {
            value.vy = -2
        }
    }
})
```