// https://makecode.com/_XW53U98PEKJh

enum SpriteKind {
    Player,
    Enemy
}

let player1: Sprite = null
game.splash("Sprite Walker", "\"A\" for coordinates")
player1 = sprites.create(img`
1 1 1 
1 2 1 
1 1 1 
`, SpriteKind.Player)
scene.setBackgroundColor(12)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        // display integer part of coordinates as a string
        game.splash("" + Math.trunc(player1.x) + "", "X")
        game.splash("" + Math.trunc(player1.y) + "", "Y")
    }
    if (controller.B.isPressed()) {
        player1.setPosition(80, 64)
    }
    // Move sprite bigger number is faster for
    // controller.dx(15)
    player1.x += controller.dx(15)
    player1.y += controller.dy(15)
})
