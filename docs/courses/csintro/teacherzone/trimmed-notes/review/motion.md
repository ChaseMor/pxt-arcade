# Basic motion

![Block Bouncer](/static/courses/csintro1/review/block-bouncer.gif)

Start with this basic game code. We will alter this by adding the basic motion concepts that we learned to make the game above.

https://makecode.com/_aWg55R4fyAog

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . f . . . . . 
. . . . . . . f . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(8, 60)
scene.setTileMap(img`
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
`)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
```

### Make the sprite move:

1. Add velocity to the sprite so that it moves to the right with a velocity of 20
2. Make the sprite move up and down when the player presses the up and down buttons

https://makecode.com/_7mP7HcVLtcPc

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . f . . . . . 
. . . . . . . f . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(8, 60)
mySprite.vx = 20
controller.controlSprite(mySprite, 0, 50)
scene.setTileMap(img`
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
`)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
```

### Make the camera follow only in the x axis:

We want to be able to see the sprite move up and down on the screen, but the camera should follow the sprite to the right.

1. Create an ``||game:on game update||`` block 
2. Inside, use the ``||scene: center camera at||`` block to change the location of the camera. 

### ~hint
Hint: Remember, the camera should follow the x position of the sprite, but the camera's y position should always be halfway between the top and the bottom of the screen.
### ~

https://makecode.com/_Vk87LHHtF2cu

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Dizzy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . f . . . . . 
. . . . . . . f . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(8, 60)
mySprite.vx = 20
controller.controlSprite(mySprite, 0, 50)
scene.setTileMap(img`
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
`)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x, scene.screenHeight() / 2)
})
```


### Make the sprite bob up and down to simulate motion:
1. Create a ``||loops:forever||`` block
2. Inside, change the sprites position to be just above itself for a 200 ms, and then change it back
3. Use a ``||loops:pause||`` block at the end so that the who process takes half a second, or 500 ms

https://makecode.com/_Uf85rDFM1cXP

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . f . . . . . 
. . . . . . . f . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(8, 60)
mySprite.vx = 20
controller.controlSprite(mySprite, 0, 50)
scene.setTileMap(img`
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
`)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
forever(function () {
    mySprite.y += -2
    pause(200)
    mySprite.y += 2
    pause(300)
})
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x, scene.screenHeight() / 2)
})
```

### Make the sprite bounce back when they hit a wall:

1. Use the ``||scene: hits wall||`` block to add an event for when the sprite hits a purple wall
2. Make the sprite move backwards for 250 ms, the stop for 250 ms, then continue on at their normal velocity again

https://makecode.com/_3WcdcFRMVH4V

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    sprite.vx = -16
    pause(250)
    sprite.vx = 0
    pause(250)
    sprite.vx = 20
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . f . . . . f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . f . . . . . 
. . . . . . . f . . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(8, 60)
mySprite.vx = 20
controller.controlSprite(mySprite, 0, 50)
scene.setTileMap(img`
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 1 1 1 1 a 1 1 1 a 
`)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
forever(function () {
    mySprite.y += -2
    pause(200)
    mySprite.y += 2
    pause(300)
})
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x, scene.screenHeight() / 2)
})
```

