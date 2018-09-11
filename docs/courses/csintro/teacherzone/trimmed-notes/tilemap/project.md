# Activity: Tile map Project

## [Find the coins](https://makecode.com/_Mbp1PUHrcgKz)

![Find the coins](/static/courses/csintro1/tilemap/find-the-coins.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Coin
}
let coin7: Sprite = null
let coin6: Sprite = null
let coin5: Sprite = null
let coin4: Sprite = null
let coin3: Sprite = null
let coin2: Sprite = null
let player: Sprite = null
let coin1: Sprite = null
function setupTileMap() {
    scene.setTileMap(img`
e e e e e e e e 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 e e e e 
e e e e e 7 7 5 8 8 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 8 5 7 7 e 
e e e e e 7 7 5 8 8 8 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 7 e 
e e e e 7 7 7 5 8 8 8 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 7 e 
e e e 7 7 7 7 5 5 8 8 5 5 7 7 7 7 7 7 7 7 7 e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 7 7 e 
e 7 7 7 7 7 7 5 5 8 8 5 5 7 7 7 7 7 7 7 7 e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 7 e 
e 7 7 7 7 7 7 5 5 8 8 8 5 7 7 7 7 7 7 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 e 
e e e e 7 7 7 5 5 8 8 8 5 7 7 7 7 7 7 7 7 e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 e 
e e e e 7 7 7 7 5 5 8 8 5 5 7 7 7 7 7 7 7 e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 e 
e e e e 7 7 7 7 5 5 8 8 8 5 5 7 7 7 7 7 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 7 7 7 7 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 5 8 8 8 8 5 7 7 7 7 7 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 5 5 8 8 8 5 7 7 7 7 7 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 7 7 7 7 7 7 7 e e e e e 7 7 7 7 7 e e e 7 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 5 5 8 8 8 5 7 7 7 7 7 7 7 e e e e e 7 7 7 7 e e e e e 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 7 7 7 7 7 7 7 e e e e 7 7 7 7 e e e e e e 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e 7 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e 7 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 5 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e 7 7 7 7 5 5 8 8 8 8 5 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 5 5 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e 7 7 7 7 5 5 8 8 8 5 5 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 7 7 7 7 7 7 7 7 7 7 e e e e e 7 7 7 7 7 5 5 8 8 8 5 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 7 7 7 7 7 7 7 7 7 7 e e e e e 7 7 7 7 7 7 5 8 8 8 5 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 7 7 7 7 7 7 7 7 7 7 e e e e e 7 7 7 7 7 7 5 8 8 8 5 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 5 5 7 7 7 7 7 7 7 7 7 7 e e e 7 7 7 7 7 7 7 7 5 8 8 5 5 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 5 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 7 7 7 7 7 7 7 5 5 5 5 5 5 7 7 7 7 7 7 7 5 8 8 8 5 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 7 7 5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 5 5 8 8 8 5 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 5 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 7 7 7 e 
e e e e e e e e 7 7 7 7 7 7 7 5 5 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 5 7 7 7 e 
e e e e e e e e 7 7 7 7 7 7 7 7 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 5 7 7 7 7 e 
e e e e e e e e 7 7 7 7 7 7 7 7 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 5 7 7 7 7 e 
e e e e e e e 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 7 7 e 
e e e e e e 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 7 7 e 
e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 5 5 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 5 5 7 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 8 5 5 5 5 5 5 5 5 5 8 8 8 8 8 5 5 7 7 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 8 5 5 5 5 5 5 8 8 8 8 8 8 8 5 7 7 7 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 7 7 7 7 7 7 7 7 e 
e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 7 7 7 7 7 7 7 7 e 
e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 7 7 7 7 7 7 7 7 7 e 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 7 7 7 7 7 7 7 7 7 e 
e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e 
`)
    scene.setTile(14, img`
. . . . . 7 7 7 7 7 . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 e e e e 7 7 7 . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e e e . . . . . . 
`, true)
    scene.setTile(8, img`
9 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 
9 9 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 9 9 8 8 8 8 8 8 9 9 8 8 8 8 8 
8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 9 9 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 9 9 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 9 9 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 8 9 9 8 8 
8 8 8 8 9 8 8 8 8 8 8 8 8 9 9 8 
8 8 8 8 8 9 9 8 8 8 8 8 8 9 9 9 
8 8 8 8 8 8 9 8 8 8 8 8 8 8 9 9 
8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 
`, true)
    scene.setTile(4, img`
e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 e e 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 e e e e 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 5 5 5 5 5 5 5 5 5 5 f 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
}
function setupCoins() {
    coin1 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin1.setPosition(104, 392)
    coin2 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin2.setPosition(472, 232)
    coin3 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin3.setPosition(696, 696)
    coin4 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin4.setPosition(728, 40)
    coin5 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin5.setPosition(120, 696)
    coin6 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin6.setPosition(200, 24)
    coin7 = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 f 5 5 5 f . . . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 f f 5 f 5 5 5 5 f . . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f 5 5 f 5 5 5 5 5 f . 
. f 5 5 5 f f 5 f 5 5 5 5 5 f . 
. . f 5 5 5 f f f f f 5 5 f . . 
. . f 5 5 5 5 5 f 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . . f f . . . . . . . 
`, SpriteKind.Coin)
    coin7.setPosition(568, 296)
}
function setupPlayer() {
    player = sprites.create(img`
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
`, SpriteKind.Player)
    controller.controlSprite(player, 100, 100)
    scene.cameraFollowSprite(player)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
game.splash("Find the coins")
setupTileMap()
setupCoins()
setupPlayer()
info.setScore(0)
info.startCountdown(45)
```

## [Fire castle](https://makecode.com/_WXh1M5fPviYU)

![Fire castle](/static/courses/csintro1/tilemap/fire-castle.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Flame
}
let flame4: Sprite = null
let flame3: Sprite = null
let flame2: Sprite = null
let flame1: Sprite = null
let player: Sprite = null
let sprite: Sprite = null
function setupTilemap() {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f c c c c c c c c f f f f f f f c c c c c c f f f f f f f f f 
f f c 2 2 2 2 2 2 c f f f f f f f c 2 2 2 2 c c c c c f f f f f 
f f c 2 2 2 2 2 2 c f f f c c c c c 2 2 2 2 2 2 2 2 c f f f f f 
f f c 2 2 2 2 2 2 c f f f c 2 2 2 2 2 2 2 2 2 2 e 2 c f f f f f 
f f c 2 2 2 2 2 2 c f f f c 2 2 2 2 2 2 2 2 2 2 2 2 c f f f f f 
f f c c c c 2 2 c c f f f c 2 2 c c c c c c c c c c c f f f f f 
f f f f f c 2 2 c f f f f c 2 2 c f f f f f f f f f f f f f f f 
f f f f f c 2 2 c f f f f c 2 2 c f f f f f f f f f f f f f f f 
f f f f f c 2 2 c f f f f c 2 2 c f f f f f f f f f f f f f f f 
f f f f f c 2 2 c f f f f c 2 2 c c c c c c f f f f f f f f f f 
f f f f f c 2 2 c f f f f c 2 2 2 2 2 2 2 c f f f f f f f f f f 
f f f f f c 2 2 c f f f f c 2 2 2 2 2 2 2 c c c c c c c c c f f 
f f f f f c 2 2 c f f f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f f 
f f f f f c 2 2 c f f f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f f 
f f f f f c 2 2 c f f f f c c c c c c c c c c c c c c 2 2 c f f 
f f f f f c 2 2 c f f f f f f f f f f f f f f f f f c 2 2 c f f 
f f f f f c 2 2 c f f f f f f f f f f f f f f f f f c 2 2 c f f 
f f f f f c 2 2 c f f f f f f f f f f f f f f f f f c 2 2 c f f 
f f c c c c 2 2 c c c f f f f f c c c c c c c c c f c 2 2 c f f 
f f c 2 2 2 2 2 2 2 c f f f f f c 2 2 2 2 2 2 2 c f c 2 2 c f f 
f f c 2 2 2 2 2 2 2 c c c c c c c 2 2 2 2 2 2 2 c f c 2 2 c f f 
f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f c 2 2 c f f 
f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f c 2 2 c f f 
f f c 2 2 2 2 2 2 2 c c c c c c c 2 2 2 2 2 2 2 c f c 2 2 c f f 
f f c c c c c c c c c f f f f f c c c c c 2 2 c c f c 2 2 c f f 
f f f f f f f f f f f f f f f f f f f f c 2 2 c f f c 2 2 c f f 
f f f f f f f f f f f f f f f f f f f f c 2 2 c c c c 2 2 c f f 
f f f f f f f f f f f f f f f f f f f f c 2 2 2 2 2 2 2 2 c f f 
f f f f f f f f f f f f f f f f f f f f c 2 2 2 2 2 2 2 2 c f f 
f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f 
`)
    scene.setTile(12, img`
f f f f f f f f f f f f f f f f 
c c f c c c c c c c f c c c c c 
c c f c c c c c c c f c c c c c 
c c f c c c c c c c f c c c c c 
f f f f f f f f f f f f f f f f 
c c c c c c f c c c c c c c f c 
c c c c c c f c c c c c c c f c 
c c c c c c f c c c c c c c f c 
f f f f f f f f f f f f f f f f 
c c f c c c c c c c f c c c c c 
c c f c c c c c c c f c c c c c 
c c f c c c c c c c f c c c c c 
f f f f f f f f f f f f f f f f 
c c c c c c f c c c c c c c f c 
c c c c c c f c c c c c c c f c 
c c c c c c f c c c c c c c f c 
`, true)
    scene.setTile(2, img`
5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
2 5 2 2 2 2 2 2 2 2 2 2 2 2 5 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 5 2 2 2 2 2 2 2 2 5 2 2 2 
2 2 2 2 5 2 2 2 2 2 2 5 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 5 2 2 5 2 2 2 2 2 2 
2 2 2 2 2 2 2 5 5 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 5 5 2 2 2 2 2 2 2 
2 2 2 2 2 2 5 2 2 5 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 5 2 2 2 2 2 2 5 2 2 2 2 
2 2 2 5 2 2 2 2 2 2 2 2 5 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 2 2 2 2 2 2 2 2 2 2 2 5 2 
5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
`)
    scene.setTile(14, img`
f f f f f f f f f f f f f f f f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e 5 5 5 e e e e e e e f 
f e e e e 5 5 5 e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f e e e e e f e e e e e e e e f 
f f f f f f f f f f f f f f f f 
`, true)
}
function setupPlayer() {
    player = sprites.create(img`
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
`, SpriteKind.Player)
    controller.controlSprite(player, 100, 100)
    scene.cameraFollowSprite(player)
}
function setupFlames() {
    flame1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . . f 4 4 4 4 f . . . . . 
. . . . f 4 4 2 4 4 f . . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . f 4 4 2 2 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Flame)
    flame2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . . f 4 4 4 4 f . . . . . 
