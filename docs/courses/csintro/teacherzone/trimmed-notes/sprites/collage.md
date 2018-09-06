# Activity: Collage

In this activity we will use
* Sprites
* Variables to create multiple sprites
* Coordinates to arrange our sprites into a scene
* Background - set background

## Example: Sprite & Background

## Example: Sprite placement 

## Student Task: Build a Collage 

https://makecode.com/_7dtM9RfzKKD4 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let sandals: Sprite = null
let jS: Sprite = null
let walking: Sprite = null
let initials: Sprite = null
let me: Sprite = null
let hotSauce: Sprite = null
let coffee: Sprite = null
let bus: Sprite = null
scene.setBackgroundColor(7)
bus = sprites.create(img`
. . . . . . . . . . . . . . . . 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
6 6 4 6 4 6 4 6 4 6 4 4 4 1 1 . 
6 6 1 6 1 6 1 6 1 6 4 1 4 1 1 . 
6 6 6 6 6 6 6 6 6 6 4 6 4 6 6 . 
6 6 4 6 4 6 4 6 4 6 4 6 4 6 6 . 
6 f f 6 6 6 6 6 6 6 4 4 f f 6 . 
. f f . . . . . . . . . f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
bus.x = 120
bus.y = 115
coffee = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
. 1 1 1 f f f f f f f f 1 . . . . . . . . . . . . . . . . . . . 
. 1 f f f f f f f f 1 1 1 . . . . . . . . . . . . . . . . . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . a a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . a a a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . 1 . . . . . . . . . a . a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . 1 . . . . . a a . . a . a . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . 1 . . . . a a a a . a a a . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . 1 1 . . . . a a . a . . a . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . a . . . a . a . . a . . a . . . 
. . . . 1 1 1 1 1 1 . . . . . a . . . . a a . . . a a a a . . . 
. . . . 1 1 1 1 1 . . . . . a . . . . . a a . . . a a . . . . . 
. . . . . . . . . . . . a . a . . a a . . a . a . . . . . . . . 
. . . . . . . . . . . a . . . a a a . . . a a a . . . . . . . . 
. . . . . . . . . . . a a . . a a . . . . a a . . . . . . . . . 
. . . . . . . . . . . . a a . . a . . . . . . . . . . . . . . . 
. . . . . . a a a a . a a . . . a . . . . . . . . . . . . . . . 
. . . . . . a . . a a . a . . . a a . . . . . . . . . . . . . . 
. . a a . . a . . . a . a . . . . . . . . . . . . . . . . . . . 
. a a . a . a . . . a . a a . . . . . . . . . . . . . . . . . . 
. a . . . . a a . a a . . . . . . . . . . . . . . . . . . . . . 
. a . . . . . a a a . . . . . . . . . . . . . . . . . . . . . . 
. a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . a . . . a a . . . . . . . . . . . . . . . . . . . . . . . . 
. . a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
coffee.x = 75
coffee.y = 80
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
hotSauce.x = 20
hotSauce.y = 40
me = sprites.create(img`
. . . . d d d d d d d d d . . . 
. . . d d d d d d d d d d d . . 
. . d d d d d d d d d d d d d . 
. . d d e e d d d d e e d d d . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
d d 8 8 d 1 d 8 8 8 d 1 d 8 8 d 
d d d 8 8 b d 8 d 8 8 b 8 8 d d 
. d d d 8 8 8 8 b d 8 8 8 d d . 
. d d d d d d b b d d d d d d . 
. d d d d d b b b d d d d d d . 
. . d d d d d d d d d d d d d . 
. . d d d 1 d d d d 1 d d d d . 
. . . d d d 1 1 1 1 d d d d . . 
. . . d d d d d d d d d d d . . 
. . . . d d d d d d d d d . . . 
. . . . . . d d d d d . . . . . 
`, SpriteKind.Player)
me.x = 16
me.y = 100
initials = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f . . . f f f f f f . . 
f f f f f . . . f f f f f f . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f f f f . . . . f f . . . . . . 
f f f f . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f . . . . . . . f f . . . . . . 
f f f f f . . . f f f f f f . . 
f f f f f . f . f f f f f f . f 
`, SpriteKind.Player)
initials.x = 33
initials.y = 110
walking = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . d d d . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . d d d d d . . . . . . . . 
. . . . . . . . . . . . . . . . . . . d d d c d . . . . . . . . 
. . . . . . . . . . . . . . . . . . . d d d d d d . . . . . . . 
. . . . . . . . . . . . . . . . 2 2 . d d d d d . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 2 . d d 1 d . . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 f f f d d . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f f . . . . . d . . . . 
. . . . . . . . . . . . f f f 2 2 f f f . f . . . . f d . . . . 
. . . . . . . . . . . f f . 2 2 f f f f . f f . . f f . . . . . 
. . . . . . . . . . . f f . 2 2 f f f f . . f f f f . . . . . . 
. . . . . . . . . . . . f . . 2 f f f . . . . f f . . . . . . . 
. . . . . . . . . . . . d . . f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . d . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . f . . . . . f f . . . . . . . . . . 
. . . . . . . . . . . . . . f . . . . . . f . . . . . . . . . . 
. . . . . . . . . . . . . f f . . . . . f f . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . f . . . . . . . . . . . 
. . . . . . . f 9 f f f f . . . . . . f . . . . . . . . . . . . 
. . . . . . . f 9 . . . . . . . . . f f . . . . . . . . . . . . 
. . . . . . . f 9 . . . . . . . . . f f . . . . . . . . . . . . 
. . . . . . . f 9 . . . . . . . . . 9 9 9 9 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
walking.x = 65
walking.y = 25
jS = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 4 4 4 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 . . 4 4 4 4 4 4 5 5 5 5 5 5 4 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 4 . . . . . . 4 4 4 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . . 4 4 4 4 . . . . . 4 4 4 . . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . 4 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
. . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . 4 4 4 
4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . 4 4 4 . . . . . . . 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
jS.x = 125
jS.y = 23
sandals = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
6 6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 6 . . 6 6 6 . . . . . . . . . . 
6 . . . . 6 . 6 . 6 . . . 6 6 6 . . . 6 . . . . . . . . . . . . 
6 6 6 6 . 6 . 6 . 6 . . . 6 6 6 . . . 6 6 6 . . . . . . . . . . 
. . . 6 . 6 . 6 . 6 . . . 6 6 6 6 . . . . 6 . . . . . . . . . . 
6 6 6 6 . 6 6 6 . 6 6 6 . 6 . . 6 . 6 6 6 6 . . . . . . . . . . 
. . . 9 8 9 8 9 9 8 9 . . . . . . . . . . . . . . . . . . . . . 
. . . 9 8 9 8 9 9 8 9 . . . . . . 6 6 . . 6 . . . . . . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . . 6 . 6 . 6 . . . . . . . . . . 
. . . 9 9 9 8 9 9 8 9 . . . . . . 6 . . 6 6 . . . . . . . . . . 
. . . 9 8 9 9 9 9 9 9 . . . . . . 6 . . . 6 . . . . . . . . . . 
. . 6 6 6 9 6 6 9 9 6 6 . . 6 . 6 . . . . . . . . . . . . . . . 
. . 6 9 9 9 6 6 9 8 9 6 6 . 6 . 6 6 6 . . 6 6 . . . 6 . . 6 6 6 
. . 6 6 8 9 6 9 6 9 9 6 6 . 6 . 6 . 6 6 . 6 6 6 . . 6 . . 6 . . 
. . . 6 6 9 6 6 6 6 9 6 6 6 6 . 6 . . 6 . 6 . 6 . . 6 . . 6 6 . 
. . . 9 6 9 6 8 9 6 9 6 . 6 6 . 6 . 6 6 . 6 6 6 6 . 6 . . . 6 6 
. . 6 6 6 9 6 8 9 6 9 6 . . 6 . 6 6 6 . . 6 . . 6 . 6 6 6 6 . 6 
. . . 9 8 9 9 9 9 8 9 . . . . . . . . . . . . . . . . . . 6 6 6 
. . . 9 9 9 9 9 9 9 9 . . . . . . . . . . . . . . . . . . . . . 
. . f f 9 9 9 9 9 9 9 9 9 9 . f . . . . . . . . . . . . . . . . 
. . . 9 f f 9 9 9 9 9 f f f f 9 9 f f 9 9 9 9 9 9 9 . . . . . . 
. . . 9 9 9 f 9 9 f f f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 . . . . . 
. . . 9 9 9 f f f 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 . . . . . 
. . . 9 9 f f 9 f 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 . . . . 
. . . 9 9 f 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 . . . . 
. . . . f 9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 . . . . 
. . . f f f f f f f f f f f f f f f f f f f f f f f f f f . . . 
. . . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sandals.x = 125
sandals.y = 66
```


## What did we learn?

1. How could the use of multiple sprites in a single game enhance your ability to convey a story in your games?
2. What other blocks are available in the ``||sprites:Sprites||`` menu? List several blocks not used in collage and make a hypothesis of what one (or more) of these blocks does.
3. **Challenge:** switch to the JavaScript version of your collage, and take a look at the images you drew in the task above. What do periods (**.**) represent in the images?

### ~hint

### Possible solutions:
    
1. Multiple sprites allows you to convey multiple entities. Such as multiple characters, an environment, etc.
2. Answers will vary by student
3. The period represents a transparent pixel in the sprite

### ~

## Rubrics

### Collage Task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Collage | Collage has at least 5 sprites | Collage has at least 6 sprites with 1 placed in each quadrant | Collage has more than 6 sprites of various sizes and designs | Collage strongly conveys information to viewer without needing explanation, or student completed the challenge code |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Mostly addressing questions #1 & #2, but parts are unclear or lack detail | Explanation address questions #1 & #2 fully | Uses multiple examples and clear explanations | Explanation uses an original, creative example or analogy or multiple ``||sprites:Sprites||`` category blocks explained |

### Score = \_\_\_\_\_\_ /10

### ~hint

Students skill in creating sprites is one key to engaging games. Consider additional practice with Sprite artistic creation for the next lesson and/or going forward. Modifying some existing designs found from web searches will help students quick build skills.

Updating Sprites is a good activity for the students who finish early as well. 

**Add-on Lesson Ideas**

There is a lot of excellent 8 bit art available online that will excite students.

* Self Portrait (face or full character) image search online: "8 bit character" or "8 bit portrait" 
* logo (Favorite Brand, School , super hero) image search online: "8 bit logo"
* Animal (dog, cat, fish, penguin) image search online: "8 bit animal"

### ~