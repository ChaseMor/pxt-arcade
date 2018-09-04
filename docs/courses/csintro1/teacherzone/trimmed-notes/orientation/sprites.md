# Activity: Sprite

In this activity Students are introduced to:

* Using Blocks
* Sprites and Images
* Using Image Editor
* Pixels and Pixel Colors
* Viewing JavaScript
* Color codes in image editor, Blocks and JavaScript

## Concept: Set a Sprite variable to an image using the image editor
## Example: Sprite

## Student Task #1: Create your own sprite

 https://makecode.com/_arj7ewLpXas6 


## Student Task #2: Build a "rainbow numbers" sprite that uses every color in the editor 

### ~hint

Discussion with Students: "The image editor has 16 choices. Why can we only see 15 of the colors at a time. Who sees only 14 colors?"

Answer: "One of the choices is transparent - which is not a color. The background color displays but the images created in the background color are not visible."

### ~  

https://makecode.com/_ipr4sK16fcvq

## What did we learn?

1. Make a table showing 
     - Color (use an approximate color name like white, red, pink, ...)  
     - Color index (1-15)  
     - Color representation in JavaScript
2. Explain what happens to the color index 0 in JavaScript (form a hypothesis)  
3. Explain why we see only 14 colors at a time although there are 16 color indexes (0-15) in the image editor?

### ~hint

students can create a table for colors

Note: JavaScript color is using Hexadecimal (base 16).

Hexadecimal is `0 to 9` for zero to nine, and `a, b, c, d, e, f` for ten through fifteen. 

* **Project consideration** have students research "Hexadecimal" and represent Decimal numbers as Hexadecimal.

Decimal = Hexadecimal:
  * 10 = a
  * 16 = 10
  * 32 = 20
  * 64 = 40
  * 100 = 64
  * 160 = a0
  * 200 = c8
  * 256 = 100
*

| color name | editor color index | JavaScript |
|-------------|-------------------|------------|
| Transparent | 0                 | .          |
| White       | 1                 | 1          |
| Red         | 2                 | 2          |
| Pink        | 3                 | 3          |
| Orange      | 4                 | 4          |
| Yellow      | 5                 | 5          |
| Teal        | 6                 | 6          |
| Green       | 7                 | 7          |
| Blue        | 8                 | 8          |
| Light Blue  | 9                 | 9          |
| Magenta     | 10                | a          |
| Grey        | 11                | b          |
| Grey-Purple | 12                | c          |
| Tan         | 13                | d          |
| Brown       | 12                | e          |
| Black       | 15                | f          |


2. `0` translates into into `.` Student hypotheses will vary.
3. You can only see 14 colors because 1 color is transparent and another color is the same as the background color

### ~

## Rubrics

### ~hint

Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed. This means that to get the highest score, student must pass all previous rubrics.

### ~

### Sprite task rubrics

| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Rainbow Numbers | 15 "colors" represented in task #2 | Completed Color Table connects the color name to both the editor index and the JavaScript number/letter | *Explain answers* are clearly expressed | *Explain answers* are expressed in a unique and/or interesting way or the **Challenge was completed** |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | All answers have clear explanations | Has an exceptional explanation using an original example |

### Score = \_\_\_\_\_\_ /10



## Task Solution Appendix

### Task 1: Create your own sprite

```ts
enum SpriteKind {
    Player,
    Enemy
}
let bigSprite: Sprite = null
bigSprite = sprites.create(img` 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . 2 2 1 1 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 1 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 7 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 7 7 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 7 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 7 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 7 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 7 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 7 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 7 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 1 1 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 1 1 1 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 1 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

```



### Task 2: Build a "rainbow numbers" sprite that uses every color in the editor 

```ts
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(15)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Students will not use controller events to change
    // background but easier for Teacher demo
    scene.setBackgroundColor(1)
})
sprite = sprites.create(img`
1 . . . 2 2 2 . . . . . 3 3 3 . . . . . . 4 . . . . . . . . . . 
1 . . . . . . 2 . . . . 3 . 3 . . . . 4 . 4 . . . . 5 5 5 5 . . 
1 . . . . 2 2 2 . . . . . . 3 . . . . 4 . 4 . . . . 5 . . . . . 
1 . . . 2 . . . . . . . . 3 3 . . . . 4 4 4 . . . . 5 5 5 5 . . 
1 . . . 2 2 2 2 . . . . . . 3 . . . . . . 4 . . . . . . . 5 . . 
. . . . . . . . . . . 3 3 3 3 . . . . . . 4 . . . . . . . 5 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 5 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 6 6 6 6 . . . . 7 7 7 7 7 . . . . . 8 8 8 8 . . . . . . . . 
. 6 6 . . 6 . . . . . . . 7 7 . . . . . 8 . . 8 . . . . 9 9 9 . 
. 6 . . . . . . . . . . . 7 . . . . . . 8 . . 8 . . . 9 9 . 9 . 
. 6 . . . . . . . . . . . 7 . . . . . . 8 8 8 8 . . 9 9 . . 9 . 
. 6 . . . . . . . . . . 7 . . . . . . . . 8 8 8 . . 9 9 . 9 9 . 
. 6 6 6 6 6 . . . . . 7 7 . . . . . . . 8 8 . 8 . . . 9 9 9 9 . 
. 6 6 . . 6 . . . . . 7 . . . . . . . . 8 . . 8 . . . . . . 9 . 
. . 6 6 6 . . . . . . . . . . . . . . . 8 . . 8 . . . . . . 9 . 
. . . . . . . . . . . . . . . . . . . . 8 8 8 8 . . . . . . 9 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 . 
. a . . a a a a . . . . . b . . . b . . . . . . . . . . . . . . 
. a . . a . . a . . . . . b . . . b . . . . . c . c c c c . . . 
. a . a a . . a . . . . . b . . . b . . . . . c . c . . c . . . 
. a . a a a a a . . . . . b . . . b . . . . . c . . . c . . . . 
. a . . . . . . . . . . . b . . . b . . . . . c . . c . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c . . c c c c . . 
. d . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . 
. d . . d d d . . . . . e . e . . e . . . . f . f f f f . . . . 
. d . . . d d . . . . . e . e . . e . . . . f . f . . . . . . . 
. d . . . d d . . . . . e . e e e e . . . . f . f f f f . . . . 
. d . . . . . d . . . . e . . . . e . . . . f . . . . f . . . . 
. d . . d d d d . . . . e . . . . e . . . . f . . . . f . . . . 
. . . . . . . . . . . . . . . . . e . . . . f . f f f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```
