input.onPinPressed(TouchPin.P2, function () {
    endezeit = input.runningTime() + 5000
    ton_gepielt = 0
})
let ton_gepielt = 0
let endezeit = 0
endezeit = 0
ton_gepielt = 0
basic.forever(function () {
    while (input.runningTime() < endezeit && pins.analogReadPin(AnalogReadWritePin.P1) > 500) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . # . . #
            . . . . #
            . . . . .
            `)
        if (endezeit - input.runningTime() <= 2000 && ton_gepielt == 0) {
            music.ringTone(262)
            basic.pause(200)
            music.stopAllSounds()
            ton_gepielt = 1
        }
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
