# Activity: Reduce redundancy using functions

## Example #1a: Movement

## Example #1b: Movement using functions

## Student Task #1: Simplification

### Standard:

https://makecode.com/_XMh2UoYCRUFi

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function compress() {
    projectile.y += -30
    pause(500)
    music.playTone(262, music.beat(BeatFraction.Half))
    pause(500)
}
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 2 2 2 2 5 2 2 2 2 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 f 5 f 5 5 5 f 5 5 . . . 
. . 5 5 f f f 5 f 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 2 2 2 2 5 2 2 2 2 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
pause(2000)
game.over()
```

### Challenge:

https://makecode.com/_AikJRUbTz9Tb

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function compress() {
    projectile.y += -30
    projectile.vx += -20
    pause(500)
    music.playTone(440, music.beat(BeatFraction.Half))
    pause(500)
}
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 2 2 2 2 5 2 2 2 2 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 f 5 f 5 5 5 f 5 5 . . . 
. . 5 5 f f f 5 f 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 2 2 2 2 5 2 2 2 2 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
game.over()
```

### ~hint

This challenge is intentionally fairly trivial - changing behavior that is repeated throughout your code becomes a lot easier (and less tedious) using functions, and the point of this challenge is to help demonstrate that.

### ~

## Student Task #2: Events

### Standard:

https://makecode.com/_V5geHb26eaPY

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function buttonPress() {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . . 3 2 3 . . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
game.splash("Press A and B!")
info.setScore(0)
info.startCountdown(15)
```

### Challenge:

https://makecode.com/_fs4iJ3PFj7ri

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function buttonPress() {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . . 3 2 3 . . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
    projectile.ax = Math.randomRange(-50, 50)
    projectile.ay = Math.randomRange(-50, 50)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
game.splash("Press A and B!")
info.setScore(0)
info.startCountdown(15)
```

## What did we learn?

1. Does the use of a function to capture repeated code make it easier or harder to make changes to those repeated sections in the future?
2. Are there any possible downsides to moving repeated code into a function?

### ~hint

Possible Answers:

1. It makes it easier to modify the code that is repeated if it's all going to be modified the same way. At this point, though, it might also a bit harder if only one is going to change, then you would either need to use a parameter (not available in blocks) or a global variable to make the code behave differently for different calls; either way can be a reasonable response.
2. Trivial methods to catch minor redundancy can make you have to go back and forth to find out how a method works unnecessarily. If the sections of the code need to change in different ways, then it might be difficult to deal with it as functions. 

### ~

## Rubrics

### task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
|  | Made three functions in task #1 | Completed all parts of task #1 | Completed task #2 | Completed challenge code |

### Score = \_\_\_\_\_\_ /10

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered one of the questions fully, or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 



## Task Solution Appendix

## Student Task #1: Simplification

### Standard:

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function compress() {
    projectile.y += -30
    pause(500)
    music.playTone(262, music.beat(BeatFraction.Half))
    pause(500)
}
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 2 2 2 2 5 2 2 2 2 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 f 5 f 5 5 5 f 5 5 . . . 
. . 5 5 f f f 5 f 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 2 2 2 2 5 2 2 2 2 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
pause(2000)
game.over()
```

### Challenge:

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function compress() {
    projectile.y += -30
    projectile.vx += -20
    pause(500)
    music.playTone(440, music.beat(BeatFraction.Half))
    pause(500)
}
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 2 2 2 2 5 2 2 2 2 5 5 . . . 
. . 5 2 5 5 5 5 2 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 f 5 f 5 5 5 f 5 5 . . . 
. . 5 5 f f f 5 f 5 5 5 5 . . . 
. . 5 5 f 5 f 5 f 5 f 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 2 2 2 2 5 2 2 2 2 5 . . . 
. . 5 5 5 2 5 5 5 5 2 5 5 . . . 
. . 5 5 2 5 5 5 5 2 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -20, 0, SpriteKind.Player)
compress()
game.over()
```

## Student Task #2: Events

### Standard:

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function buttonPress() {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . . 3 2 3 . . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
game.splash("Press A and B!")
info.setScore(0)
info.startCountdown(15)
```

### Challenge:

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
function buttonPress() {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    info.changeScoreBy(1)
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . . 3 2 3 . . . . . . . . . 
. . . . 2 3 2 . . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100), SpriteKind.Player)
    projectile.setFlag(SpriteFlag.Ghost, true)
    projectile.ax = Math.randomRange(-50, 50)
    projectile.ay = Math.randomRange(-50, 50)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    buttonPress()
})
game.splash("Press A and B!")
info.setScore(0)
info.startCountdown(15)
```
