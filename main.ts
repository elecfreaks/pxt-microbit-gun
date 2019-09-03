/**
 * Functions to micro:bit toy Gun by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#000000 icon="\uf1e2" block="GunKit"

namespace toyGunKit {

    let OpenFirePin = DigitalPin.P8
    let TeamId = 0
    let BulletType = 0
    let SendPin = AnalogPin.P1
    let RecivePin = DigitalPin.P2
    const EVENT_HIT_ID = 100
    const EVENT_HIT_Value = 200
    let ConflictFlag = true
    /**
    * Types of bullets fired
    */
    export enum BulletTypeList {
        //% block="Pistol Cartridge" enumval=0
        PistolCartridge,

        //% block="Triple Tap" enumval=1
        TripleTap,

        //% block="Rocket Gun" enumval=2
        RocketGun
    }
    /**
    * Team Number
    */
    export enum TeamIdList {
        //% block="Blue" enumval=0
        Blue,
        //% block="Red" enumval=1
        Red,
        //% block="Green" enumval=2
        Green,
        //% block="White" enumval=3
        White
    }
	/**
     * TODO: Infrared Coding of Blue Team First Seed Bomb Type
     */
    export function blueZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    /**
     * TODO: Infrared Coding of Blue Team Second Seed Bomb Type
     */
    export function blueOne() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(200)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(560)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(650)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function blueTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(650)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(200)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function redZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function redOne() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function redTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function greenZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function greenOne() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(660)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function greenTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function whiteZero() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function whiteOne() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(SendPin, 0)
    }
    export function whiteTwo() {
        pins.analogWritePin(SendPin, 512)
        // 头
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(680)
        // 00
        pins.analogSetPeriod(SendPin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(SendPin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(SendPin, 0)
    }
    /**
    * TODO: Infrared Emission Module Connection Port
    * @param pin describe parameter here, eg: AnalogPin.P1
    */
    //% block="Setup IR emission at pin %pin"
    //% weight=99
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setSendPin(pin: AnalogPin): void {
        SendPin = pin
    }
    /**
    * TODO: Infrared Receiving Module Connection Port
    * @param pin describe parameter here, eg: DigitalPin.P2
    */
    //% block="Setup IR receiver at pin %pin"
    //% weight=98
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setRecivePin(pin: DigitalPin): void {
        RecivePin = pin
        pins.setPull(RecivePin, PinPullMode.PullUp)
    }

    /**
    * TODO: Set up the connection port of the fire button
    * @param pin describe parameter here, eg: DigitalPin.P8
    */
    //% block="Setup trigger button at pin %pin"
    //% weight=96
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setFireButton(pin: DigitalPin): void {
        OpenFirePin = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    /**
    * TODO: Setting Bullet Type
    * @param type describe parameter here, eg: BulletType.PistolCartridge
    */
    //% weight=88
    //% block="Setup bullet type in %type"
    export function setBulletType(type: BulletTypeList): void {
        BulletType = type
        basic.pause(200)
    }
    /**
    * TODO: Setting Team ID
    * @param id describe parameter here, eg: TeamId.Blue
    */
    //% weight=88
    //% block="Setup team ID in %id"
    export function setTeamId(id: TeamIdList): void {
        TeamId = id
        basic.pause(200)
    }

    /**
    * TODO: The fire button is pressed
    */
    //% weight=79
    //% block="Trigger button is pressed "
    export function openFireButton(): boolean {
        if (pins.digitalReadPin(OpenFirePin) == 0) {
            return true
        }
        else {
            return false
        }
    }

    /**
    * TODO: When the coax receiving module receives data
    */
    //% weight=59
    //% block="Gun being hit"
    export function onHit(handler: () => void) {
        initBackground()
        control.onEvent(EVENT_HIT_ID, EVENT_HIT_Value, handler);
    }

    export function initBackground() {
        control.inBackground(function () {
            while (1) {
                if (pins.digitalReadPin(RecivePin) == 0 && ConflictFlag) {
                    control.raiseEvent(EVENT_HIT_ID, EVENT_HIT_Value)
                    basic.pause(200)
                }
                else {
                    basic.pause(20)
                }

            }
        })
    }
    /**
    * TODO: Infrared Coding Based on Team Number and Bullet Type
    */
    //% weight=78
    //% block="openFire"
    export function openFire(): void {
        ConflictFlag == false
        switch (TeamId) {
            case 0:
                if (BulletType == 0) {
                    blueZero()
                }
                else if (BulletType == 1) {
                    blueOne()
                }
                else if (BulletType == 2) {
                    blueTwo()
                }
                break;
            case 1:
                if (BulletType == 0) {
                    redZero()
                }
                else if (BulletType == 1) {
                    redOne()
                }
                else if (BulletType == 2) {
                    redTwo()
                }
                break;
            case 2:
                if (BulletType == 0) {
                    greenZero()
                }
                else if (BulletType == 1) {
                    greenOne()
                }
                else if (BulletType == 2) {
                    greenTwo()
                }
                break;
            case 3:
                if (BulletType == 0) {
                    whiteZero()
                }
                else if (BulletType == 1) {
                    whiteOne()
                }
                else if (BulletType == 2) {
                    whiteTwo()
                }
                break;
            default:
                break;
        }
        ConflictFlag == true
        basic.pause(500)
    }

}
