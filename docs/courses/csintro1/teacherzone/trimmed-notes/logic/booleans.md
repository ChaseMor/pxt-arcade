# Activity: Boolean Statements and Expressions

In these activities students will work with:
* Boolean flags and values
* ``||logic:and||`` & ``||logic:or||``
* ``||logic:not||``

## Concept: Boolean Flags

## Example #1: Are you hungry?

https://makecode.com/_975A7yazx1dT

## Student Task #1: Off and on

### Standard:

https://makecode.com/_UgDa7dFb8Aox

### Challenge (Optional):
3. **Challenge:** rather than use an ``||logic:if else||`` block, use the ``||logic:not||`` block to flip ``||isHungry||`` on and off

### ~hint

For the challenge: the ``||logic:not||`` block **negates** whatever value is passed to it - if you pass in ``||variables:value||`` with value set to false, it will become true, and if value is set to true, it will become false.

### ~

https://makecode.com/_JUceve65sPLW

## Concept: ``||logic:not||``

## Example #2:

https://makecode.com/_TPkiUf3gxJkM

## Student Task #2:

https://makecode.com/_5fm9mgdA5gry

## Concept: Alternating booleans

## Example #3:

https://makecode.com/_fm30qcV0FKzH

## Student Task #3:

https://makecode.com/_FD55cagwP32v

## Concept: ``||logic:and||`` & ``||logic:or||``

## Example #4a: ``||logic:and||``

## Example #4b: ``||logic:or||``

## Student Task #4: 

https://makecode.com/_48A0e9R3bTY8

## What did we learn?

1. What is a boolean flag? Describe a case in which you might you want to use one?
2. What is the difference between an ``||logic:and||`` block and an ``||logic:or||`` block?
    * In what cases will they both evaluate to true?
    * In what cases will they both evaluate to false?
    * In what cases will they evaluate differently?


### ~hint

## Possible Solutions:

1. A boolean flag is a way of keeping track of the state of a program. It allows us to write code that changes based on the state that the program is in. It is usually used to turn on or off certain behaviors.
2. The two are different is that they will not always evaluate to the same result when given the same input
    * They both will be true when the two arguments given are true
    * They both will be false when the two arguments given are false
    * They will evaluate to different values if the given arguments are different (i.e. one is true and the other is false)


It may be helpful to draw out the following truth table for when these evaluate to true and when to false

|input1 |input2 |input1 and input2 |input1  or input2 |
|  :-:  |  :-:  |       :-:        |       :-:        |
|true   |true   |true              |true              |
|true   |false  |false             |true              |
|false  |true   |false             |true              |
|false  |false  |false             |false             |

### ~



## Task Solution Appendix

## Student Task #1: Off and on

### Standard:

```ts
let isHungry = false
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        game.splash("You're hungry!")
    } else {
        game.splash("You're not hungry!")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        isHungry = false;
    } else {
        isHungry = true;
    }
})
game.splash("Press A if you are hungry!")
isHungry = false
```

### Challenge:

```ts
let isHungry = false
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        game.splash("You're hungry!")
    } else {
        game.splash("You're not hungry!")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isHungry = !isHungry;
})
game.splash("Press A if you are hungry!")
isHungry = false
```

## Student Task #2:

```ts

enum SpriteKind {
    Player,
    Enemy
}
let isLeft = false
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(isLeft)) {
        mySprite.say("I'm on the right", 3000)
    }
})
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
isLeft = false
game.onUpdate(function () {
    if (mySprite.x < scene.screenWidth() / 2) {
        isLeft = true
    } else {
        isLeft = false
    }
})
```


## Student Task #3:

```ts
blocks
enum SpriteKind {
    Player,
    Enemy,
    Food
}
let projectile: Sprite = null
let pizza = false
let mySprite: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pizza = !(pizza)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pizza) {
        projectile = sprites.createProjectile(img`
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
`, 100, 0, SpriteKind.Food, mySprite)
    } else {
        projectile = sprites.createProjectile(img`
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
`, 0, 100, SpriteKind.Food, mySprite)
    }
})
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
pizza = true
```


## Student Task #4: 

```ts
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 3 . 3 3 3 3 . . . 
. . . 3 . . . . . . . . . 3 . . 
. . . 3 . . . . . . . . . . 3 . 
. . . . . . . . . . . . . . . . 
1 . . 3 . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . . . 
. . . 3 . . . . . . . . . . 3 3 
. . . 3 3 . 3 . . 3 . . 3 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 100, 100)
game.onUpdate(function () {
    if (mySprite.x < 30 && mySprite.y < 30) {
        mySprite.say("hello", 200)
    }
    if (mySprite.x > 80 || mySprite.y > 80) {
        mySprite.say("bye", 200)
    }
})
```