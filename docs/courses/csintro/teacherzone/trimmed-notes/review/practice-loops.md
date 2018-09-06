# Practice 1: Risky Life Bar

1. On any button press, add a loop block that will run 3 times.

2. Inside the loop, make it so that the life left is reset each time through the loop. It should be set to a random value from 0 to 5 inclusive. Also add a pause for 1 second after doing this so we can see the effect.

3. Make it so that after each round (surviving the randomized health trials) the score increases by one.

https://makecode.com/_4CRCoC7yY153

```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 3; i++) {
        info.setLife(Math.randomRange(0, 5))
        pause(1000)
    }
    info.changeScoreBy(1)
})
```

# Practice 2: Moving Sprites with Loops

1. Make a sprite of your choice and start it in the upper left corner (setting its x and y to 8 should be about right.)

2. We have to decide when we want our square movement to happen

3. Make the sprite gradually move to the right.

4. Repeat this process so that after the sprite finishes its loop for moving to the right, it immediately begins a loop to move down.

5. Instead of on button press activate the square movement, let's use another loop.

https://makecode.com/_ggYE7tJos3bu

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 20; i++) {
        mySprite.x += 5
        pause(100)
    }
    for (let i = 0; i < 20; i++) {
        mySprite.y += 5
        pause(100)
    }
    for (let i = 0; i < 20; i++) {
        mySprite.x += -5
        pause(100)
    }
    for (let i = 0; i < 20; i++) {
        mySprite.y += -5
        pause(100)
    }
})
mySprite = sprites.create(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 
8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 
8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 
8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 
8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 
8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
mySprite.setPosition(8, 8)
```

# Practice 3: Drawing multiple sprites with loops

1. On any button press, make your sprite appear at a random location.

https://makecode.com/_E7LHPt42t4TL

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite = sprites.create(img`
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
5 5 5 5 . 5 5 5 5 . . . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 . . . . 5 5 5 . . . . 
. . . 5 . . . . . . 5 5 . . . . 
`, SpriteKind.Player)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
```

2. We know that the sprite needs to appear 3 times total, and we just wrote the code for it to appear randomly once.

https://makecode.com/_PcJf577PMdyw

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 3; i++) {
        sprite = sprites.create(img`
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
5 5 5 5 . 5 5 5 5 . . . . . . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 5 . . . . 
. . . 5 5 . . . . 5 5 5 . . . . 
. . . 5 . . . . . . 5 5 . . . . 
`, SpriteKind.Player)
        sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    }
})
```

# Practice 4: Drawing a row / column of sprites with loops

https://makecode.com/_fMV16YKKsVKu

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let y = 0
let x = 0
function drawCol() {
    y = 25
    for (let i = 0; i < 4; i++) {
        mySprite = sprites.create(img`
. . . . . . . . 
. . 2 . . 2 . . 
. . 2 . . 2 . . 
. . 2 . . 2 . . 
2 . . . . . . 2 
. 2 . . . . 2 . 
. . 2 2 2 2 . . 
. . . . . . . . 
`, SpriteKind.Player)
        mySprite.setPosition(4, y)
        y += 15
    }
}
function drawRow() {
    x = 20
    for (let i = 0; i < 4; i++) {
        mySprite = sprites.create(img`
. . . . . . . . 
. . 2 . . 2 . . 
. . 2 . . 2 . . 
. . 2 . . 2 . . 
2 . . . . . . 2 
. 2 . . . . 2 . 
. . 2 2 2 2 . . 
. . . . . . . . 
`, SpriteKind.Player)
        mySprite.setPosition(x, 4)
        x += 15
    }
}
drawCol()
drawRow()
```

**Challenge:** Create a grid
Using row function, create a 4x4 grid of sprites

https://makecode.com/_6mcbkoKf0bfD

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let y = 0
let x = 0
function drawGrid() {
    x = 20
    for (let i = 0; i < 4; i++) {
        y = 25
        for (let i = 0; i < 4; i++) {
            mySprite = sprites.create(img`
. . . . . . . . 
. . 2 . . 2 . . 
. . 2 . . 2 . . 
. . 2 . . 2 . . 
2 . . . . . . 2 
. 2 . . . . 2 . 
. . 2 2 2 2 . . 
. . . . . . . . 
`, SpriteKind.Player)
            mySprite.setPosition(x, y)
            y += 15
        }
        x += 15
    }
}
drawGrid()
```