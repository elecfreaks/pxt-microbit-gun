/**
 * Functions to micro:bit Gun by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#000000 icon="\uf1e2" block="GunKit"

namespace gunKit {

    let openFire_button = DigitalPin.P0
    let load_button = DigitalPin.P0
    let team_button = DigitalPin.P0
    let team_id = 0
    let bullet_button = DigitalPin.P0
    let bullet_type = 0
    let Vibration_pin = DigitalPin.P0
    let send_pin = AnalogPin.P0
    let recive_pin = DigitalPin.P0
    const EVENT_ID = 100
    const EVENT_Value = 200
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
    export function greenOne(){
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
    export function greenTwo(){
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
    export function whiteZero(){
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
    export function whiteOne(){
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
    export function whiteTwo(){
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
        openFire_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }

    //% block="set load bullet button to %pin"
    //% subcategory=Init
    //% weight=95
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setLoadButton(pin: DigitalPin): void {
        load_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    //% block="set change bullet button to %pin"
    //% subcategory=Init
    //% weight=94
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setBulletButton(pin: DigitalPin): void {
        bullet_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    //% block="set change team button to %pin"
    //% subcategory=Init
    //% weight=93
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setTeamButton(pin: DigitalPin): void {
        team_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    //% block="set Vibration pin to %pin"
    //% subcategory=Init
    //% weight=92
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function setVibrationPin(pin: DigitalPin): void {
        Vibration_pin = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }

    //% subcategory=Bullet
    //% weight=91
    //% block="change bullet button is pressed"
    export function bulletButton(): boolean {
        if (pins.digitalReadPin(bullet_button) == 0) {
            return true
        }
        else {
            return false
        }
    }
    //% subcategory=Bullet
    //% weight=90
    //% block="Reload bullet button is pressed"
    export function loadButton(): boolean {
        if (pins.digitalReadPin(load_button) == 0) {
            return true
        }
        else {
            return false
        }
    }
    //% subcategory=Bullet
    //% weight=88
    //% block="set bullet type to %type"
    export function setBulletType(type: BulletType): void {
        bullet_type = type
        basic.pause(200)
    }

    //% subcategory=Team
    //% weight=89
    //% block="change team button is pressed"
    export function teamButton(): boolean {
        if (pins.digitalReadPin(team_button) == 0) {
            return true
        }
        else {
            return false
        }
    }
    //% subcategory=Team
    //% weight=88
    //% block="set team id to %id"
    export function setTeamId(id: TeamId): void {
        team_id = id
        basic.pause(200)
    }

    //% subcategory=Fire
    //% weight=79
    //% block="openFire button is pressed"
    export function openFireButton(): boolean {
        if (pins.digitalReadPin(openFire_button) == 0) {
            return true
        }
        else {
            return false
        }
    }
    /**
     * TODO: Set the time to vibration 
     * @param ms vibration time, eg: 200
     */
    //% subcategory=Fire
    //% weight=75
    //% block="vibration for %ms"
    export function vibration(ms: number): void {
        pins.digitalWritePin(Vibration_pin, 1)
        basic.pause(ms)
        pins.digitalWritePin(Vibration_pin, 0)
    }
    //% subcategory=Hit
    //% weight=59
    //% block="Init health variable to %x=variables_get(Health)"
    export function initHealth(x: number): void {
        //do nothing
    }

    //% subcategory=Hit
    //% weight=59
    //% block="on Hit"
    export function onHit(handler: () => void) {
        initHit()
        control.onEvent(EVENT_ID, EVENT_Value, handler);
    }
    export function initHit() {
        control.inBackground(function () {
            while (1) {
                if (pins.digitalReadPin(recive_pin) == 0 && conflict_flag == true) {
                    control.raiseEvent(EVENT_ID, EVENT_Value)
                }
                else {
                }
                basic.pause(10)
            }
        })
    }

    //% subcategory=Fire
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
    }

}
