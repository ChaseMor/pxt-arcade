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

## Concept: ``||logic:and||`` & ``||logic:or||``

## Example #2a: ``||logic:and||``

## Example #2b: ``||logic:or||``

## Student Task #2: 

https://makecode.com/_48A0e9R3bTY8




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