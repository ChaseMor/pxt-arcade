# Activity: Tile maps and arrays


## Student Task #1: Placing Sprites

1. Start with the code from example #1
2. Create 3 new sprites
3. Placing them in the upper right, bottom left, and bottom right corners of the screen using the ``||scene:on top of myTile place mySprite||`` block

https://makecode.com/_RHxEk94fqXda


## Student Task #2: Spawning Enemies

1. Start with the code from example #2b
2. Use ``||scene:array of all tiles||`` and a ``||loops:for element value in||`` loop to create an 'enemy' for each red tile on the screen. Place the enemies on top of the tiles
3. Add an ``||sprites:on overlap||`` event between the enemies and the player that causes the game to be over
4. **Challenge:** add another row of walls, and pick one at random to change into a non-wall tile. Are there any rows in which choosing randomly might make the game impossible, or too easy?

https://makecode.com/_71YdXDDueCV2


## Student Task #3: Fill out levels

1. Start with the code from example #3
2. For each level in the ``||variables:levels||`` array, add in obstacles to prevent the player from finishing - without making the level impossible (hint: if you want to place enemies each time a level is created, add to the ``||functions:buildLevel||`` function. If you do place enemies, remember to destroy them using ``||sprites:array of sprites of kind||`` before moving to the next level!)
3. **Challenge:** try adding new levels to the array. What happens if you don't place an orange tile? Does anything else need to be changed when a level is added?

https://makecode.com/_XLadwL1exiFP


## What did we learn?

1. How do the tile map blocks introduced in this lesson make it easier to set up a level?
2. In this lesson, were there any times in which a level accidentally became too hard or impossible to complete? Explain how this might happen when adding randomness to levels.

### ~hint

### Possible Solutions: Answers may vary

1. These blocks make it easier to place down many sprites and create more dynamic levels
2. Randomness comes with uncertainty. With that, given certain conditions, we can't guarantee that the level will be easy or even possible. It is because of this that we need to think about all the possible cases when using randomness and design our games to be different, but consistent. 

### ~



## Task Solution Appendix

### Task #1: Placing Sprites

