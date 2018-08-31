# Activity: Sprite Overlap & Events - Part 2

In this activity the student will continue to work with:
* ``||sprites:on overlap event||`` with a SpriteKind (e.g. - `Cloud`) applied to several identical sprites
* Define multiple SpriteKind overlap events and actions

## Concept: SpriteKind Overlap Event "bump" action

## Example 1: bump action from overlap event

### ~hint

The code to make a bump can be difficult to grasp for students. Break it down for them step by step.

Start with the behavior. The faster the velocity the farther the bump in the opposite direction. 
* The code uses (velocity)*(-1) to change the position. The value of velocity is number (positive or negative).
* The number generated above is now the opposite sign (we multiplied by -1)
* Using the velocity value that is the opposite we can adjust the position.


### Give an example to students

A car going 10 meters/second bumps -10 centimeters.

Ask: what if going -100 meters/second? [Answer] bumps +100 centimeters - always note the sign Changes (positive/negative swap)

### Review the bump code

This is the code that bumps the helicopter 

```block
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
```

### ~

### ~hint

Ask students for the values of sprite .x and sprite.y if sprite.vx = -25 and sprite .vy = 30

### Review the shake code

This code shakes the cloud by moving it 1 pixel and then back

```block
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
```

It moves the spite 1 pixel, pauses and then moves back. 

### ~

## Student Task #1: Soft Landing

### ~hint

Continue to quiz students throughout the course on how to use the short method to give a sprite motion using ``||controller:dx (left-right buttons)||``  type controller block.

### ~

```block
game.onUpdate(function () {
    copter.vx += controller.dx()
    copter.vy += controller.dy()
})
```
### Solution

https://makecode.com/_Wjfcstfppdbu

## Student Task #2: Add a new unique sprite with SpriteKind of "Cloud" 

### ~hint

Continue to reinforce to students that SpriteKind controls overlap events. Any and all sprites with the same SpriteKind designation will behave the same when used in an overlap event. So for a SpriteKind of "Cloud" - regardless if using an image of a "cloud" or a "shoe" or a single pixel "dot" will result in the same code block being run for an overlap event. In our example it results in the "bump" simulation code.

### ~

https://makecode.com/_iEHdaHKjmDcU

## What did we learn?

1. Describe how a ``||sprites:Kind||`` can improve code (for example, how it can make programming easier, more powerful, more efficient, ...). 
2. Explain why in creating a "bump" effect negative `X` and `Y` velocities are used to change the `X` and `Y` positions. 

### ~hint

### Possible Solutions:

1. It creates more organization of what is going on
2. We want the sprite to move continually to a position and then continually move back. If we just change the position, the "bump" will look abrupt, almost as if the sprite is teleporting

### ~


## Rubrics

### Overlap task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Overlap & Events | Completed tasks | Fully completed both tasks | Completed all tasks and at least 1 Challenge | Completed all tasks and all challenge code |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric 

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answers for both questions | Explanations address all questions fully | All answers have clear explanations with at least 2 examples for question 1 | Used an exceptional explanation (such as a diagram) in question 2 |

### Score = \_\_\_\_\_\_ /10  




## Task Solution Appendix

### Task 1: Soft Landing

