# Activity: Coordinate Walker

In this Activity students investigate the game screen using
* Game X, Y Coordinates

## Concept: Identify the X, Y coordinates of the Game Screen

## Student Activity

### Coordinate Walker

https://makecode.com/_huXKRL3r24iC

```blocks
enum SpriteKind {
    Player,
    Enemy
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("X=" + Math.trunc(player1.x) + " Y=" + Math.trunc(player1.y))
})
let player1: Sprite = null
game.splash("Sprite Walker", "\"A\" for coordinates")
player1 = sprites.create(img`
1 1 1 
1 2 1 
1 1 1 
`, SpriteKind.Player)
scene.setBackgroundColor(12)
game.onUpdate(function () {
    // Move sprite bigger number is faster e.g. - dx(20)
    player1.x += controller.dx(15)
    player1.y += controller.dy(15)
    if (player1.x < -10) {
        player1.x = -10
    }
    if (player1.x > 170) {
        player1.x = 170
    }
    if (player1.y < -10) {
        player1.y = -10
    }
    if (player1.y > 130) {
        player1.x = 130
    }
})
```

### ~hint

Students must get use to the coordinates of the game screen and how they change as a sprite moves.

* **Up** movement changes by getting smaller or **subtracting** from the **Y** coordinate
* **Down**  movement changes by getting larger or **adding** to the **Y** coordinate
* **Left** movement changes by getting smaller or **subtracting** from the **X** coordinate
* **Right** movement changes by getting larger or **adding** to the **X** coordinate

### ~

## What did we learn?

Use **X** and/or **Y** in your answers

1. Describe how coordinates change when moving up versus moving down
2. Describe how coordinates change when moving right versus moving left

### ~hint

### Solutions:

1. The **Y** value changes when moving up and down. It decreases when going up and increases when going down.
1. The **X** value changes when moving left and right. It decreases when going left and increases when going right.

###

### Map Game Screen

### Record Results

### Challenge

## Rubrics

### Coordinate Walker Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Coordinate Walker | Filled in the diagram of all corners (`X`,`Y`) | Diagram is correct | Answered "What did we learn" questions 1 and 2 using `X` and `Y` | Answered questions with clear explanations using examples and/or excellent detail |

### Score = \_\_\_\_\_\_ /10