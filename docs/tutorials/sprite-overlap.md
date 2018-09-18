# Sprite Motion

## Introduction @unplugged

Let's make a game that responds when one sprite overlaps another

![Simple sprite moving](/static/tutorials/sprite-motion/sprite-motion.gif)

## Step 1

Start by making 2 new ``||variables:variables||`` called ``||variables:food||`` and ``||variables:head||``


## Step 2

Start by making a simple sprite. Make this sprite something that can be eaten, like a cherry. Where is says ``||variables:mySprite||`` use the drop down menu to change it to ``||variables:food||``.

```blocks
let food: Sprite = null
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . .
`)
```

## Step 3

Make another simple sprite. This will be a sprite that eats food, so it might make sense to make a face or an animal. Change the name of this one to ``||variables:head||``

You can make bigger sprites by clicking the `16x16` at the bottom of the sprite editor panel

```blocks
let head: Sprite = null
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`)
```


## Step 4

Use the ``||sprites:set position of ||`` block to change the position of ``||variables:food||`` and ``||variables:head||`` to (x = 20, y = 60) and (x = 120, y = 60) respectively

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let head: Sprite = null
let food: Sprite = null
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`)
food.setPosition(20, 60)
head.setPosition(120, 60)
```

## Step 5

Make the ``||variables:head||`` sprite move left and right when the player presses the left and right buttons.

```blocks
let head:Sprite = null
game.onUpdate(function () {
    head.x += controller.dx()
})
```

## Step 5

Make the ``||variables:head||`` sprite move left and right when the player presses the left and right buttons.

```blocks
let head:Sprite = null
game.onUpdate(function () {
    head.x += controller.dx()
})
```

## Step 6

Add in


```blocks
enum SpriteKind {
    Player,
    Enemy
}
let otherSprite:Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```

## Step 7

Add in

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let otherSprite:Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
```
## Complete @unplugged

Congratulations, your sprite can move around the screen!

Play around with the different values that you use to change the position.

Also, look at what happens if we change our sprite's velocity or acceleration instead of position.
