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

class L293D{
    constructor(
        leftForwardPin = 23,
        leftBackwardPin = 27,
        rightForwardPin = 17,
        rightBackwardPin = 22,
        enable12, enable34
    ){
        this.leftForwardPin = leftForwardPin;
        this.leftBackwardPin = leftBackwardPin;
        this.rightForwardPin = rightForwardPin;
        this.rightBackwardPin = rightBackwardPin;
        this.enable12 = enable12;
        this.enable34 = enable34;
    }
}

class DualMotor{
    constructor(l293d){
        this.left = new Motor(l293d.leftForwardPin, l293d.leftBackwardPin);
        this.right = new Motor(l293d.rightForwardPin, l293d.rightBackwardPin);
        this.motors = [this.left, this.right];
    }
    allForward(){
        this.motors.map((motor)=>motor.goForward());
    }
    allBackward(){
        this.motors.map((motor)=>motor.goBackward());
    }
    allStop(){
        this.motors.map((motor)=>motor.allStop());
    }
}

class Motor {
    constructor(forwardPin, backwardPin){
        this.forward = new Gpio(forwardPin, BASIC_CONFIG);
        this.backward = new Gpio(backwardPin, BASIC_CONFIG);
    }
    goForward(){
        this.forward.digitalWrite(HIGH);
        this.backward.digitalWrite(LOW);
    }
    goBackward(){
        this.forward.digitalWrite(LOW);
        this.backward.digitalWrite(HIGH);
    }
    allStop(){
        this.forward.digitalWrite(LOW);
        this.backward.digitalWrite(LOW);
    }
}

const blueLed = new Led();
const motors = new DualMotor(new L293D());
let i = 0;

const interval = setInterval(()=>{
    if(i > 10){
        motors.allStop();
        clearInterval(interval);
    } else{
        blueLed.blink();
        if((i % 2) == 0){
            motors.allForward();
        } else{
            motors.allBackward();
        }
        i += 1;
    }
}, 2000);
