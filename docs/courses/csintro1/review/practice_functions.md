# Practice #1: Efficient Teleportation

In this demo we'll get practice making functions and get a reminder why using functions will help us in the long run.

1. Make a sprite and on each of the four arrow key presses (use 'on up button press', 'on down button press', 'on left button press', 'on right button press'), make the following blocks execute:
	- Have your sprite say "Teleporting!"
	- pause/wait 200 ms
	- set your sprite to random x and y positions (pick something that still has the sprite mostly visible, so not too big or small)

If doing this stuff by yourself seems like good practice, go ahead and start on it. If you get tired of doing tedious things / think you have had enough practice, feel free to load up this code that has step 1 completed.

```block
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(__internal.__timePicker(200))
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(__internal.__timePicker(200))
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(__internal.__timePicker(200))
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Teleporting!")
    pause(__internal.__timePicker(200))
    sprite.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
})
sprite = sprites.create(img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 a a a a a a a a a a 1 a a 
a a 1 1 a a a a a a a a 1 1 a a 
a a a 1 1 a a a a a a a 1 a a a 
a a a a 1 1 1 a a a a a 1 a a a 
a a a a a a 1 1 1 1 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
`, SpriteKind.Player)
```
Wow! It sure was annoying to write out the same code / blocks each time we wanted to do the same thing.  Take a second to consider if our next task was: change it so that each button press now says "I'm teleporting" instead of just "Teleporting!".  We would have to change all 4 different locations of blocks code even though they all are doing the same thing. It would be much nicer if we didn't have to do all that work each single time when they all are doing the same thing. Lets save ourself some headache and group the code into a function instead.

2. Define a function 'teleport' and let's start replacing all our old code so that it's more flexible and readable.
	- copy one of the blocks bodies of the 'on-button_press' and put it into the 'teleport' function
	- in all the on-button-press blocks, delete the duplicate code and just call the 'teleport' function
	- try running it! We shouldn't have changed any of the behavior, so it should still do the same thing as before.  The difference is that our code is a little bit more flexible and powerful now.

3. To show that this is actually better, let's do what we suggested earlier: make a change to what should happen in every button press. Let's make it so that our sprite only jumps to a random x position, but stays at the same y position. Try rerunning after and see how easy it was to make changes to a lot of places when we organize our code in helpful ways.

4.  

```block
// :solution
enum SpriteKind {
    Player,
    Enemy
}
let sprite: Sprite = null
function teleport() {
    sprite.say("Teleporting!")
    pause(__internal.__timePicker(200))
    sprite.x = Math.randomRange(0, scene.screenWidth())
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport()
})
sprite = sprites.create(img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a 1 1 1 a a a a a 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a 1 a a a a a a a a a a 1 a a 
a a 1 1 a a a a a a a a 1 1 a a 
a a a 1 1 a a a a a a a 1 a a a 
a a a a 1 1 1 a a a a a 1 a a a 
a a a a a a 1 1 1 1 1 1 1 a a a 
a a a a a a a a a a a a a a a a 
`, SpriteKind.Player)
// :end-solution
```

5. Let's make A and B button presses do something too (let's have them both do the same something though)!  Some ideas are they could do something similar to the earlier where the sprite moves its location. They could do things that change the background color, or play a sound, or maybe the sprite says new things.  Whatever you do though, use a function to group the code together so that our code will be more flexible and readable.

# Practice #2: Opportunities for Functions

In this example, we have some not-so-great blocks code for you to improve on. Try using functions to replace code where helpful.

### ~hint
 You may find it helpful to use more than one function.  Start by looking for bigger amounts of duplicate code and then look for smaller things once you think you've found the bigger pieces. 
### ~

