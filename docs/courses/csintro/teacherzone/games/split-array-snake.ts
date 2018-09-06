// https://makecode.com/_HgpD1wXMbT94

/**
* Snake Example
* 2d Arrays
*/
let size = 8
let width = screen.width / size
let height = screen.height / size

let xDirection = 1
let yDirection = 0
let speed = 0.3
let time = 1

let snakeX: number[]
let snakeY: number[]

let foodX = 0
let foodY = 0

let level = 0
let lastFoodIndex = 9

function nextLevel() {
    if (level) {
        foodX = -1
        foodY = -1
        show()
        pause(300)
    }
    level++
    game.splash("Level " + level, "")
    pause(1000)
    lastFoodIndex = 1
    snakeX = [6, 5]
    snakeY = [5, 5]
    time = 1
    speed = 1 / (level / 2 + 2)
    xDirection = 1
    yDirection = 0
}

function getSnakeX(index: number) {
    return snakeX[index]
}

function getSnakeY(index: number) {
    return snakeY[index]
}

function inSnake(x: number, y: number) {
    for (let i = 0; i < snakeX.length; i++) {
        if (getSnakeX(i) == x && getSnakeY(i) == y) {
            return true;
        }
    }
    return false;
}

function newFood() {
    lastFoodIndex++;
    if (lastFoodIndex >= 5 + (level / 2)) {
        music.playSound(music.sounds(Sounds.PowerUp))
        nextLevel()
    } else {
        music.playSound(music.sounds(Sounds.BaDing))
    }
    do {
        foodX = Math.randomRange(1, width - 2)
        foodY = Math.randomRange(1, height - 2)
    } while (inSnake(foodX, foodY));
}

function isEdge(x: number, y: number) {
    return (x == 0 || y == 0 || x == width - 1 || y == height - 1)
}

function show() {
    screen.fill(0)
    for (let x = 0; x < width; ++x)
        for (let y = 0; y < height; ++y) {
            let c = 0
            if (isEdge(x, y)) {
                c = 3
            }
            if (inSnake(x, y))
                c = 4
            screen.fillRect(x * size, y * size, size - 1, size - 1, c)
            if (x == foodX && y == foodY) {
                screen.print("" + lastFoodIndex, x * size + 1, y * size + 1)
            }
        }
}

newFood()

game.onPaint(function () {
    if (controller.dx(100)) {
        xDirection = Math.sign(controller.dx(100))
        yDirection = 0
    } else if (controller.dy(100)) {
        xDirection = 0
        yDirection = Math.sign(controller.dy(100))
    }

    time += game.eventContext().deltaTime
    if (time > speed) {
        let x = getSnakeX(0);
        let y = getSnakeY(0);
        x += xDirection
        y += yDirection
        if (getSnakeX(1) == x && getSnakeY(1) == y) {
            // no turning back
            x -= 2 * xDirection
            y -= 2 * yDirection
        }

        if (inSnake(x, y) || isEdge(x, y)) {
            game.over()
            return
        }

        snakeX.unshift(x)
        snakeY.unshift(y)
        if (x == foodX && y == foodY) {
            newFood()
        } else {
            snakeX.pop()
            snakeY.pop()
        }
        time = 0
    }
    show()
})