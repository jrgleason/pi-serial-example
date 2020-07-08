import {Gpio, BASIC_CONFIG, HIGH, LOW} from "./Util.mjs";

export class SimpleSensor{
    constructor(led, motor, pin = 6){
        this.pin = pin;
        this.led = led;
        this.motor = motor;
        this.gpio = new Gpio(pin, {
                                      mode: Gpio.INPUT,
                                      edge: Gpio.EITHER_EDGE,
                                      pullUpDown: Gpio.PUD_DOWN,
                                      alert: true
                                  });
        this.gpio.on('alert', this.onAlert.bind(this));
        this.gpio.on('interrupt', this.onInterrupt.bind(this));
    }
    objectDetected(){
        this.led.turnOn();
        this.motor.allStop();
    }
    onAlert(level){
        console.log(`Alert Fired the value is ${JSON.stringify(level)}`);
        if(!this.led) return;
        level ? this.led.turnOff() : this.objectDetected();
    }
    onInterrupt(level){
        console.log(`onInterrupt Fired the value is ${JSON.stringify(level)}`);
    }
}