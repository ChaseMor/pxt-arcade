# Activity: Making and Using Extensions

## Using Shared Code

## Example #1: Using a package

## Student Task #1: Build an Obstacle Course

### Standard:

https://makecode.com/_YRsTvUU7bU6j

### Challenge:

https://makecode.com/_e8eUJ3MHkHTz


## Sharing Code

## Example #2: Spawn a single bird

[Completed example](https://makecode.com/_1YWPhJVAFMkx)

## Student Task #2: Making the stars go by

### Standard:

[standard extension code](https://makecode.com/_3Ku5qeiwed0x)

[using standard extension](https://makecode.com/_76t872Ro26yu)

[challenge extension](https://makecode.com/_CvyMEtEsxith)

[using challenge extension](https://makecode.com/_Frc5AHcmzW3u)


## What did we learn?

1. How could sharing and importing projects help manage a group project with four or more students?
2. What is one benefit to importing code from a project versus just copying the code into the project? You might find it useful to discuss task #2 in your response to this question.

### ~hint

Possible answers:

1. Sharing and importing code can make it so individuals can work on different parts of the code on their own before bringing it all together. Importing the code could make it easier to keep things up to date.
2. Importing the code helps keep things separated - you don't have to clog up your working area / space with a lot of unrelated content. Easier to update sections of the code as things are changed.

### ~

## Rubrics

### task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
|  | Successfully imported Darts extension in task #1 | Successfully created a 'star background' in task #2 | Successfully created a link to import task #2 into other projects | Completed challenge code |

### Score = \_\_\_\_\_\_ /10

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered one of the questions fully, or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10

```package
darts=github:jwunderl/pxt-darts#v0.0.15
```


## Task Solutions Appendix

### Task #1: Build an Obstacle Course

#### Standard:

```ts
enum SpriteKind {
    Player,
    Enemy,
    Soccer_Ball,
    Goal,
    Obstacle
}
let princess3: Sprite = null
let princess2: Sprite = null
let princess1: Sprite = null
let net: Sprite = null
let myDart: Dart = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
myDart = Darts.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . e e e . . . . 
. . . . . . e e e e d e e . . . 
. . . . . e e d d d d d e e . . 
. . . . e e d d d d d d d e . . 
. . . . e d d d d d d d d e . . 
. . . e e d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e e e d d d d d e e e . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Soccer_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
net = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Goal)
net.setPosition(150, 110)
princess1 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Obstacle)
princess1.setPosition(100, 100)
princess2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 60)
princess3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 5 f f f f 3 f f f . . 
. . . f d d 3 3 3 3 f d f . . . 
. . . f d d f 3 3 5 3 f . . . . 
. . . . f f 3 5 5 3 3 f . . . . 
. . . . . . f f 3 3 f f . . . . 
. . . . . . . . f f . . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 50)
```

#### Challenge

```ts
enum SpriteKind {
    Player,
    Enemy,
    Soccer_Ball,
    Goal,
    Obstacle
}
let princess3: Sprite = null
let princess2: Sprite = null
let princess1: Sprite = null
let net: Sprite = null
let myDart: Dart = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.stopDart()
})
sprites.onOverlap(SpriteKind.Soccer_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
myDart = darts.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . e e e . . . . 
. . . . . . e e e e d e e . . . 
. . . . . e e d d d d d e e . . 
. . . . e e d d d d d d d e . . 
. . . . e d d d d d d d d e . . 
. . . e e d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e d d d d d d d d d e . . 
. . . e e e d d d d d e e e . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Soccer_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
net = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 1 1 1 1 1 1 . . 
. . . . . . . 1 . . . . 1 1 . . 
. . . . . . . 1 . . . 1 . 1 . . 
. . . . . . . . 1 . 1 . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . . . . 1 . . 
. . . . . . . 1 . . . . . 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Goal)
net.setPosition(150, 110)
princess1 = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Obstacle)
princess1.setPosition(100, 100)
princess2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 60)
princess3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 5 f f f f 3 f f f . . 
. . . f d d 3 3 3 3 f d f . . . 
. . . f d d f 3 3 5 3 f . . . . 
. . . . f f 3 5 5 3 3 f . . . . 
. . . . . . f f 3 3 f f . . . . 
. . . . . . . . f f . . . . . . 
`, SpriteKind.Obstacle)
princess2.setPosition(140, 50)
```


### Example #2: Spawn a single bird

```ts
scene.setBackgroundColor(10)
```

This is the only code necessary after running the birdy extension that includes


```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
projectile = sprites.createProjectile(img`
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 . . 
. . . . . . . . . 1 . 1 f 1 1 . 
. . . . . . . . 1 9 1 1 1 1 . . 
. . . . . . . 1 9 9 1 1 1 . . . 
. . . . . . . . 1 1 1 1 . . . . 
. . . . . . . . 5 . . 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0, SpriteKind.Player)
```

### Student Task #2: Making the stars go by

#### Standard

. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-90, -30), 0, SpriteKind.Player)
    projectile.y = Math.randomRange(0, scene.screenHeight())
    projectile.setFlag(SpriteFlag.Ghost, true)
})
```

[using standard extension](https://makecode.com/_76t872Ro26yu)

```blocks
info.startCountdown(10)
scene.setBackgroundColor(4)
```

[challenge extension](https://makecode.com/_CvyMEtEsxith)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let meteor: Sprite = null
let projectile: Sprite = null
let starGazer: Sprite = null
starGazer = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . d d d . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . d d d d d d d d d . . . . . . . . . . . . . . 
. . . . . . . d d d d d d d d d d d d d d . . . . . . . . . . . 
. . . . . . d d d d d d d d d d d d d d d d . . . . . . . . . . 
. . . . . d d d d d d d d d d d d d d d d d d . . . . . . . . . 
. . . . . d d d d 1 f 1 d d d d 1 f 1 d d d d d . . . . . . . . 
. . . . . d d d d 1 e 1 d d d d 1 e 1 d d d d d . . . . . . . . 
. . . . d d d d d d d d d d d d d d d d d d d d . . . . . . . . 
. . . . d d d d d d d d d d d d d d d d d d d d d . . . . . . . 
. . . . d d d d d d d d d d d d d d d d d d d d d . . . . . . . 
. . . . . d d d d d d d d d d d d d d d d d d d d . . . . . . . 
. . . . . d d d d d d d d d d d d d d d d d d d . . . . . . . . 
. . . . . a a a d d d a a a a d a a a a d d d a . . . . . . . . 
. . . . a a a a a a a a a a a a a a a a a a a a . . . . . . . . 
. . . . a a a a a a a a a a a a a a a a a a a a . . . . . . . . 
. . . . . a a a a a a a a a a a a a a a a a a a . . . . . . . . 
. . . . . a a a a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . a a a a a a a a a a a a a a a a . . . . . . . . . . 
`, SpriteKind.Player)
starGazer.setPosition(75, 100)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . 1 . . . . . . . . . . 
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-90, -30), 0, SpriteKind.Player)
    projectile.y = Math.randomRange(0, scene.screenHeight())
    projectile.setFlag(SpriteFlag.Ghost, true)
})
game.onUpdateInterval(2000, function () {
    meteor = sprites.createProjectile(img`
. . . . . . . . c c c c . . . . 
. . . . c c c c c c c c c . . . 
. . . c f c c a a a a c a c . . 
. . c c f f f f a a a c a a c . 
. . c c a f f c a a f f f a a c 
. . c c a a a a b c f f f a a c 
. c c c c a c c b a f c a a c c 
c a f f c c c a b b 6 b b b c c 
c a f f f f c c c 6 b b b a a c 
c a a c f f c a 6 6 b b b a a c 
c c b a a a a b 6 b b a b b a . 
. c c b b b b b b b a c c b a . 
. . c c c b c c c b a a b c . . 
. . . . c b a c c b b b c . . . 
. . . . c b b a a 6 b c . . . . 
. . . . . . b 6 6 c c . . . . . 
`, 50, 0, SpriteKind.Player)
})
```

[using challenge extension](https://makecode.com/_Frc5AHcmzW3u)

```blocks
scene.setBackgroundColor(2)
info.startCountdown(10)
```

Extension code

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . 1 . . . . . . . . . . 
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-90, -30), 0, SpriteKind.Player)
    projectile.y = Math.randomRange(0, scene.screenHeight())
    projectile.setFlag(SpriteFlag.Ghost, true)
})
```