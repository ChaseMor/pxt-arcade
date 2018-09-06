# Activity: Using the Corgi Extension

## Using the corgio package

## Student Task #1: Making your first corgio

### Standard:

https://makecode.com/_YHH3j1ivcT7J

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = null
myCorg = corgi.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
```

### Challenge:

https://makecode.com/_6bffmgTDy3FT

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myCorg.bark()
})
myCorg = corgi.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.addToScript("hello")
myCorg.addToScript("goodbye")
myCorg.addToScript("jump")
myCorg.addToScript("sit")
```

## Example #1: Corgi with tile map

## Student Task #2: Creating a side scroll game

https://makecode.com/_cHm2paXjLcfU

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = null
myCorg = corgi.create(SpriteKind.Player)
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
d d d d d d d d d d d d d d d d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d d d d d d d d d d d d d d d d 
`, true)
myCorg.horizontalMovement()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.follow()
```

## Goals, Puzzles, and Hazards

## Student Task #3: Creating an interesting level

https://makecode.com/_EFT54zAabUPf

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Princess
}
let princess: Sprite = null
let myCorg: Corgi = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    otherSprite.say("Thank you!")
    pause(1000)
    game.over(true)
})
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(false)
})
myCorg = corgi.create(SpriteKind.Player)
scene.setTileMap(img`
1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 2 1 1 2 1 1 1 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 2 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 2 1 1 2 1 1 1 1 1 1 2 1 1 2 2 2 1 1 2 2 2 2 1 1 2 2 2 1 1 1 1 2 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 1 1 2 1 1 2 2 2 2 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 2 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 2 1 1 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 2 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 2 7 7 1 1 1 1 7 7 2 1 1 1 1 2 7 7 7 7 7 7 7 7 7 7 7 7 7 2 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
e e e e e f f e e e e e e f f e 
f f f f f f f f f f f f f f f f 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f e e e e e e e f f e e e e e 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
d d d d d d d d d d d d d d d d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 d d d d d d d d d d 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 1 d d d d d d 1 1 1 1 d 
d 1 1 1 d d d d d d d d 1 1 1 d 
d d d d d d d d d d d d d d d d 
`, true)
scene.setTile(7, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 4 4 4 4 2 4 4 4 2 4 4 4 2 2 
2 2 4 2 2 4 2 4 2 4 2 4 2 2 4 2 
2 2 4 2 2 4 2 4 2 4 2 4 2 2 4 2 
2 2 4 4 4 2 2 4 4 4 2 4 2 2 4 2 
2 2 4 2 2 4 2 4 2 4 2 4 2 2 4 2 
2 2 4 4 4 4 2 4 2 4 2 4 4 4 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.follow()
myCorg.updateSprite()
princess = sprites.create(img`
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
`, SpriteKind.Princess)
princess.x = 928
princess.ay = 100
```

## What did we learn?

1. How did using an extension impact the development of this platformer? What took up the largest portion of your time while doing this activity?
2. How difficult was it to balance making your level interesting but still a game the user can complete? Where there any portions of the level that you had to change in order to make the game playable?

### ~hint

Possible Solutions:

1. Effectively any answer works here; "using an extension made it so I could focus on the level design without worrying about the gameplay as much yet" and "creating a level that is both hard and not impossible took some reworking / had to figure out how to put dangerous obstacles"
2. "It was a bit harder than I expected to create a level that was interesting to players without being too hard" and "I had to move the obstacle away from the landing spot mid way through the level as it was too hard to avoid otherwise"

### ~

## TODO: rubric

```package
corgio=github:jwunderl/pxt-corgio#v0.0.12
```