# Practice 1: Platformers (without platforms)

1. Make a sprite that will be our character we'll be moving around.
2. Add an ``||controller:on right button press block||``, and use a set sprite block to set the vx (velocityx) to some positive value of your choosing. This is the difference from our earlier example: instead of using change by, we're just setting directly. We'll see that this makes our movement much more sharp and sudden.
3. Add an ``||controller:on left button press||`` block and a set vx block just like before. This time, however, we'll use some negative value of your choosing. This will have our sprite move in the opposite direction of when the vx was positive.
4. Test it out! If you switch back and forth between the left and right arrows, you'll notice it abruptly switches direction with no in-between slowing down and speeding back up.
5. You may have noticed about our game so far is that our sprite just glides forever. It maybe pretty fun to watch, but it's not quite realistic to most games. Instead, let's make it so that our sprite only moves when we have one of the two left/right keys pressed. Here you'll want to add an ``||controller:on any button release||`` block so that upon key release we can perform some different actions. Reset the vx and vy variables to be something appropriate so that our sprite stops moving. (Hint: If negative x velocity makes our sprite go left and positive x velocity go right, how can we get a velocity that's in between?)
6. Add more movement to the y velocity directions. Try playing around with what we've already done (setting velocities, changing velocities by some amount) and some of the still unexplored options like setting and changing acceleration by some amount.

https://makecode.com/_Dwt6L4Tbc5re

```blocks
enum SpriteKind {
    Player,
    Enemy
}

let sprite: Sprite = null
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.ay = 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = -50
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = 50
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.ay = -2
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.vx = 0
    sprite.vy = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.x = 80
    sprite.y = 64
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    sprite.vx = 0
})
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . 6 6 6 6 6 6 6 6 6 . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```