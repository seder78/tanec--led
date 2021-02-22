basic.showLeds(`
    . . . # #
    . . . # .
    . # # # .
    # # # # .
    . # # . .
    `)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    music.playTone(147, music.beat(BeatFraction.Half))
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 1)
    music.playTone(196, music.beat(BeatFraction.Half))
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 1)
    music.playTone(165, music.beat(BeatFraction.Half))
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(175, music.beat(BeatFraction.Half))
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(100)
})
