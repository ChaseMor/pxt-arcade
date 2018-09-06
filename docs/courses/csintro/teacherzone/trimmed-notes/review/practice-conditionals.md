# Practice #1: Summer Countdown

https://makecode.com/_KpaC5P4dwaEE

```blocks
enum SpriteKind {
    Player,
    Enemy
}

let schoolDaysLeft = 0
let sprite: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    schoolDaysLeft += -1
    if (schoolDaysLeft == 0) {
        sprite.say("Done with school!!")
        pause(2000)
        game.over()
    } else if (schoolDaysLeft < 8) {
        sprite.say("FINAL WEEK!! WOOHOO!!")
    } else if (schoolDaysLeft % 7 == 0) {
        sprite.say("" + schoolDaysLeft / 7 + " weeks of school left!")
    } else {
        sprite.say("" + schoolDaysLeft + " days of school left!")
    }
})
sprite = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 1 6 6 6 6 6 6 1 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 6 6 6 6 6 6 6 6 6 1 6 6 6 
6 6 6 1 6 6 6 6 6 6 6 6 1 6 6 6 
6 6 6 6 1 1 6 6 6 6 6 1 6 6 6 6 
6 6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Player)
schoolDaysLeft = 48
sprite.x = 8
```

# Practice #2: Dream Fictional Job Survey

https://makecode.com/_157gVb04W9hM

```blocks
if (game.ask("Would you like to see dragons?")) {
    if (game.ask("Would you like to fight them?")) {
        game.splash("job prediction:", "dragon slayer")
    } else {
        game.splash("job prediction:", "dragon rider")
    }
} else {
    if (game.ask("Would you prefer to rule your people (A) or work with them (B).")) {
        game.splash("job prediction:", "royal ruler")
    } else {
        game.splash("job prediction:", "wise elf")
    }
}
```
