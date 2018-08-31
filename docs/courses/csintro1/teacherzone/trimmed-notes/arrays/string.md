# Activity: Arrays of Strings

## Student Task #1a: Fix the redundancy

1. Start with the code from example #1
2. Use a ``||loops:for index from 0 to 3||`` loop to reduce the redundancy found in the example, without changing the behavior of the code
3. Add (at least) three more strings to the ``||variables:text list||`` array, describing what she had for lunch 
4. Use the ``||array:length of array||`` block to change the bound of the loop, so that it will loop through the entire array no matter the size. Remember to pay attention to difference between the length of the array, and the last valid index
5. **Challenge:** after the princess has given her speech, make her say it again backwards. You may find ``||array:reverse list||`` useful for completing this task

### ~hint

If the four lines the princess was saying were instead stored as four separate variables ("line1", "line2", "line3", and "line4"), would it still be possible to reduce the redundancy using loops?

### ~

The changes in this task make the code a lot easier to read, and demonstrate a very common usage of arrays - iterating over their contents. This is so common, in fact, that there is another loop that is commonly used to iterate over arrays and other data structures. In Blocks, this is the ``||loops:for element||`` loop, but the behavior is often referred to as a `for each` loop. This title comes from the way in which we commonly describe the behavior of the loop; using the code from task #1a, you might say something along the lines of

> **for each** string in text_list, make the princess say that string and then pause for a moment.

https://makecode.com/_9xWYEhADoXJu


## Student Task #1b: Using ``||loops:for element||``

1. Start with the code from task #1a
2. Replace the ``||loops:for index from 0 to||`` loop with a ``||loops:for element||`` loop. Be sure that it refers to the correct array
3. Replace the ``||array:text list get value at index||`` with the ``||variables:value||`` parameter of the ``||loops:for element||`` loop


https://makecode.com/_i58MYf9Xp1Mw


## Student Task #2: Respond to loss of health

1. Start with the code from example #2
2. Create another ``||array:text list||``, stored in a different variable called "enemyScript". Fill it with the following strings:
    * "go away"
    * "why are you running into me"
    * "leave"
3. Add at least three other sprites in different locations around the map of ``||sprites:kind enemy||``
4. Set the player's ``||info:life||`` to 5
5. Create an ``||sprites:on overlap||`` event between ``||sprites:kind player||`` and ``||sprites:kind enemy||``, which causes ``||info:life||`` to change by -1 and the ``||sprites:enemy||`` to say a random word from ``||variables:enemyScript||``
6. At the end of the same ``||sprites:on overlap||`` event, set the enemy to be a ``||sprites:ghost||``, ``||loops:pause||`` for a second and then make it so the sprite isn't a ``||sprites:ghost||``

### ~hint

Review the corgio extension from the Tile Map Extensions lesson; can you guess how the ``||corgio:make myCorg bark!||`` and ``||corgio:teach myCorg the word||`` blocks work?


```package
corgio=github:jwunderl/pxt-corgio#v0.0.12
```

### ~


https://makecode.com/_1u627X797AVf


## What did we learn?

1. What is the difference between a ``||loops:for index from 0 to||`` and a ``||loops:for element||`` loop? Can you think of any situations where you might prefer the ``||loops:for index from 0 to||`` loop when using arrays?
2. In task #1a, why did we use the ``||array:length of array||`` instead of just setting it to the new length (e.g. changing it to be from `0 to 3` to `0 to 6`)?


### ~hint

### Possible Solutions: Answers may vary

1. ``||loops:for element||`` loops are easier and simplier to implement, but ``||loops:for index from 0 to||`` loops allow us to use the ``||variable:index||`` in each loop which may be useful.
2. While both solutions would work, using ``||array:length of array||`` is considered better for a few reasons. The first being that if you change the array, you won't have to do anything the loop to make it work. Also, we might change the size of the array while the program is running and we won't know what number to put in the upper bound since we can't predict the size of the array. Lastly, when writing code, it is best to avoid using numbers when a we have a variable that represent the same thing. When someone is looking at the code and they see `3`, they might not know what that `3` represents, but if you use ``||arrays:length of array||``, it make it more clear that it is the length of the array.

### ~



## Task Solution Appendix

### Task 1a: Fix the redundency

```ts
enum SpriteKind {
    Player,
    Enemy
}
let text_list: string[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
text_list = ["Hello", "I am", "the", "Princess", "I", "ate", "so", "much", "pizza", "for", "lunch"]
for (let index = 0; index <= text_list.length; index++) {
    mySprite.say(text_list[index], 300)
    pause(400)
}
```

### Task 1b: Using ``||loops:for element||``

```ts
enum SpriteKind {
    Player,
    Enemy
}
let text_list: string[] = []
let mySprite: Sprite = null
let list: number[] = []
list = []
mySprite = sprites.create(img`
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
text_list = ["Hello", "I am", "the", "Princess!", "I", "ate", "so", "much", "pizza", "for", "lunch"]
for (let value of text_list) {
    mySprite.say(value, 300)
    pause(400)
}
```

### Task 2: Respond to loss of health

```ts
enum SpriteKind {
    Player,
    Enemy
}
let donut: Sprite = null
let burger: Sprite = null
let pizza: Sprite = null
let enemyScript: string[] = []
let text_list: string[] = []
let mySprite: Sprite = null
let sprite: Sprite = null
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    mySprite.say(Math.pickRandom(text_list), 250)
    mySprite.setPosition(50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.say(Math.pickRandom(enemyScript), 1000)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    pause(1000)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
scene.setTileMap(img`
f f f f f f f f f f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f e e e e e e e e f 
f f f f f f f f f f 
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
mySprite = sprites.create(img`
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
controller.controlSprite(mySprite, 100, 100)
text_list = ["oww", "no walls", "oh no", "I stubbed my toe"]
enemyScript = ["go away", "why are you running into me", "leave"]
pizza = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Enemy)
burger = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Enemy)
donut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
pizza.setPosition(Math.randomRange(24, 136), Math.randomRange(24, 96))
burger.setPosition(Math.randomRange(24, 136), Math.randomRange(24, 96))
donut.setPosition(Math.randomRange(24, 136), Math.randomRange(24, 96))
info.setLife(5)
```