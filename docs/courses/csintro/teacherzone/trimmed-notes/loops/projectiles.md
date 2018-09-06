# Activity: Projectile Sprites

In this activity, the student will be introduced to:
* ``||sprites:projectile||`` sprites
* ``||game:on game update every||``
* ``||math:pick random||``

## Concept: Flying Birds!
## Example: Bird projectile

### ~hint

Have students experiment with the example for a few minutes with different values for ``||sprites:vx||`` and ``||sprites:vy||`` before moving on; have them make a hypothesis on how a negative ``||sprites:vx||`` or ``||sprites:vy||`` might change the result

### ~

## Student Task 1: Make a ball fall down

Then make a second ball go up

https://makecode.com/_ese4kJDJ2eHE

## Student Task 2a: add vertical projectiles that move down the screen

### Normal Solution

https://makecode.com/_iDp4cVW0hTCv

### Challenge solution:

hhttps://makecode.com/_U77Hgo3pxfYo

## Projectiles as sprites

## Student Task #2b: Projectiles with loops

### ~hint

Ask the students why this creates 13 projectiles, instead of just 12.
Answer: there is an extra value because the loop is including both 0 and 12.

### ~

https://makecode.com/_HUgdUmbwgHx6 

## Corner Projectiles

### Solution: 

https://makecode.com/_WLvC2v9TwfEc

### Challenge: 

https://makecode.com/_f334JygXU4Ya 


## What did we learn?

1. Describe two benefits of using projectiles rather than normal sprites.
2. How did using a loop in this section help reduce the amount of blocks that were used?
3. **Challenge:** Create a hypothesis on why making projectiles have ``||sprite:ghost on||`` might be make your game run faster than leaving it off.

### ~hint

Does the game need to check whether a sprite is overlapping another if either is a ghost? No, because ghosts will just move through the other sprite without overlapping anyways.

### ~


## Rubrics

### Projectiles task rubric

| Student Tasks | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Student Tasks | Student made the ball fall down and another sprite move up in task #1 | Student made meteors fall from top, and changed score successfully in task #2 | Student successfully completed challenge code in task #1 | Student successfully completed challenge code in task #2 |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric 
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 1 question fully, or answered both questions but parts are unclear or lack detail | Explanations address both questions fully | All answers have clear explanations | Addressed challenge question reasonably |

### Score = \_\_\_\_\_\_ /10 




## Task Solution Appendix

### Task 1: Make a ball fall down

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let sprite: Sprite = null
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.say("Hello!")
})
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . 8 9 9 8 9 8 9 8 9 9 8 . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 50, SpriteKind.Player)
projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 3 2 2 . . . . . . 
. . . . 2 3 3 3 3 3 2 . . . . . 
. . . 2 3 2 2 2 2 2 3 2 . . . . 
. . . 2 3 2 3 3 3 2 3 2 . . . . 
. . 2 3 3 2 3 2 3 2 3 3 2 . . . 
. . . 2 3 2 3 3 3 2 3 2 . . . . 
. . . 2 3 2 2 2 2 2 3 2 . . . . 
. . . . 2 3 3 3 3 3 2 . . . . . 
. . . . . 2 2 3 2 2 . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -50, SpriteKind.Player)
```

### Task 2a: add vertical projectiles that move down the screen

#### Standard

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite, Enemy) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.y = 100
controller.controlSprite(mySprite, 100, 0)
for (let i = 0; i < 100; i++) {
    projectile = sprites.createProjectile(img`
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
`, 0, 50, SpriteKind.Enemy)
    projectile.x = Math.randomRange(0, scene.screenWidth())
    info.changeScoreBy(1)
    pause(200)
}
game.over(true)
game.onUpdateInterval(200, function () {
	
})
```

#### Challenge

```ts
enum SpriteKind {
    Player,
    Enemy
}

let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite, Enemy) {
    game.over()
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.y = 100
controller.controlSprite(mySprite, 100, 0)
for (let i = 0; i < 100; i++) {
    projectile = sprites.createProjectile(img`
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
`, 0, 40 + Math.randomRange(0, 20), SpriteKind.Enemy)
    projectile.x = Math.randomRange(0, scene.screenWidth())
    info.changeScoreBy(1)
    pause(200)
}
game.over(true)

```

### Task 2b: Projectiles with loops

```ts
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
for (let index = 0; index <= 12; index++) {
    projectile = sprites.createProjectile(img`
. 6 . . . . . . . . . . . . . . 
. 6 6 . . . . . . . . . . . . . 
. 6 . 6 . . . . . . . . . . . . 
. 6 . . 6 . . . . . . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 6 6 6 6 6 6 6 8 6 . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . .
`, 40, 0, SpriteKind.Player)
    projectile.y = index * 10
    pause(300)
}
```
