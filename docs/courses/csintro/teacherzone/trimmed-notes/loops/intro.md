# Activity: Intro to loops

In this activity students will work with: 

* sprite motion
* repeat loop

## Concept: Motion with loops

## Student Task 1: Move to the upper left corner, and move faster

### ~hint

This task is intentionally tedious, we want to show that loops are helpful for reducing boring repeated work. So, it is O.K. to stop students early - once they recognize how much is involved in making a relatively small change in the current code.

### ~

https://makecode.com/_Erxa0TJu9eL4


## Concept: Moving a sprite using loops (introduce the repeat block)

## Example: Moving up and to the left using loops

## Student Task 2: Add a second sprite using loops

https://makecode.com/_UXKfMxRAd7hz

### ~hint

Have students examine the JavaScript code to find out what a loops looks like (`for (let i = 0; i < 12; i++)`). Ask for some analysis from students.

Can explain that loops have a counting variable (often `i`) and that it has to be created (instantiated) for use in the loop (using `let`). Also, the counter variable gets destroyed when the loop finishes and the counter (i) only exists inside the loop and is not available to use elsewhere in the program code.

The next part of the loop is checking if the loops is still less than 12 (`i < 12`) - when it is not longer less than 12 the loop is done and stops repeating the code in the loop. This will be covered in the next section on Conditional Logic.

The last part (`i++`) is a short way to write increase `i` by 1. 

Overall, this is challenging code to read the first time. Students should know that they will become competent at reading and writing this type of code if they complete unit 2 of the course.

### ~

## Student Task 3: Boomerang

If a student is stuck on this task, suggest that they move on to the "What did we learn?" section and return to this section afterwards; question 3 is meant to refer to this task, and can serve as a hint to the student.

### ~

https://makecode.com/_9DgVbsC6yfkR

## Additional Challenge or Project

Students can easily extend the Boomerang project.

* Make the boomerang go a random distance using the loop bounds (for example, between 25 and 30 loops)
* Add a ``||game:splash||`` screen or make the ``||controller:A||`` button "throw" the boomerang
* Change the ``||sprites:Y||`` position of the boomerang sprite using the controller. This allows the Boomerang to go up and down and avoid or hit obstacles (see next item)
* Randomly place some obstacle sprites on the far left side of the screen and give points on an overlap
* Randomly place some enemy obstacles and take away lives (consider starting with 2 lives or more)

## What did we learn?

1. Describe how a ``||loop:repeat||`` block makes programming easier by reducing code repetition. Use an example.
2. Explain how it easier or harder to add in a second sprite when with the code inside of the loop that it would have been in the prior (loop-less) version? Why?
3. Did you use more than one ``||loop:repeat||`` in any of the tasks above? Why might you want to have one loop after another, rather than just combining them into a single loop?

### ~hint

### Possible Answers

1. The repeat loop makes repeated code easy by having a single number determine how many times we will repeat. Tell the loop to move the sprite 2 times or 2000 times and it does it just as easily as far as writing code is concerned. Just change the repeat number but leave the body code the same.
2. Adding a second sprite is way easier. The 2 sprites do the same thing just in opposite directions. One moves negative x, y and the other positive x, y. Easier because there is more code in the loop body to keep track of, so more to write in the old version and it is hard to read long code.
3. Answers vary using one or two loops. Using one loop can be confusing because there is very similar code and sprites and easy to mix up. Two loops is a little more code but for some people more it seems simpler and more organized.

### ~
## Rubrics

### ~hint

Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed. This means that to get the highest score, student must pass all previous rubrics.

### ~

## Rubrics

### Loops Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Loops tasks #2 and #3 | Successfully added in a second sprite in task #2 that moved in the opposite direction| Student successfully made the boomerang move to the right 50 pixels with a loop | Successfully moved the boomerang back 50 pixels with a loop | Completed challenge code, making the boomerang "rotate" |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 2 questions fully, or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | All answers have clear explanations | Has an exceptional explanation using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 




## Task Solution Appendix

### Task 1: Move to the upper left corner, and move faster

```ts
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
sprite.x += -5
pause(50)
sprite.y += -5
pause(50)
```

### Task 2: Add a second sprite using loops

```ts
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let sprite2: Sprite = null
sprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 f 1 f 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 f f f 1 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 . 1 1 1 1 1 . 1 . . . 
. . . 1 1 . . 1 1 1 . . 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 12; i++) {
    sprite.x += -5
    sprite2.x += 5
    pause(50)
    sprite.y += -5
    sprite2.y += 5
    pause(50)
}
```

### Task 3: Boomerang

```ts
enum SpriteKind {
    Player,
    Enemy
}
let boomerang: Sprite = null
boomerang = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . . 4 5 4 . . . . 
. . . . . . . . 4 5 5 4 . . . . 
. . . . . . . . 4 5 4 . . . . . 
. . . . . . . 4 5 4 . . . . . . 
. . . . . . . . 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let i = 0; i < 10; i++) {
    boomerang.x += 5
    boomerang.image.flipX()
    pause(200)
}
for (let i = 0; i < 10; i++) {
    boomerang.x += -5
    boomerang.image.flipX()
    pause(200)
}
```