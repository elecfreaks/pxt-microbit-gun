# micro:bit gun kit

This is the toy type educational product produced by ELECFREAKS. It can interact with toys purchased in the market and truly complete learning in play.

This library is designed to drive micro:bit gun kit , You can get this here.

[https://www.elecfreaks.com/estore/micro-bit-gun-kit-with-flying-saucer-and-beetle.html](https://www.elecfreaks.com/estore/micro-bit-gun-kit-with-flying-saucer-and-beetle.html)

## Code Example
```JavaScript
gunKit.onHit(function () {
    basic.showIcon(IconNames.Sad)
})
gunKit.setSendPin(AnalogPin.P1)
gunKit.setRecivePin(DigitalPin.P2)
gunKit.setFireButton(DigitalPin.P8)
basic.forever(function () {
    if (gunKit.openFireButton()) {
        gunKit.openFire()
    }
})

```
## Supported targets
for PXT/microbit

## License
MIT
