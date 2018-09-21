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

Below the block that creates the sprite, place a ``||controller: control sprite with||`` block.

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
controller.controlSprite(mySprite, 100, 100)
```

## Complete @unplugged

Congratulations, your sprite can move around the screen!

You can change the values in the ``||contoller:control sprite with||`` block to adjust the speed of the sprite