```ts
enum SpriteKind {
    Player,
    Enemy
}
let sprite4: Sprite = null
let sprite3: Sprite = null
let sprite2: Sprite = null
let myTile: tiles.Tile = null
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myTile = scene.getTile(0, 0)
    myTile.place(mySprite)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . . . . . . . . . . . . . 
. f f . . . . . . . . f f . . . 
. . f . . . . . . . . f . . . . 
. . f f . . . . . . f f . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . 7 . . . . . . 
. . . . 7 . . . . 7 . . . . . . 
. . . . 7 . . . . 7 . . . . . . 
. . . . 7 . . . . 7 . . . . . . 
. . . . 7 . . . . 7 . . . . . . 
. . . . 7 . . . . 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. 7 7 . . . . . . . . 7 7 . . . 
. . 7 . . . . . . . . 7 . . . . 
. . 7 7 . . . . . . 7 7 . . . . 
. . . . 7 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 . . . . 5 . . . . . . 
. . . . 5 . . . . 5 . . . . . . 
. . . . 5 . . . . 5 . . . . . . 
. . . . 5 . . . . 5 . . . . . . 
. . . . 5 . . . . 5 . . . . . . 
. . . . 5 . . . . 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 5 . . . . . . . . 5 5 . . . 
. . 5 . . . . . . . . 5 . . . . 
. . 5 5 . . . . . . 5 5 . . . . 
. . . . 5 5 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. 6 6 . . . . . . . . 6 6 . . . 
. . 6 . . . . . . . . 6 . . . . 
. . 6 6 . . . . . . 6 6 . . . . 
. . . . 6 6 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 1 
1 2 5 5 5 5 5 5 2 1 
1 2 5 3 3 3 3 5 2 1 
1 2 5 3 3 3 3 5 2 1 
1 2 5 5 5 5 5 5 2 1 
1 2 2 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 1 1 
`)
scene.setTile(2, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
myTile = scene.getTile(9, 0)
myTile.place(sprite2)
myTile = scene.getTile(9, 6)
myTile.place(sprite3)
myTile = scene.getTile(0, 6)
myTile.place(sprite4)
```

### Task #2: Spawning Enemies

```ts
enum SpriteKind {
    Player,
    Enemy,
    Pizza
}
let enemy: Sprite = null
let pizza: Sprite = null
let tile_list: tiles.Tile[] = []
let mySprite: Sprite = null
let value: tiles.Tile = null
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
scene.setTileMap(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 f f f f f 1 1 1 1 1 1 1 1 
1 1 1 f 7 7 7 f 1 1 1 1 1 1 1 1 
1 1 1 f 1 1 1 f 1 1 1 1 1 1 2 1 
1 1 1 f 1 1 1 f 1 1 1 1 1 2 1 1 
1 1 1 f 9 9 9 f 1 1 1 1 1 1 1 1 
1 1 2 2 1 1 1 2 2 1 2 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 1 1 1 2 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 2 1 1 
1 1 2 1 1 1 1 2 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . f . . . . f . . . . . . 
. . . . . . . . . . . . . . . . 
. f f . . . . . . . . f f . . . 
. . f . . . . . . . . f . . . . 
. . f f . . . . . . f f . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.controlSprite(mySprite, 100, 100)
scene.setTile(15, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
scene.setTileAt(scene.getTile(Math.randomRange(0, 15), 1), 1)
scene.setTileAt(scene.getTile(Math.randomRange(0, 15), 3), 1)
scene.getTile(5, 0).place(mySprite)
tile_list = scene.getTilesByType(9)
for (let value of tile_list) {
    pizza = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Pizza)
    value.place(pizza)
}
tile_list = scene.getTilesByType(2)
for (let value of tile_list) {
    enemy = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . f f f f f f f f f . . . . 
. . f f f f f f f f f f f . . . 
. f f f 2 f f f f 2 f f f . . . 
f f f f 2 f f f f 2 f f f f . . 
f f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f . 
f f f f 2 2 2 2 2 f f f f f f . 
f f f f 2 f f f 2 f f f f f f . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    value.place(enemy)
}
```

### Task #3: Fill out levels

```ts
enum SpriteKind {
    Player,
    Enemy
}
let enemy: Sprite = null
let player: Sprite = null
let nextLevel = 0
let levels: Image[] = []
let value: Sprite = null
function buildLevel() {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    if (nextLevel == levels.length) {
        game.over(true)
    }
    scene.setTileMap(levels[nextLevel])
    for (let value of scene.getTilesByType(4)) {
        value.place(player)
    }
    for (let value of scene.getTilesByType(5)) {
        enemy = sprites.create(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. 2 2 2 f 2 2 2 2 f 2 2 2 . . . 
2 2 2 2 f 2 2 2 2 f 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 f f f f f 2 2 2 2 2 2 . 
2 2 2 2 f 2 2 2 f 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        value.place(enemy)
    }
    nextLevel += 1
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
levels = [img`
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 4 f f 5 f f f 7 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`, img`
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 5 9 9 9 9 
9 4 9 9 5 9 9 9 7 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 
`, img`
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 5 3 3 3 
3 4 3 3 3 5 3 3 7 3 
3 3 3 3 3 3 5 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`]
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 f 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 f 7 7 7 7 7 7 7 7 f f 7 7 7 
7 7 7 f f 7 7 7 7 7 7 f 7 7 7 7 
7 7 7 7 f f 7 7 7 7 f f 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
nextLevel = 0
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . 2 . 7 . 7 . 2 . . . . . . . 
. . 2 2 . . . 2 2 . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . 2 2 . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(player, 100, 100)
buildLevel()
```