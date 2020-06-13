import {Gpio, BASIC_CONFIG, HIGH, LOW} from "./Util.mjs";

export class SimpleSensor{
    constructor(led, pin = 6){
        this.pin = pin;
        this.led = led;
        this.gpio = new Gpio(num, {
                                      mode: Gpio.INPUT,
                                      edge: Gpio.FALLING_EDGE,
                                      pullUpDown: Gpio.PUD_DOWN,
                                      alert: true
                                  });
        this.gpio.on('alert', );
    }
    onAlert(level){
        console.log(`Event is ${JSON.stringify(level)}`);
        if(!this.led) return;
        level ? this.led.turnOff() : this.led.turnOn();
    }
}