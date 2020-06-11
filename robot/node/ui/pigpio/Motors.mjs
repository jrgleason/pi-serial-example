import {Gpio, BASIC_CONFIG, HIGH, LOW} from "./Util.mjs";

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
    goForward(dutyCycle=255){

    }
}

class Motor {
    constructor(forwardPin, backwardPin, enabled){
        this.forward = new Gpio(forwardPin, BASIC_CONFIG);
        this.backward = new Gpio(backwardPin, BASIC_CONFIG);
        if(enabled){
            this.enabled = new Gpio(enabled, BASIC_CONFIG);
        }
    }
    enable(){
        if(this.enabled) this.enabled.digitalWrite(HIGH);
    }
    disable(){
        if(this.enabled) this.enabled.digitalWrite(LOW);
    }
    goForward(dutyCycle){
        this.enable();
        if(dutyCycle){
            this.forward.pwmWrite(dutyCycle);
            this.backward.digitalWrite(LOW);
        }
        else{
            this.forward.digitalWrite(HIGH);
            this.backward.digitalWrite(LOW);
        }

    }
    goBackward(dutyCycle){
        this.enable();
        if(dutyCycle){
            this.forward.pwmWrite(LOW);
            this.backward.digitalWrite(dutyCycle);
        }
        else{
            this.forward.digitalWrite(LOW);
            this.backward.digitalWrite(HIGH);
        }

    }
    allStop(){
        this.forward.digitalWrite(LOW);
        this.backward.digitalWrite(LOW);
        this.disable();
    }
}

export {L293D, Motor, DualMotor}
