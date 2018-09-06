# Activity: Intro to Tile Map

## Example #1: Making a tile map

## Student Task #1: Personalized Tile map

Student creations for this section will vary, but should all closely resemble [example #1](https://makecode.com/_hUUX8ee8P0ix) with a different drawing on it.

### Example #2: Creating tiles in a tile map

## Student Task #2: Add tile to tile map

Student solution similar to the [student example given](https://makecode.com/_5RhYt8JrqP55) - Student should have individual modifications.

## Example #3: Words!

## Student Task #3: Hello World!

### Standard:

https://makecode.com/_4cc0DwDszaj9

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 3 4 4 5 . . . . . 
. . . . . . . . . . 
. . . 6 5 7 4 8 . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
scene.setTile(2, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 1 1 1 1 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f 1 1 f f 1 f f f f 
f f f f 1 f 1 f f 1 f 1 f f f f 
f f f f 1 1 f f f f 1 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 1 1 f f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 1 1 1 1 f f f f f f 
f f f f f 1 f f 1 f f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(8, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 f f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 1 1 1 1 f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
```

### Challenge:

https://makecode.com/_T9FcEWijg68m

```blocks
scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 3 4 4 5 . . . . . 
. . . . . . . . . . 
. . . 6 5 7 4 8 f . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
scene.setTile(2, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 1 1 1 1 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f 1 f f 1 1 f f 1 f f f f 
f f f f 1 f 1 f f 1 f 1 f f f f 
f f f f 1 1 f f f f 1 1 f f f f 
f f f f 1 f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 f f f f f 1 f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 1 1 f f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 1 1 1 1 f f f f f f 
f f f f f 1 f f 1 f f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f 1 f f f 1 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(8, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 1 1 1 1 f f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 f f f f 1 f f f f f f 
f f f f 1 1 1 1 1 f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f 1 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
```

## Example #4: A brand new home

## Student Task #4: Decorate and move around the house

### Challenge:

https://makecode.com/_X7FWW9M92Y3R

```
enum SpriteKind {
    Player,
    Enemy
}
let HomeOwner: Sprite = null
HomeOwner = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f 9 f 9 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . f . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(HomeOwner)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 2 1 1 2 1 1 f 1 1 1 4 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f f f f 1 1 f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 4 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 6 1 6 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f f f f f f f f 1 1 f f f f f f 1 1 f f f f f f f f 1 1 f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 5 5 5 5 5 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f 1 1 f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 4 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 3 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 3 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f d d d d d d f f d d d d d d f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 d d d d d e e e e 1 1 
1 1 1 1 1 d 1 1 1 d d 1 e e 1 1 
1 1 1 1 1 d d d d d d 1 e e 1 1 
1 1 1 1 1 d 1 d 1 d d 1 e e 1 1 
1 1 1 1 1 d d 1 d 1 d 1 e e 1 1 
1 1 1 1 1 d d d d d d 1 e e 1 1 
1 1 1 1 1 d 1 1 1 d d 1 e e 1 1 
1 1 1 1 1 d d d d d e e e e 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 e e e e e e e e e 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(3, img`
1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
1 1 9 9 9 1 1 1 1 1 1 1 9 9 9 1 
1 1 9 9 9 1 d 1 d 1 d 1 9 9 9 1 
1 1 9 9 9 1 d 1 d 1 d 1 9 9 9 1 
1 1 9 9 9 1 1 1 1 1 1 1 9 9 9 1 
1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
1 1 6 6 6 6 6 6 6 6 6 6 6 6 6 1 
`, true)
scene.setTile(4, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 e e e d e 7 1 1 e e e e 1 1 
1 e e e a d e 1 1 1 e e e e e 1 
1 e e e e e e e e e e e a e e 1 
1 e e e e e e f f e e e d d e 1 
1 e 7 1 e e f f f f e e 1 1 e 1 
1 e 1 1 e e f 1 1 f e e 1 1 e 1 
1 e 1 1 e e f f f f e e 1 7 e 1 
1 e d d e e e f f e e e e e e 1 
1 e e a e e e e e e e e e e e 1 
1 e e e e e e e e e e e e e e 1 
1 e e e e e 1 1 1 e d a e e e 1 
1 1 e e e e 1 1 7 e d e e e 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(5, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 a a a 1 1 1 1 1 1 1 1 
1 1 1 1 a a c a a 1 1 1 1 1 1 1 
1 1 1 a a c a a a a 1 1 1 1 1 1 
1 1 a a c a a a a a a 1 1 1 1 1 
1 1 a a a a c a a c a 1 1 1 1 1 
1 1 a a a c a a c a a 1 1 1 1 1 
1 1 1 a c a a c a a 1 1 1 1 1 1 
1 1 1 1 a a a a a 1 1 1 1 1 1 1 
1 1 1 1 1 a a a 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
scene.setTile(6, img`
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
`, false)
game.onUpdate(function () {
    controller.controlSprite(HomeOwner, 100, 100)
})

```

## What did we learn?

1. What is the default size when you create a new tilemap? Does it perfectly match the screen size?
2. When ``||scene:camera follow sprite||`` is set to follow a sprite, does that sprite always stay in the center of the screen, or are there times where it is off center?

### ~hint

Possible Solutions:

1. The default size is 10x8. Because we know that each tile is shown on screen as a 16x16 square, this will result in a total map of size 160x128 - this is slightly taller than the screen size, so it won't be displayed fully on the screen.
2. The camera does not center on the sprite if the sprite is near the edge of the tile map - the sprite can move all the way up to the corner of the screen in that case.

### ~