input.onButtonPressed(Button.A, function () {
    ship.move(1)
    ship.ifOnEdgeBounce()
})
input.onButtonPressed(Button.B, function () {
    ship.turn(Direction.Right, 45)
})
let asteroid: game.LedSprite = null
let sen1: game.LedSprite = null
let sen4: game.LedSprite = null
let sen3: game.LedSprite = null
let sen2: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
ship.turn(Direction.Left, 90)
game.setLife(5)
basic.showIcon(IconNames.Target)
basic.showString("Treasure Planet")
basic.forever(function () {
    sen2 = game.createSprite(4, 1)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        sen2.move(-1)
        if (sen2.isTouching(ship)) {
            game.removeLife(1)
        }
        basic.pause(500)
    }
    sen2.delete()
})
basic.forever(function () {
    sen3 = game.createSprite(0, 3)
    basic.pause(500)
    while (true) {
        sen3.move(1)
        if (sen3.isTouching(ship)) {
            game.removeLife(1)
        }
        sen3.ifOnEdgeBounce()
        basic.pause(200 + 10 * randint(0, 10))
    }
})
basic.forever(function () {
    sen4 = game.createSprite(3, 2)
    basic.pause(500)
    while (true) {
        sen4.move(1)
        if (sen4.isTouching(ship)) {
            game.removeLife(1)
        }
        sen4.ifOnEdgeBounce()
        basic.pause(200 + 10 * randint(0, 10))
    }
})
basic.forever(function () {
    sen1 = game.createSprite(0, 1)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        sen1.move(1)
        if (sen1.isTouching(ship)) {
            game.removeLife(1)
        }
        basic.pause(500)
    }
    sen1.delete()
})
basic.forever(function () {
    asteroid = game.createSprite(4, 0)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        asteroid.move(-1)
        if (asteroid.isTouching(ship)) {
            game.addScore(randint(13, 73))
            ship.set(LedSpriteProperty.X, 2)
            ship.set(LedSpriteProperty.Y, 4)
            ship.set(LedSpriteProperty.Direction, randint(0, 359))
            asteroid.delete()
        }
        basic.pause(237)
    }
    asteroid.delete()
})
