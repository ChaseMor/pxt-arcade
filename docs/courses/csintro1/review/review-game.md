# Task list:
![Final Product Example](/static/courses/csintro1/review/final-review-game.gif)

## Sprite
* Make a **32 x 32** sprite that has 3 circles filled with different colors
* Rename the the sprite from "agent" to "circles"
* Make the sprite be of kind "Circles"
* When the game starts, make ``||variables:circles||`` ``||sprite:say||`` something (for example, "I'm ready to play!") for **1000 ms**
## Motion and Button Events:
* Make the ``||variables:circles||`` spawn in the top left corner, by ``||sprites:setting||`` the ``||sprites:x||`` and ``||sprites:y||`` coordinates both to 30
* Use the ``||controller:on left button pressed||`` and ``||controller:on right button pressed||`` blocks to make ``||variables:circles||`` move left and right, by using the ``||sprite:change x by||`` block. Make the circles move **5** in the direction specified each time the button is pressed (remember - moving in one direction )
### ~hint
Remember: moving in opposite directions is done by changing the value from positive to negative (or vice versa) - that means one button should change x by 5, and the other should change x by -5.
### ~
* Use the ``||controller:on up button pressed||`` and ``||controller:on down button pressed||`` blocks to make ``||variables:circles||`` change the y velocity by 2 in the specified direction when up or down is pressed. 
### ~hint
Changing the y velocity is done by changing the ``||variables:circles||`` ``||sprite:vy||``
### ~
* How is changing a sprite's ``||sprite:x||`` value different from changing it's ``||sprite:vx||`` value?
* In the ``||loops:on start||`` block, set the ``||variables:circles||`` ``||sprite:ay||`` value to 5. This represents the circles **acceleration**, or how fast it increases in velocity. Try to keep the ``||variables:circles||`` in the screen.
* Challenge: set the ``||variables:circles||`` to have an acceleration of 2 in the x direction as well; how long can you keep it on screen? (Be sure to remove this when before moving on to the next task)

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Circles
}
let circles: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += -5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += 5
})
circles = sprites.create(img`
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 3 . . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 2 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 . . 
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 2 3 . 
. 3 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 3 3 2 3 . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 3 . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Circles)
circles.say("I'm ready to play!", 1000)
circles.x = 30
circles.y = 30
circles.ay = 5
circles.ax = 2
// :end-solution
```
## Sprite Kinds and Info
* Use the ``||sprites:create empty sprite of kind Stars||`` block from the ``||sprites:Lifecycle||`` category inside of an ``||games:on game update every 500 ms||`` block to create a new sprite of kind Star twice per second. You'll need to make a new kind (in particular, ``||sprite:Stars||``) to do this.
* Now we can add some behavior to sprites of kind Stars. To do this, we need an ``||sprites:on created sprite of kind Stars||`` event. Inside of that, change the image of the sprite using the ``||sprites:set agent image to...||`` block, and dragging the sprite in place of the agent, as shown below. Make sure to make a nice image for your star!
![Using sprite parameter in on created event](/static/courses/csintro1/review/use-sprite-parameter.gif)
* Set the created sprite's ``||sprites:x||`` position to a random position on the screen, using the ``||scene:width||`` value in a ``||math:pick random between 0 and width||`` block.
* Set the created sprite's ``||sprites:y||`` position the same as above, using the ``||scene:height||`` in place of ``||scene:width||``.
* Set the created sprite's ``||sprites:z||`` index to -1, so that all ``||sprites:stars||`` will show up behind the ``||variables:circles||``.
* Set the created sprite's ``||sprites:lifespan||`` to 100, so that it will be destroyed after 100 'tics'. (This corresponds to 100 game updates)
### ~hint
Both the ``||sprites:z||`` and ``||sprites:lifespan||`` can be assigned using the drop down, similar to how the ``||sprites:x||`` can be set.
### ~
* Create a ``||sprites:on sprite of kind Circles overlaps otherSprite of kind Stars||`` block to handle interactions between the Circles and Stars in the background.
* Inside of the ``||sprites:overlap||`` block, destroy the ``||sprites:Star||`` that is overlapped, and ``||info:change score by 1||`` to add one to the score each time the ``||variables:circles||`` pass over a ``||sprites:Star||``.
* Create a ``||info:start countdown||`` block with a time of 30 seconds, so that the game will be done after time runs out.
* Add a ``||game:splash||`` message in the ``||loops:on start||`` section with a basic description of the game (for example, "catch the stars before time runs out!"). Does the placement of the splash screen affect how the game runs?

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Circles,
    Stars
}
let circles: Sprite = null
let sprite: Sprite = null
sprites.onOverlap(SpriteKind.Circles, SpriteKind.Stars, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += 5
})
sprites.onCreated(SpriteKind.Stars, function (sprite) {
    sprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 5 1 . . . . . . . 
. . . . . 1 1 5 1 1 . . . . . . 
. . . . 1 5 5 5 5 5 1 . . . . . 
. . . . . 1 1 5 1 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    sprite.x = Math.randomRange(0, scene.screenWidth())
    sprite.y = Math.randomRange(0, scene.screenHeight())
    sprite.z = -5
    sprite.lifespan = 100
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.x += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += 5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    circles.vy += -5
})
circles = sprites.create(img`
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 . . . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 2 2 3 . . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 2 2 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 2 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 2 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 2 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 . . 
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 2 3 . 
. 3 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 . . . 
. . . 3 2 2 2 2 2 2 2 2 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 . . . . 
. . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 . . . . 
. . . . 3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 1 3 3 2 3 . . . . . 
. . . . . 3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 2 2 3 . . . . . . 
. . . . . . 3 2 2 2 2 2 2 2 2 2 2 2 2 3 2 2 2 2 3 . . . . . . . 
. . . . . . . 3 3 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . 
. . . . . . . . . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 2 3 3 3 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Circles)
game.splash("Catch the Stars before time runs out!")
circles.say("I'm ready to play!", 1000)
circles.x = 30
circles.y = 30
circles.ay = 5
info.startCountdown(30)
game.onUpdateInterval(500, function () {
    sprites.createEmptySprite(SpriteKind.Stars)
})
// :end-solution
```

## Debugging
In the following examples, identify what part of the provided code is causing the behavior to be different from the expected behavior. All of the examples are small segments of code similar to what you made above, so looking at your game might help in finding the bugs.

### Student 1: Bill

Bill decided he wanted to make a simple game where a timer counts down to 5. After making the countdown, he decides that it's not very helpful without telling the player that that is what is going to happen, so he adds in a splash screen to tell the player - unfortunately, the game now starts at some number less than 5, and occasionally is already over when he closes the splash screen. What is going wrong with this code, and how can it be fixed?
```blocks
info.startCountdown(5)
game.splash("Hello! This will count down from 5 for you!")
```
### ~hint
**Teacher Note**
The countdown will still run while the splash screen is being shown; Bill should move the countdown to start *after* the splash screen (that is, swap the order of the blocks).
### ~

### Student 2: Emma

Emma decides that she does not like the Stars being destroyed when the ``||variables:circles||`` overlap them, so she removes the ``||sprite:destroy||`` block so that the ``||sprites:Stars||`` remain. However, this makes the game score behave weirdly, and no longer represent the number of stars that have been overlapped. What went wrong? (Challenge: can you fix it?)
```blocks
enum SpriteKind {
    Player,
    Enemy,
    Circles,
    Stars
}
sprites.onOverlap(SpriteKind.Circles, SpriteKind.Stars, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
```
### ~hint
**Teacher Note**
Because the game does not destroy the Stars, the circles will continue to overlap with them, and continue to add to the score as long as the Stars exist and the circles stay over them. There are two approaches students might take to fix this. One would be to destroy the old star and replace it with a new Star of a different kind. A more clear / clean approach would be to set the ``||variables:otherSprite||`` to ``||sprite:ghost on||``, so that it won't trigger collisions after the first one.
### ~

### Student 3: Sebastian

Sebastian wants to add in a splash screen that shows the score the player reached before ending the game, so he uses the ``||info:on countdown end||`` block to add in this behavior, and then end the game. This block allows you to change the behavior of the countdown ending from the normal "game over" sequence to something different.

```blocks
info.onCountdownEnd(function () {
    game.splash("")
    game.over()
})
```

Everything seems like it's working fine to start, until he tries to add in the score to the splash screen, as shown in the animation below. What is going wrong, and how can he fix it?
![Adding score to splash screen](/static/courses/csintro1/review/score-to-splash.gif)

### ~hint
**Teacher Note**
The splash screen needs to have a string to display, not a number - to display a number, you need to use ``||text:join||`` to force the number to be converted to a string. Joining it with an empty string will create just the number; otherwise, it will become the number and the other string next to one another.
```blocks
info.onCountdownEnd(function () {
    game.splash("" + info.score())
    game.over()
})
```
### ~