. . . . f 4 4 2 4 4 f . . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . f 4 4 2 2 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Flame)
    flame3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . . f 4 4 4 4 f . . . . . 
. . . . f 4 4 2 4 4 f . . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . f 4 4 2 2 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Flame)
    flame4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . . f 4 4 4 4 f . . . . . 
. . . . f 4 4 2 4 4 f . . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . . f 4 4 2 2 4 4 f . . . . 
. . . f 4 4 2 2 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 2 2 5 5 4 4 f . . . . 
. . . f 4 4 4 4 4 4 4 f . . . . 
. . . . f 4 4 4 4 4 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Flame)
    flame1.setPosition(136, 360)
    flame1.vy = 100
    flame2.setPosition(296, 344)
    flame2.vy = 200
    flame3.setPosition(280, 200)
    flame3.vy = 300
    flame4.setPosition(296, 40)
    flame4.vy = 400
}
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.over(true)
})
scene.onHitTile(SpriteKind.Flame, 12, function (sprite) {
    sprite.vy = -1 * sprite.vy
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flame, function (sprite, otherSprite) {
    game.over(false)
})
setupTilemap()
setupPlayer()
setupFlames()
```

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Dart,
    Corgi
}
let myCorg: Corgi = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    myCorg.fetch(myDart.sprite)
})
sprites.onOverlap(SpriteKind.Corgi, SpriteKind.Dart, function (sprite, otherSprite) {
    myDart.stopDart()
    myCorg.bark()
    otherSprite.setPosition(10, 10)
})
let myDart: Dart = null
myDart = darts.create(img`
. . . . . . . . . . . . . . . . 
. . 1 1 . . . . . . . 1 1 . . . 
. . 1 d 1 1 1 d 1 1 d d 1 . . . 
. . . 1 d d d d 1 d d 1 . . . . 
. . 1 d 1 1 1 1 1 1 d d 1 . . . 
. . 1 1 . . . . . . . 1 1 . . . 
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
`, SpriteKind.Dart, 10, 10)
myDart.setTrace()
myDart.controlWithArrowKeys()
myDart.sprite.setFlag(SpriteFlag.StayInScreen, true)
myCorg = corgi.create(SpriteKind.Corgi)
myCorg.updateSprite()
```

```package
corgio=github:jwunderl/pxt-corgio#v0.0.12
darts=github:jwunderl/pxt-darts#v0.0.15
```

## Student Task #1:

## What did we learn? 

1. Discuss something that was difficult to implement in the game. Describe what you learned or a how you would improve how the game code works.
2. Discuss your favorite feature of the game and how it was implemented.

### ~hint

**Possible Answers:**

These are sample answers - student answers will vary widely based on individual taste and the game they build.

1. Answers will vary.
2. Having a projectile come from a sprite when a particular tile is hit by the player sprite was my favorite feature of the game. Used the hit tile event to launch the projectile.

### ~