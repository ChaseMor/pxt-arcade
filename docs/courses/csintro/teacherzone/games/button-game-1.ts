// https://makecode.com/_4wX9261Ri799

enum SpriteKind {
    Player,
    Enemy
}

let count = 0
let director: Sprite = sprites.create(img`.`, SpriteKind.Player)

let buttons: string[] = [
    "A",
    "B"
]
let choice: number = Math.randomRange(0, buttons.length - 1)
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((controller.A.isPressed() && choice == 0) ||
        (controller.B.isPressed() && choice == 1)) {
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

