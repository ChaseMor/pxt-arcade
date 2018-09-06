## Concept: Random Clouds - on created event with spawn SpriteKind 

## Example 1: random clouds
## Student Task #1: More Random Clouds

### ~hint

Students can use a local variable within ``||sprites:on created||`` event block since it is used only in the scope of that block of code (not accessible outside that code block of code). This is variable scope, which is not a main concept for this lesson or for unit 1. 

For now we say the variable is used for a short time in the event and then goes away. We will address local scope in later @boardname@ Intro CS units.

### ~
https://makecode.com/_UPTKViRTtR1e

## What did we learn? 
1. Describe how a ``||sprites:Kind||`` label is used in generating a sprite using ``||sprites:create empty sprite||`` block.
2. Explain what the ``||sprites:on created||`` block does for you.

### ~hint

**Additional Projects**
This is an opportunity to assign a project to students to create a game that will generate lots of sprites in random locations. Students can use a ``||game:on game update||`` block with ``||Sprite:create empty sprite||`` in a game with using ``||info:countdown||``. Students could start with a score of 100 and subtract for every overlap. Encourage students to be creative. Note that the way to cheat is to go off screen so ask students to solve that problem (by keeping onscreen).

https://makecode.com/_eUX2P1DmwUb7

**Additionally**, students can change the helicopter game to be something totally different. It could be an animal or people. The overlaps can have lots of different effects like destroy, change position or velocity or image.
 
More ideas in the projects lesson that follows.

### ~

## Rubrics

### Overlap task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Create & On-Create | Fully competed parts 1 through 3 of task #1 | Fully completed all part 4 of task #1 | Adds an overlap event for sprite in challenge section | Completed all parts of task #1 |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanations | Answered questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Included an exceptional explanation with original example, drawing or analogy |

### Score = \_\_\_\_\_\_ /10 




## Task Solution Appendix

### Task 1: More random clouds

```ts
enum SpriteKind {
    Helicopter,
    Cloud,
    Bird,
    Player,
    Enemy
}
let agent: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onCreated(SpriteKind.Bird, function (newBird) {
    newBird.setImage(img`
. . . . . 6 . . 
. . . . 6 6 . . 
. . . 6 6 . . 6 
5 6 6 6 6 6 6 . 
. . . 6 6 . . 6 
. . . . 6 6 . . 
. . . . . 6 . . 
. . . . . . . . 
`)
    newBird.x = Math.randomRange(10, screen.width - 10)
    newBird.y = Math.randomRange(10, screen.height - 10)
})
sprites.onCreated(SpriteKind.Cloud, function (newCloud) {
    newCloud.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 8 . . . . . . 
. . . 1 1 8 8 8 1 1 1 1 1 1 . . 
. 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
. 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
. 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
. . . . 1 1 8 8 1 1 8 8 1 . . . 
. . . . . . 8 8 8 1 1 1 1 . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    newCloud.x = Math.randomRange(16, screen.width - 16)
    newCloud.y = Math.randomRange(20, screen.height - 75)
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Bird, function (sprite, otherSprite) {
    otherSprite.vy = -75
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
game.splash("Generated Clouds", "on Sprite created")
scene.setBackgroundColor(9)
agent = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . 
. . . . . f f f f . . . . . . . . . f f f f f f f . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . e f . . e e e . . . . . . . . . . . 
. . . . f . . . . . . . . . e . . e e f f 1 1 . . . . . . . . . 
. . f f f f f f f f . . . . e e e 2 f . 1 1 1 1 . . . . . . . . 
. . . . . f . . . . . . e e e 2 2 2 f 1 1 1 1 1 . . . . . . . . 
. . . . . f . . . e e e 2 2 2 2 2 2 f 1 1 1 1 1 e . . . . . . . 
. . . . . f e e e e 2 2 2 2 2 2 2 2 f f 1 1 f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . e e 2 2 2 2 2 2 2 2 2 2 2 f f f f f 2 e . . . . . . . 
. . . . . . e e 2 2 2 2 2 2 e 2 2 2 2 2 2 f f 2 e . . . . . . . 
. . . . . . . e e 2 2 2 2 2 e e 2 2 2 2 2 2 2 e e . . . . . . . 
. . . . . . . . e e e e 2 e e e 2 2 2 2 2 2 e e . . . . . . . . 
. . . . . . . . . . . f e . . . e e e e e e . . . . . . . . . . 
. . . . . . . . . . . f . . . . . . . . f . . . . . . . . . . . 
. . . . . . f . . . . f . . . . . . . . f . . . . . f . . . . . 
. . . . . . f f f f f f f f f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Helicopter)
agent.setFlag(SpriteFlag.StayInScreen, true)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Cloud)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
sprites.createEmptySprite(SpriteKind.Bird)
```

### Additional Projects

## What did we learn? 
1. Describe how a ``||sprites:Kind||`` label is used in generating a sprite using ``||sprites:create empty sprite||`` block.
2. Explain what the ``||sprites:on created||`` block does for you.


### ~hint

### Possible Solutions:

1. The ``||sprites:Kind||`` label specifies what type of sprite is being created
2. The ``||sprites:on created||`` contains the code that will run when a sprite of the kind specified is created

###

### ~hint

**Additional Projects**
This is an opportunity to assign a project to students to create a game that will generate lots of sprites in random locations. Students can use a ``||game:on game update||`` block with ``||Sprite:create empty sprite||`` in a game with using ``||info:countdown||``. Students could start with a score of 100 and subtract for every overlap. Encourage students to be creative. Note that the way to cheat is to go off screen so ask students to solve that problem (by keeping onscreen).

```ts
enum SpriteKind {
    Player,
    Enemy,
    star
}
let mySprite: Sprite = null
let sprite: Sprite = null
sprites.onCreated(SpriteKind.star, function (sprite) {
    sprite.setImage(img`
5 . . . 5 . . 5 
. 5 . . 5 . 5 . 
. . 5 5 5 5 . . 
. . 5 5 5 5 5 5 
5 5 5 5 5 5 . . 
. . 5 5 5 5 . . 
. 5 . 5 . . 5 . 
5 . . 5 . . . 5 
`)
    sprite.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
})
game.splash("Avoid Obstacles")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 1 e e e e e 1 . . . . . 
. . . 1 e e e e e e e 1 . . . . 
. . 1 e e e e e e e e e 1 . . . 
. . 1 e e f e e e f e e 1 . . . 
. 1 e e e e e e e e e e e . . . 
. . 1 e e e e 4 e e e e 1 . . . 
. . 1 e e e e e e e e e 1 . . . 
. . . 1 e e e 1 e e e 1 . . . . 
. . . . 1 e e e e e 1 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
info.setScore(100)
info.startCountdown(10)
game.onUpdateInterval(100, function () {
    sprites.createEmptySprite(SpriteKind.star)
})

```