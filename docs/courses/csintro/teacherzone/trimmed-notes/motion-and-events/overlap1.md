# Activity: Sprite Overlap & Events 1

In this activity the student will work with:
* SpriteKind
* On Overlap event with SpriteKind
* Ghost on - Ghost off
* destroy sprite

## Concept: Overlaps - SpriteKind Overlap Event

## Example 1: Two Sprite Overlap

## Student Task 1: Add actions to overlap events

https://makecode.com/_1A9gDMVA7Xrk

## set Sprite ghost on

## Example 2: Sprite Overlap - Ghost on 

## Student Task 2: Sprite Overlap - Ghost off and on

https://makecode.com/_dpW6FTgU3Ts7

### ~hint

Walk through the use of SpriteKind for overlap and how the local variables `sprite` and `otherSprite` get assigned to the overlapping items.

Also, check among several students for ability to create sprite motion with game pad using the shorter (dx/dy) method.

### ~

## Student Task 3: Create Overlap using 1 SpriteKind Player and multiple SpriteKind 

https://makecode.com/_8vvhL4RL0Xdy

## What did we learn? 

1. Describe how a ``||sprites:Kind||`` is used to detect overlap.
2. Suppose you have 2 or more sprites that have the same ``||sprites:Kind||``, and one of them triggers an overlap event. Explain how you can reference the sprite that was involved in the overlap event, rather than one of the other sprites of that ``||sprites:Kind||``.


### ~hint

### Possible Solutions:

1. The ``||sprites:Kind||`` allows us to distinguish our sprites. We can categorize them and create events for when only specific sprites overlap (e.g. Player and Enemy, Player and Coin, Enemy and Fireball, etc.)
2. The overlap event will create two variables that specify the sprites involved in the overlap. By using those variables instead of the ones created earlier, you can specify the sprites that are involved in the overlap

### ~

## Rubrics

### Overlap task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Overlap 1 | Fully competed 2 tasks | Fully completed all 3 tasks | Completed all 3 tasks and at least 1 challenge code | Completed all tasks and challenge Code |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanations | Answered questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Included an exceptional explanation with a creative example, drawing or analogy |

### Score = \_\_\_\_\_\_ /10        





## Task Solution Appendix

### Task 1: Add actions to overlap events

```ts
enum SpriteKind {
    Player,
    Enemy
}
let head: Sprite = null
let food: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("help", 500)
    pause(500)
    otherSprite.destroy()
    sprite.say("Yum!", 2000)
    pause(2000)
    sprite.destroy()
})
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Enemy)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
food.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
})
```

### Task 2: Sprite Overlap - Ghost off and on

```ts
enum SpriteKind {
    Player,
    Enemy,
    Food
}
let orange: Sprite = null
let apple: Sprite = null
let head: Sprite = null
let shoe: Sprite = null
let rock: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.say("help", 500)
    pause(500)
    otherSprite.destroy()
    sprite.say("Yum!", 2000)
    pause(2000)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("not food!", 1000)
    pause(1000)
    sprite.say("Yucky!", 1000)
})
rock = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e b . . . . . . . 
. . . . . e e b b d d . . . . . 
. . . e e e b b b b d d . . . . 
. . e e b d b b d b b d d . . . 
. . e b b d b b d d e b d . . . 
. e e b b d b d d d d d d . . . 
b e d b b e b d b d d b d . . . 
. e b b b d d b b d e b d . . . 
. e e b b d d d e b b d . . . . 
. . e e b d d d d b d . . . . . 
. . . e e b d b d d . . . . . . 
. . . . e e b b d . . . . . . . 
`, SpriteKind.Enemy)
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
. . . . . . . . . . . . . . . . . . . . f . . 9 9 9 9 9 9 9 9 9 
. . . . . . . . . . . . . . . . . . . . . f . 3 3 3 3 3 3 3 3 3 
. . . . . . . . . . . . . . . . . . . . . . f 3 3 3 3 3 3 3 3 3 
. . . . . . . . . . . . . . . . . f 3 3 3 f 3 3 3 3 3 5 5 5 3 3 
. . . . . . . . . . . . f 3 3 3 3 3 3 3 f 3 3 3 3 3 3 5 5 5 3 3 
. . . . . . f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 3 3 3 3 3 3 5 5 5 3 3 
. . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
. 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
apple = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Food)
orange = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
`, SpriteKind.Food)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
apple.setFlag(SpriteFlag.Ghost, true)
rock.setPosition(45, 95)
shoe.setPosition(90, 25)
apple.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
    head.y += controller.dy()
})
```

### Task 3: Sprite Overlap - Ghost off and on

```ts
enum SpriteKind {
    Player,
    Enemy,
    Food,
    Musical
}
let orange: Sprite = null
let apple: Sprite = null
let shoe: Sprite = null
let head: Sprite = null
let rock: Sprite = null
let horn: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.say("help", 500)
    pause(500)
    otherSprite.destroy()
    sprite.say("Yum!", 2000)
    pause(2000)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.say("not food!", 1000)
    pause(1000)
    sprite.say("Yucky!", 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Musical, function (sprite, otherSprite) {
    music.ringTone(262)
    pause(1000)
    music.stopAllSounds()
})
horn = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 . . 7 7 7 . 7 7 7 . 7 7 7 . . . . . . . . . 
. . . . . . 7 7 5 7 7 . . 7 . . . 7 . . . 7 . . . . . . . . . . 
. . . . . 7 7 5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 7 . . . . . 
. . . . 7 7 5 5 5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 7 . . . . . 
. . . . . . 7 7 5 7 7 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
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
`, SpriteKind.Musical)
rock = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e b . . . . . . . 
. . . . . e e b b d d . . . . . 
. . . e e e b b b b d d . . . . 
. . e e b d b b d b b d d . . . 
. . e b b d b b d d e b d . . . 
. e e b b d b d d d d d d . . . 
b e d b b e b d b d d b d . . . 
. e b b b d d b b d e b d . . . 
. e e b b d d d e b b d . . . . 
. . e e b d d d d b d . . . . . 
. . . e e b d b d d . . . . . . 
. . . . e e b b d . . . . . . . 
`, SpriteKind.Enemy)
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
. . . . . . . . . . . . . . . . . . . . f . . 9 9 9 9 9 9 9 9 9 
. . . . . . . . . . . . . . . . . . . . . f . 3 3 3 3 3 3 3 3 3 
. . . . . . . . . . . . . . . . . . . . . . f 3 3 3 3 3 3 3 3 3 
. . . . . . . . . . . . . . . . . f 3 3 3 f 3 3 3 3 3 5 5 5 3 3 
. . . . . . . . . . . . f 3 3 3 3 3 3 3 f 3 3 3 3 3 3 5 5 5 3 3 
. . . . . . f 3 3 3 3 3 3 3 3 3 3 3 3 f 3 3 3 3 3 3 3 5 5 5 3 3 
. . 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
. 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
apple = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Food)
orange = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
`, SpriteKind.Food)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
horn.setPosition(85, 100)
apple.setFlag(SpriteFlag.Ghost, true)
rock.setPosition(45, 95)
shoe.setPosition(90, 25)
apple.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
    head.y += controller.dy()
})
```