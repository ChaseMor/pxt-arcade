// https://makecode.com/_gkiUMEDhjCy4

let count = 0
let director: Sprite = sprites.create(img`.`)

let buttons: string[] = [
    "A",
    "B",
    "UP",
    "DOWN",
    "LEFT",
    "RIGHT"
]
let choice: number = Math.randomRange(0, buttons.length - 1)
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((choice == 0 && controller.A.isPressed()) 
            || (choice == 1 && controller.B.isPressed())
            || (choice == 2 && controller.up.isPressed())
            || (choice == 3 && controller.down.isPressed())
            || (choice == 4 && controller.left.isPressed())
            || (choice == 5 && controller.right.isPressed())) {
        count += 1
        choice = Math.randomRange(0, buttons.length - 1)
    } else {
        count -= 2
    }
    info.setScore(count)
})

game.onUpdate(function () {
    director.say(buttons[choice]);
})

game.splash("Press the buttons", "GO!")
info.startCountdown(10)

