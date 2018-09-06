enum SpriteKind {
    Player,
    Basketball,
    Hoop,
    Ray
}
let angle: number = 0;
let pow: number = 50;

const iter: number = 3;
const gravity: number = 20;

let player: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . . 7 . 7 . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . 7 7 7 7 . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player);
let basketball: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . 4 4 f 4 f 4 4 . . . . . 
. . . f f f f f f f f f . . . . 
. . . . 4 4 f 4 f 4 4 . . . . . 
. . . . . f 4 4 4 f . . . . . . 
. . . . . . 4 4 4 . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Basketball);
basketball.setFlag(SpriteFlag.StayInScreen, true)

let hoop: Sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c c c . . . 
. . . . . c c c c c c c c . . . 
. . c c c c . . . . c c c . . . 
. . c . . . . . . . c c c . . . 
. c c . . . . . . c c c c . . . 
. . c . . . c c c c c c . . . . 
. . c c c c c . . . . c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Hoop);
let bkgd: Image = scene.backgroundImage();
player.x -= 50;
player.y += 30;
basketball.x = player.x + 5;
basketball.y = player.y - 5;
hoop.x += 50;
hoop.y -= 25;

game.onUpdate(function () {
    angle += controller.dx() / 5;
    pow -= controller.dy() / 5;
})

game.onUpdateInterval(50, function () {
    bkgd.fill(15);
    if (!basketball.ay) {
        let xComponent = pow * Math.cos(angle * Math.PI / 180);
        let yComponent = -pow * Math.sin(angle * Math.PI / 180)

        for (let i: number = 0; i < iter; i += (2 * i | 1) / 10) {
            let x = basketball.x + i * xComponent;
            let y = basketball.y - i * yComponent + i * i * gravity / 2;
            bkgd.setPixel(x, y, 1);
        }
    }
})

sprites.onOverlap(SpriteKind.Basketball, SpriteKind.Hoop, function (sprite: Sprite, otherSprite: Sprite) {
    music.playSound(music.sounds(Sounds.PowerUp))
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    basketball.vx = pow * Math.cos(angle * Math.PI / 180);
    basketball.vy = pow * Math.sin(angle * Math.PI / 180);
    basketball.ay = gravity;
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    basketball.ay = 0;
    basketball.vx = 0;
    basketball.vy = 0;
    basketball.x = player.x + 5;
    basketball.y = player.y - 5;
})
