# Sprite Motion

## Introduction @unplugged

Welcome to @boardname@! Let's start by making a basic sprite and having it move around the screen

![Simple sprite moving](/static/tutorials/sprite-motion/sprite-motion.gif)

## Step 1

Start by making a simple sprite. Find the ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
```

## Step 2

Click on the grey box in ``||variables:set mySprite to||`` an draw your sprite's image. It could be anything you like: A blob, a square, a stick figure, a smiley face, etc.

![Draw a figure for the sprite](/static/tutorials/sprite-motion/draw-sprite.gif)

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. f 5 5 f f f 5 5 f f f 5 5 f . 
. f 5 5 f f f 5 5 f f f 5 5 f . 
f 5 5 5 f f f 5 5 f f f 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 f 5 5 5 5 5 5 5 5 f 5 5 f 
. f 5 f f f 5 5 5 5 f f f 5 f . 
. f 5 5 f f f f f f f f 5 5 f . 
. . f 5 5 f f f f f f 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . . . f f f f . . . . . . 
`)
```

## Step 3

From the ``||contoller:Controller||`` section, add in a ``||controller:on button pressed||`` block and place anywhere on the screen. Using the dropdown menu, change ``||controller:any||`` to ``||controller:left||``.

![Draw a figure for the sprite](/static/tutorials/sprite-motion/change-button.gif)

```blocks
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    
})
```

## Step 4

Add in a ``||sprites:change mySprite||`` ``||variables:x position||`` block inside the ``||controller:on left button pressed||`` event. Then make it so that the ``||variables:x position||`` changes by -3 instead the default value of 0.

```blocks
let mySprite: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -3
})
```

## Step 5

Add in another  ``||controller: on button press||`` event, but this time, make the ``||variables:x position||`` change by 3 when the ``||controller:right||`` button is pressed.

```blocks
let mySprite: Sprite = null
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 3
})
```

## Step 6

Add in another ``||controller: on button press||`` event for when the player presses the ``||controller:down||`` button. Inside, this event, add in a ``||sprites:change mySprite||`` ``||variables:x position||`` block. In the dropdown menu for this block, change ``||variables:x position||`` to ``||variables:y position||``. Make the ``||variables:y position||`` change by 3 instead of 0

```blocks
let mySprite: Sprite = null
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 3
})
```

## Step 7

Do the same thing but this time, make the ``||variables:y position||`` change by -3 when the ``||controller:up||`` button is pressed.

```blocks
let mySprite: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -3
})
```

## Complete @unplugged

Congratulations, your sprite can move around the screen!

Play around with the different values that you use to change the position.

Also, look at what happens if we change our sprite's velocity or acceleration instead of position.
