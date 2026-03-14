input.onPinPressed(TouchPin.P2, function () {
    endezeit = input.runningTime() + 5000
})
let endezeit = 0
endezeit = 0
basic.forever(function () {
    while (input.runningTime() < endezeit && pins.analogReadPin(AnalogReadWritePin.P1) > 500) {
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
