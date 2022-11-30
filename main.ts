let x = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    x = input.lightLevel()
    led.setBrightness(x)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    x = input.lightLevel()
    if (input.lightLevel() < 50) {
        led.setBrightness(255)
    }
    if (input.lightLevel() >= 50) {
        led.setBrightness(128)
    }
    if (input.lightLevel() >= 100) {
        led.setBrightness(64)
    }
    if (input.lightLevel() >= 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
