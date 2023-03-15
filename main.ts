function toggleIndex (addr: number) {
    led.toggle(addr % 5, addr / 5)
}
input.onButtonPressed(Button.A, function () {
    dir = (dir + 3) % 4
})
input.onButtonPressed(Button.B, function () {
    dir = (dir + 1) % 4
})
function randomApple () {
    apple = randint(0, 23 - body.length)
    for (let index = 0; index <= apple; index++) {
        if (body.indexOf(index) >= 0) {
            apple += 1
        }
    }
    if (pos <= apple) {
        apple += 1
    }
}
let apple = 0
let pos = 0
let body: number[] = []
let dir = 0
let directions = [
20,
1,
5,
24
]
dir = 0
body = [22]
pos = 17
randomApple()
while (body.indexOf(pos) < 0) {
    basic.clearScreen()
    body.push(pos)
    for (let value of body) {
        toggleIndex(value)
    }
    for (let index = 0; index < 5; index++) {
        toggleIndex(apple)
        basic.pause(100)
    }
    pos = (pos + directions[dir]) % 25
    if (pos == apple) {
        game.addScore(body.length)
        randomApple()
        toggleIndex(apple)
        basic.pause(100)
    } else {
        body.shift()
    }
}
game.gameOver()
