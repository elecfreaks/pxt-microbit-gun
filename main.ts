/**
 * Functions to micro:bit Gun by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#000000 icon="\uf1e2" block="GunKit"

namespace gunKit {

    let openFire_pin = DigitalPin.P0
    let team_button = DigitalPin.P0
    let team_id = 0
    let bullet_button = DigitalPin.P0
    let bullet_type = 0
    let send_pin = AnalogPin.P0
    let recive_pin = DigitalPin.P0
    const EVENT_HIT_ID = 100
    const EVENT_HIT_Value = 200
    let conflict_flag = true
    export enum BulletType {
        //% block="Pistol Cartridge" enumval=0
        PistolCartridge,

        //% block="Triple Tap" enumval=1
        TripleTap,

        //% block="Rocket Gun" enumval=2
        RocketGun
    }
    export enum TeamId {
        //% block="Blue" enumval=0
        Blue,

        //% block="Red" enumval=1
        Red,

        //% block="Green" enumval=2
        Green,

        //% block="White" enumval=3
        White
    }
    export function blueZero() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function blueOne() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(200)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(560)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(650)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function blueTwo() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(650)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(200)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(550)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function redZero() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function redOne() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function redTwo() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(580)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function greenZero() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function greenOne() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function greenTwo() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function whiteZero() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function whiteOne() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function whiteTwo() {
        pins.analogWritePin(send_pin, 512)
        // 头
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(1550)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(500)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(700)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(120)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)

        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 11
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(520)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(680)
        // 00
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        pins.analogSetPeriod(send_pin, 0)
    }


    //% block="set IR recive pin to %pin"
    //% subcategory=Init
    //% weight=98
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setRecivePin(pin: DigitalPin): void {
        recive_pin = pin
        pins.setPull(recive_pin, PinPullMode.PullUp)
    }

    //% block="set IR send pin to %pin"
    //% subcategory=Init
    //% weight=97
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setSendPin(pin: AnalogPin): void {
        send_pin = pin
    }

    //% block="set openFire button to %pin"
    //% subcategory=Init
    //% weight=96
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setFireButton(pin: DigitalPin): void {
        openFire_pin = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }


    //% weight=88
    //% block="set bullet type to %type"
    export function setBulletType(type: BulletType): void {
        bullet_type = type
        basic.pause(200)
    }

    //% weight=88
    //% block="set team id to %id"
    export function setTeamId(id: TeamId): void {
        team_id = id
        basic.pause(200)
    }


    //% weight=79
    //% block="openFire button is pressed"
    export function openFireButton(): boolean {
        if (pins.digitalReadPin(openFire_pin) == 0) {
            return true
        }
        else {
            return false
        }
    }


    //% weight=59
    //% block="on Hit"
    export function onHit(handler: () => void) {
        initBackground()
        control.onEvent(EVENT_HIT_ID, EVENT_HIT_Value, handler);
    }

    export function initBackground() {
        control.inBackground(function () {
            while (1) {
                if (pins.digitalReadPin(recive_pin) == 0 && conflict_flag == true) {
                    control.raiseEvent(EVENT_HIT_ID, EVENT_HIT_Value)
                }
                else {
                    basic.pause(10)
                }

            }
        })
    }

    //% weight=78
    //% block="openFire"
    export function openFire(): void {
        conflict_flag == false
        switch (team_id) {
            case 0:
                if (bullet_type == 0) {
                    blueZero()
                }
                else if (bullet_type == 1) {
                    blueOne()
                }
                else if (bullet_type == 2) {
                    blueTwo()
                }
                break;
            case 1:
                if (bullet_type == 0) {
                    redZero()
                }
                else if (bullet_type == 1) {
                    redOne()
                }
                else if (bullet_type == 2) {
                    redTwo()
                }
                break;
            case 2:
                if (bullet_type == 0) {
                    greenZero()
                }
                else if (bullet_type == 1) {
                    greenOne()
                }
                else if (bullet_type == 2) {
                    greenTwo()
                }
                break;
            case 3:
                if (bullet_type == 0) {
                    whiteZero()
                }
                else if (bullet_type == 1) {
                    whiteOne()
                }
                else if (bullet_type == 2) {
                    whiteTwo()
                }
                break;
            default:
                break;
        }
        conflict_flag == true
        basic.pause(500)
    }

}
