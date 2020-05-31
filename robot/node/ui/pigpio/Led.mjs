import {Gpio, BASIC_CONFIG, HIGH, LOW} from "./Util.mjs";

export class Led {
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
    setValue(value){
        this.gpio.digitalWrite(value);
    }
    blink(delay=1000){
        this.turnOn();
        setTimeout(this.turnOff.bind(this), delay);
    }
}