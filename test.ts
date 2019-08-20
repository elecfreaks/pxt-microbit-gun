toyGunKit.onHit(function () {
    basic.showIcon(IconNames.Sad)
})
toyGunKit.setSendPin(AnalogPin.P1)
toyGunKit.setRecivePin(DigitalPin.P2)
toyGunKit.setFireButton(DigitalPin.P8)
basic.forever(function () {
    if (toyGunKit.openFireButton()) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        toyGunKit.openFire()
    }
})
