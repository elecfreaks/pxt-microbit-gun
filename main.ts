/**
 * Functions to micro:bit Gun by ELECFREAKS Co.,Ltd.
 */
//% weight=5 color=#000000 icon="\uf1e2" block="GunKit"

namespace gunKit {


    let fire_button = DigitalPin.P0
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

    export enum Bullet_type {
        //% block="pistol cartridge" enumval=0
        pistol_cartridge,

        //% block="Triple Tap" enumval=1
        Triple_Tap,

        //% block="Rocket gun" enumval=2
        Rocket_gun
    }
    export enum Team_id {
        //% block="Blue" enumval=0
        Blue,

        //% block="Red" enumval=1
        Red,

        //% block="Green" enumval=2
        Green,

        //% block="white" enumval=3
        white
    }
    function Blue_zero() {
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
        control.waitMicros(200)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(330)
        // 01
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(140)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(660)
        // 10
        pins.analogSetPeriod(send_pin, 0)
        control.waitMicros(600)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(280)
        pins.analogSetPeriod(send_pin, 0)
    }
    export function blue_one() {
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
        control.waitMicros(580)
        pins.analogSetPeriod(send_pin, 26)
        control.waitMicros(650)
        pins.analogSetPeriod(send_pin, 0)
    }



    //% block="set IR recive pin to %pin"
    //% subcategory=Init
    //% weight=98
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_recive_pin(pin: DigitalPin): void {
        recive_pin = pin
        pins.setPull(recive_pin, PinPullMode.PullUp)

    }

    //% block="set IR send pin to %pin"
    //% subcategory=Init
    //% weight=97
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_send_pin(pin: AnalogPin): void {
        send_pin = pin
    }

    //% block="set fire button to %pin"
    //% subcategory=Init
    //% weight=96
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_fire_button(pin: DigitalPin): void {
        fire_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }

    //% block="set load bullet button to %pin"
    //% subcategory=Init
    //% weight=95
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_load_button(pin: DigitalPin): void {
        load_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    //% block="set change bullet button to %pin"
    //% subcategory=Init
    //% weight=94
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_bullet_button(pin: DigitalPin): void {
        bullet_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    //% block="set change team button to %pin"
    //% subcategory=Init
    //% weight=93
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_team_button(pin: DigitalPin): void {
        team_button = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }
    //% block="set Vibration pin to %pin"
    //% subcategory=Init
    //% weight=92
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    export function set_vibration_pin(pin: DigitalPin): void {
        Vibration_pin = pin
        pins.setPull(pin, PinPullMode.PullUp)
    }


    //% subcategory=Bullet
    //% weight=88
    //% block="set bullet type to %type"
    export function set_bullet_type(type: Bullet_type): void {
        bullet_type = type
        basic.pause(200)
    }
    //% subcategory=Bullet
    //% weight=91
    //% block="change bullet button is pressed"
    export function check_bullet_button(): boolean {
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
    export function check_load_button(): boolean {
        if (pins.digitalReadPin(load_button) == 0) {
            return true
        }
        else {
            return false
        }
    }

    //% subcategory=Team
    //% weight=89
    //% block="change team button is pressed"
    export function check_team_button(): boolean {
        if (pins.digitalReadPin(team_button) == 0) {
            return true
        }
        else {
            return false
        }
    }
    //% subcategory=Team
    //% weight=88
    //% block="change team id to %id"
    export function set_team_id(id: Team_id): void {
        team_id = id
        basic.pause(200)
    }

    //% subcategory=Fire
    //% weight=79
    //% block="fire button is pressed"
    export function check_fire_button(): boolean {
        if (pins.digitalReadPin(fire_button) == 0) {
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
    export function set_vibration(ms: number): void {
        pins.digitalWritePin(Vibration_pin, 1)
        basic.pause(ms)
        pins.digitalWritePin(Vibration_pin, 0)
    }
    //% subcategory=Hit
    //% weight=59
    //% block="Init health variable to %x=variables_get(Health)"
    export function init_health(x: number): void {
        //do nothing
    }

    //% subcategory=Hit
    //% weight=59
    //% block="on Hit"
    export function onHit(handler: () => void) {
        init_hit()
        control.onEvent(EVENT_ID, EVENT_Value, handler);
    }
    export function init_hit() {
        control.inBackground(function () {
            while (conflict_flag) {
                if (pins.digitalReadPin(recive_pin) == 0) {
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
    //% block="Open fire"
    export function fire(): void {
        conflict_flag == false
        switch (team_id) {
            case 0:
                if (bullet_type == 0) {
                    blue_one()
                }
                else if (bullet_type == 1) {

                }
                else if (bullet_type == 2) {

                }
                break;
            case 1:
                if (bullet_type == 0) {

                }
                else if (bullet_type == 1) {

                }
                else if (bullet_type == 2) {

                }
                break;
            case 2:
                if (bullet_type == 0) {

                }
                else if (bullet_type == 1) {

                }
                else if (bullet_type == 2) {

                }
                break;
            case 3:
                if (bullet_type == 0) {

                }
                else if (bullet_type == 1) {

                }
                else if (bullet_type == 2) {

                }
                break;
            default:
                break;
        }
        basic.pause(50)
        conflict_flag == true
    }

}