```ts
enum SpriteKind {
    Helicopter,
    Cloud,
    LandingPad,
    Player,
    Enemy,
    Forest
}
let landing: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let tree: Sprite = null
let copter: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += -2
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
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Forest, function (sprite, otherSprite) {
    sprite.vx = -30
    sprite.vy = -30
    sprite.x += -15
    pause(100)
    sprite.x += 17
    pause(200)
    sprite.y += 12
    pause(200)
    sprite.y += -7
    pause(200)
    sprite.y += 12
    pause(200)
    game.over()
})
game.splash("Cloud Bump", "flying with control pad")
scene.setBackgroundColor(9)
tree = sprites.create(img`
. 6 6 . . . . . . . . . 6 6 6 6 . . . . 6 6 7 6 . . . 6 6 . . . 
6 6 7 6 6 6 6 6 6 6 . 6 6 7 7 7 6 6 6 6 7 6 6 7 6 6 6 7 7 6 7 . 
7 6 6 7 7 7 7 6 7 6 6 6 7 6 6 7 6 7 7 6 7 7 7 6 7 6 6 7 7 7 7 6 
6 7 7 6 7 6 7 7 7 7 6 6 7 7 6 7 7 7 7 7 7 6 7 7 7 6 7 7 7 7 7 7 
6 7 6 7 7 7 7 7 6 7 7 6 7 7 6 7 7 7 7 6 7 7 7 7 6 6 7 7 6 7 7 6 
6 6 7 7 6 7 7 6 7 6 7 6 6 7 7 7 6 7 6 7 7 7 7 6 6 6 7 7 7 7 7 7 
. 6 7 6 7 7 6 7 7 7 7 7 6 6 7 7 7 6 7 7 7 6 7 6 6 7 7 7 6 7 7 7 
. 6 6 7 6 7 7 7 6 7 6 7 . 6 7 7 6 7 7 7 6 6 7 7 7 6 7 7 7 7 6 6 
. 6 6 6 6 7 6 7 7 7 7 7 . 6 6 7 7 7 7 7 7 7 7 7 . 6 7 7 7 6 7 7 
. . . . 6 . 7 7 7 . . . . . 6 6 e e e e 7 7 6 . . 6 6 7 7 7 7 6 
. . . . . . . e e . . . . . . . e e c e . . . . . . 6 6 6 7 6 . 
. . . . . . . . e e e . . . . e e c e e . . e e e e e 6 e . . . 
. . . . . . . . e e e e e . . e e c e e e e e e e e e e e . . . 
. . . . . . . . . e e e e e e e c c e e e e e e e e e . . . . . 
. . . . . . . . . . e e e e e e c e e e e e e e e . . . . . . . 
. . . . . . . . . . . e e c e e c e e e e e . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e e . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e e e . . . . . . . . . . . . . . 
`, SpriteKind.Forest)
tree.setPosition(140, 104)
copter = sprites.create(img`
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
copter.setFlag(SpriteFlag.StayInScreen, true)
// Create and place "clouds"  Sprites
cloud1 = sprites.create(img`
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
`, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
cloud2 = sprites.create(img`
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
`, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
cloud3 = sprites.create(img`
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
`, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 125
game.onUpdate(function () {
    copter.vx += controller.dx()
    copter.vy += controller.dy()
})
```

### Task 2: Add a new unique sprite with SpriteKind of "Cloud"

```ts
enum SpriteKind {
    Helicopter,
    Cloud,
    LandingPad,
    Player,
    Enemy,
    Forest
}
let landing: Sprite = null
let cloud3: Sprite = null
let cloud2: Sprite = null
let cloud1: Sprite = null
let tree: Sprite = null
let shoe: Sprite = null
let copter: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    game.splash("Perfect Landing!")
    sprite.y += -2
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
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Forest, function (sprite, otherSprite) {
    sprite.vx = -30
    sprite.vy = -30
    sprite.x += -15
    otherSprite.say("ouch!")
    pause(100)
    sprite.x += 17
    pause(200)
    sprite.y += 12
    pause(200)
    sprite.y += -7
    pause(200)
    sprite.y += 12
    pause(200)
    game.over()
})
game.splash("Cloud Bump", "flying with control pad")
scene.setBackgroundColor(9)
// Create and place "clouds"  Sprites
shoe = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 9 2 2 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . 
. 2 2 9 2 9 2 2 2 2 . . 2 . . . 2 . . . . . . . . . . . . . . . 
. 2 2 2 9 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 9 9 2 2 2 2 2 9 9 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 9 9 9 9 2 2 2 9 9 2 2 2 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 9 9 2 2 9 9 2 9 9 2 2 2 2 2 2 2 2 2 2 2 f . . . 
. . 2 2 2 2 2 2 9 2 2 2 2 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 f f . . 
. . 2 2 2 2 2 9 9 2 2 2 2 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f . 
. . f 2 2 2 2 2 2 2 2 f f f f f f f 2 2 2 2 2 2 2 2 2 2 f f f f 
. . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
. . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Cloud)
shoe.setPosition(25, 104)
tree = sprites.create(img`
. 6 6 . . . . . . . . . 6 6 6 6 . . . . 6 6 7 6 . . . 6 6 . . . 
6 6 7 6 6 6 6 6 6 6 . 6 6 7 7 7 6 6 6 6 7 6 6 7 6 6 6 7 7 6 7 . 
7 6 6 7 7 7 7 6 7 6 6 6 7 6 6 7 6 7 7 6 7 7 7 6 7 6 6 7 7 7 7 6 
6 7 7 6 7 6 7 7 7 7 6 6 7 7 6 7 7 7 7 7 7 6 7 7 7 6 7 7 7 7 7 7 
6 7 6 7 7 7 7 7 6 7 7 6 7 7 6 7 7 7 7 6 7 7 7 7 6 6 7 7 6 7 7 6 
6 6 7 7 6 7 7 6 7 6 7 6 6 7 7 7 6 7 6 7 7 7 7 6 6 6 7 7 7 7 7 7 
. 6 7 6 7 7 6 7 7 7 7 7 6 6 7 7 7 6 7 7 7 6 7 6 6 7 7 7 6 7 7 7 
. 6 6 7 6 7 7 7 6 7 6 7 . 6 7 7 6 7 7 7 6 6 7 7 7 6 7 7 7 7 6 6 
. 6 6 6 6 7 6 7 7 7 7 7 . 6 6 7 7 7 7 7 7 7 7 7 . 6 7 7 7 6 7 7 
. . . . 6 . 7 7 7 . . . . . 6 6 e e e e 7 7 6 . . 6 6 7 7 7 7 6 
. . . . . . . e e . . . . . . . e e c e . . . . . . 6 6 6 7 6 . 
. . . . . . . . e e e . . . . e e c e e . . e e e e e 6 e . . . 
. . . . . . . . e e e e e . . e e c e e e e e e e e e e e . . . 
. . . . . . . . . e e e e e e e c c e e e e e e e e e . . . . . 
. . . . . . . . . . e e e e e e c e e e e e e e e . . . . . . . 
. . . . . . . . . . . e e c e e c e e e e e . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e e . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c c e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . . e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e c e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e c e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e e e . . . . . . . . . . . . . . 
`, SpriteKind.Forest)
tree.setPosition(140, 104)
copter = sprites.create(img`
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
copter.setFlag(SpriteFlag.StayInScreen, true)
// Create and place "clouds"  Sprites
cloud1 = sprites.create(img`
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
`, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
cloud2 = sprites.create(img`
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
`, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
cloud3 = sprites.create(img`
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
`, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40
landing = sprites.create(img`
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.LandingPad)
landing.y = 125
game.onUpdate(function () {
    copter.vx += controller.dx()
    copter.vy += controller.dy()
})
```
