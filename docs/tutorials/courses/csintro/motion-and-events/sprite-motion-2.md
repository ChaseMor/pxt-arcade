# Sprite Motion 2

## Introduction @unplugged

Welcome to @boardname@! Let's start by making a basic sprite and having it move around the screen

![Simple sprite moving](/static/tutorials/courses/csintro/motion-and-events/sprite-motion-2/sprite-motion.gif)

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

![Draw a figure for the sprite](/static/tutorials/courses/csintro/motion-and-events/sprite-motion-2/draw-sprite.gif)

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

Add in a ``||sprites:change mySprite||`` ``||variables:x position||`` block inside the ``||game:on game update||`` block. Drag the ``||controller:dx (left-right buttons)||`` into change by value.


![Simple sprite moving](/static/tutorials/courses/csintro/motion-and-events/sprite-motion-2/change-by-dx.gif)

```blocks
let mySprite: Sprite = null
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
```


## Step 4

Add in a ``||sprites:change mySprite||`` ``||variables:y position||`` block inside the ``||game:on game update||`` block. Drag the ``||controller:dy (up-down buttons)||`` into change by value.

```blocks
let mySprite: Sprite = null
game.onUpdate(function () {
    mySprite.y += controller.dy()
})
```

## Complete @unplugged

Congratulations, your sprite can move around the screen!

You can click on the plus sign in the ``||controller:dx||`` and ``||controller:dy||`` blocks to change to speed that the sprite moves.