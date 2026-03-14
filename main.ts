input.onPinPressed(TouchPin.P1, function () {
    endezeit = input.runningTime() + 5000
})
let endezeit = 0
endezeit = 0
basic.forever(function () {
    while (input.runningTime() < endezeit && pins.analogReadPin(AnalogPin.P0) > 500) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . # . . #
            . . . . #
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