```block
enum SpriteKind {
    Player,
    Enemy,
    Wall
}
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite.say("Hmm I should switch colors . . .")
    pause(__internal.__timePicker(1000))
    sprite.say("transforming!!")
    pause(__internal.__timePicker(2000))
    sprite.setImage(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 f 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 3 f 3 3 3 
3 3 3 3 f f 3 3 3 3 f f 3 3 3 3 
3 3 3 3 3 3 f f f f f 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`)
    sprite.say("How is this one?")
    pause(__internal.__timePicker(1000))
    sprite.say("transforming!!")
    pause(__internal.__timePicker(2000))
    sprite.setImage(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 
4 4 4 4 f f 4 4 4 4 f f 4 4 4 4 
4 4 4 4 4 4 f f f f f 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    sprite.say("Maybe brown is better")
    pause(__internal.__timePicker(1000))
    sprite.say("transforming!!")
    pause(__internal.__timePicker(2000))
    sprite.setImage(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e 1 e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e e 1 e e e 
e e e e 1 1 e e e e 1 1 e e e e 
e e e e e e 1 1 1 1 1 e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`)
    sprite.say("ehh I don't know")
    pause(__internal.__timePicker(1000))
    sprite.say("transforming!!")
    pause(__internal.__timePicker(2000))
    sprite.setImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f f 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
    sprite.say("Blue is the best in the end!")
})
info.setScore(0)
sprite = sprites.create(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f f 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, SpriteKind.Player)
sprite.x = 8
sprite.say("Hmm I should switch colors . . .")
pause(__internal.__timePicker(1000))
sprite.say("transforming!!")
pause(__internal.__timePicker(2000))
sprite.setImage(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 f 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 3 f 3 3 3 
3 3 3 3 f f 3 3 3 3 f f 3 3 3 3 
3 3 3 3 3 3 f f f f f 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`)
sprite.say("How is this one?")
pause(__internal.__timePicker(1000))
sprite.say("transforming!!")
pause(__internal.__timePicker(2000))
sprite.setImage(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 
4 4 4 4 f f 4 4 4 4 f f 4 4 4 4 
4 4 4 4 4 4 f f f f f 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
sprite.say("Maybe brown is better")
pause(__internal.__timePicker(1000))
sprite.say("transforming!!")
pause(__internal.__timePicker(2000))
sprite.setImage(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e 1 e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e e 1 e e e 
e e e e 1 1 e e e e 1 1 e e e e 
e e e e e e 1 1 1 1 1 e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`)
sprite.say("ehh I don't know")
pause(__internal.__timePicker(1000))
sprite.say("transforming!!")
pause(__internal.__timePicker(2000))
sprite.setImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f f 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
sprite.say("Blue is the best in the end!")
```

```block
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Wall
}
let sprite: Sprite = null
function transformMsg() {
    pause(__internal.__timePicker(1000))
    sprite.say("transforming!!")
    pause(__internal.__timePicker(2000))
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    colorSwaps()
})
function colorSwaps() {
    sprite.say("Hmm I should switch colors . . .")
    transformMsg()
    sprite.setImage(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 f 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 f 3 3 3 3 3 3 3 f 3 3 3 
3 3 3 3 f f 3 3 3 3 f f 3 3 3 3 
3 3 3 3 3 3 f f f f f 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`)
    sprite.say("How is this one?")
    transformMsg()
    sprite.setImage(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 f 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 4 4 f 4 4 4 
4 4 4 4 f f 4 4 4 4 f f 4 4 4 4 
4 4 4 4 4 4 f f f f f 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    sprite.say("Maybe brown is better")
    transformMsg()
    sprite.setImage(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e 1 e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e 1 e e e e e e e 1 e e e 
e e e e 1 1 e e e e 1 1 e e e e 
e e e e e e 1 1 1 1 1 e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`)
    sprite.say("ehh I don't know")
    transformMsg()
    sprite.setImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 . 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f 9 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
    sprite.say("Blue is the best in the end!")
}
info.setScore(0)
sprite = sprites.create(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 f 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 
9 9 9 9 f f 9 9 9 9 f f 9 9 9 9 
9 9 9 9 9 9 f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, SpriteKind.Player)
sprite.x = 8
colorSwaps()
// :end-solution
```