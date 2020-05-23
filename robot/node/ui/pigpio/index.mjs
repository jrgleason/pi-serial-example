import { SubRoute } from '../util/SubRoute.mjs';
import pigpio from 'pigpio';
const { Gpio } = pigpio;

const BASIC_CONFIG = {
    mode: Gpio.OUTPUT
}
const HIGH = 1;
const LOW = 0;

class Led {
    constructor(num = 24){
        this.num = num;
        this.gpio = new Gpio(num, BASIC_CONFIG);
    }
    turnOff(){
        this.gpio.digitalWrite(LOW);
    }
    turnOn(){
        this.gpio.digitalWrite(HIGH);
    }
    blink(delay=1000){
        this.turnOn();
        setTimeout(this.turnOff.bind(this), delay);
    }
}

export class Robot extends SubRoute {
    constructor() {
        super();
        this.setRoute('get', '/light/on', this.onLightOnGet.bind(this));
        this.setRoute('get', '/light/off', this.onLightOffGet.bind(this));
        this.led = new Led();
    }
    async onLightOnGet(ctx){
        this.led.turnOn();
    }
    async onLightOffGet(ctx){
        this.led.turnOff();
    }
}