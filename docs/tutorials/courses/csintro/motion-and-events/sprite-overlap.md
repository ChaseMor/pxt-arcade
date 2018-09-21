# Sprite Overlap

## Introduction @unplugged

Let's make a game that responds when one sprite overlaps another

![Simple sprite overlap](/static/tutorials/courses/csintro/motion-and-events/sprite-overlap/sprite-overlap.gif)

## Step 1

Start by making 2 new ``||variables:variables||`` called ``||variables:food||`` and ``||variables:head||``

![Set Variables](/static/tutorials/courses/csintro/motion-and-events/sprite-overlap/set-variables.gif)

## Step 2

Start by making a simple sprite. Make this sprite something that can be eaten, like a cherry. Where is says ``||variables:mySprite||`` use the drop down menu to change it to ``||variables:food||``. Change the kind of this sprite from `Player` to `Enemy`.


![Set Name and SpriteKind](/static/tutorials/courses/csintro/motion-and-events/sprite-overlap/set-name-and-spritekind.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
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
`, SpriteKind.Enemy)
```

## Step 3

Make another simple sprite. This will be a sprite that eats food, so it might make sense to make a face or an animal. Change the name of this one to ``||variables:head||``

You can make bigger sprites by clicking the `16x16` at the bottom of the sprite editor panel

```blocks
enum SpriteKind {
    Player,
    Enemy
}
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
`, SpriteKind.Player)
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
`, SpriteKind.Enemy)
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
`, SpriteKind.Player)
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

## Step 6

Make the ``||variables:head||`` sprite move left and right when the player presses the left and right buttons.

```blocks
let head:Sprite = null
game.onUpdate(function () {
    head.x += controller.dx()
})
```

## Step 7

Add in a ``||sprites:on sprite overlaps||`` event from under ``||sprites:Sprites||``. Use the dropdown menu to detect when a sprite of kind `Player` overlaps with a sprite of kind `Enemy`


![Change Overlapping SpriteKind](/static/tutorials/courses/csintro/motion-and-events/sprite-overlap/change-overlapping-spritekind.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Step 8

Add in a ``||sprites:destroy||`` block to delete the food item. The ``||sprites:overlap||`` event automatically sets the sprite of type `Enemy` to ``||variables:otherSprite||``.

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

## Step 9

Next, add in a ``||sprites:say||`` block and make ``||variables:sprite||`` say something.

```blocks
enum SpriteKind {
    Player,
    Enemy
}

let otherSprite:Sprite = null
let sprite:Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.say("Yum!")
})
```

## Complete @unplugged

Congratulations, your sprite can now eat thinsg when they overlap!
