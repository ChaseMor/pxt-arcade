# Example Projects

### ~hint

If you feel that students need a bit of review before moving on, there are several [review and extension sections](/courses/csintro1/review) sections that could be fit in at this point.

* [Implementing and debugging a full collection game](/courses/csintro1/review/review-game)
* [Extension of "Touch the Button" example from info category](/courses/csintro1/review/extend-touch-the-button)
* [Practice with variables](/courses/csintro1/review/practice-variable-math)
* [Practice with strings](/courses/csintro1/review/practice-string-math)
* [Practice with sprite motion and button events](/courses/csintro1/review/practice-sprite-motion)

### ~

Use at least 10 of the following
* Sprites
* Button Press Event
* Position (coordinates)
* Controller (dx) (vx)
* Overlap Events / sprite kind
* "spawn" create / on create
* Random
* Showing numbers as string
* Score / life (info)
* Timer (countdown)
* Flip
* Stay in screen / ghost
* Set image
* Sprite say
* Splash


## Example games (Student code will vary)

### [Catch the cents](https://makecode.com/_2WKKYbDri5Kc)

![Catch the Cents](/static/courses/csintro1/motion-and-events/catch-the-cents.gif)

Uses:
* Sprites
* Position
* Overlap
* Controller (``||control sprite with||``)
* Create / on create
* Random
* Score
* Timer
* Stay in screen
* Set image

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Collectible
}
let mySprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectible, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.Collectible, function (sprite) {
    sprite.setImage(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 6 6 6 6 6 6 6 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 6 6 6 6 6 6 6 6 7 7 7 6 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`)
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    sprite.setFlag(SpriteFlag.StayInScreen, true)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 . 5 . . 5 . . 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 . 5 5 5 5 . . 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 . . . . . . . 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
mySprite.setPosition(30, 30)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    sprites.createEmptySprite(SpriteKind.Collectible)
})
```

### [Text Adventure](https://makecode.com/_3XC1g76u21YM)

![Text Adventure](/static/courses/csintro1/motion-and-events/text-adventure.gif)

Uses:
* Sprites
* Button Press Event
* Controller (``||dx||`` and ``||dy||``)
* Position
* Life
* Flip
* Showing numbers as string
* Stay in Screen
* Sprite Say
* Splash

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Platypus,
    Dogtor
}
let dogtor: Sprite = null
let platypus: Sprite = null
let otherSprite: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platypus, function (sprite, otherSprite) {
    otherSprite.say("plat", 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dogtor, function (sprite, otherSprite) {
    otherSprite.say("your health is: " + info.life(), 100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
let player: Sprite = null
sprite = null
scene.setBackgroundColor(1)
game.splash("Talk to the animals!", "And don't press B!")
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . 2 . . 2 . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. . . . . . . 2 . . 2 . . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
player.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
platypus = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 7 7 7 7 . . . . . . . . . . 
. 7 7 . . 7 . . . . . . e e . . 
. . 7 7 7 7 7 7 7 7 7 7 e e . . 
. . . . . . 7 . . . . 7 . . . . 
. . . . . 7 . 7 . . 7 . 7 . . . 
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
`, SpriteKind.Platypus)
platypus.setPosition(120, 40)
dogtor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . e e . e e . e e . . . . 
. . . . e e e e e e e e . . . . 
. . . . e . e f e f . e . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e e f 3 . . . . . . 
. . . . f f e e e e f f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 9 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 9 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 1 f f f 1 f . . . . 
. . . . . e e . . . e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Dogtor)
dogtor.setPosition(20, 100)
game.onUpdate(function () {
    player.x += controller.dx()
    player.y += controller.dy()
})
game.onUpdateInterval(150, function () {
    player.image.flipX()
})
```