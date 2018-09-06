## Extend "Touch The Button"

## Base Game:

## Student Task: Improve "Touch the button 15 times"
```blocks
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    info.stopCountdown()
    game.splash("Next Level!")
    info.setLife(15)
    info.startCountdown(2)
    info.setScore(2 * info.score())
})
info.onCountdownEnd(function () {
    info.changeScoreBy(-10)
    game.over()
})
info.setLife(15)
info.startCountdown(2)
```