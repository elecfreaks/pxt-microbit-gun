gunKit.onHit(function () {
    basic.showIcon(IconNames.Sad)
})
gunKit.setSendPin(AnalogPin.P1)
gunKit.setRecivePin(DigitalPin.P2)
gunKit.setFireButton(DigitalPin.P8)
basic.forever(function () {
    if (gunKit.openFireButton()) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        gunKit.openFire()
    }
})
