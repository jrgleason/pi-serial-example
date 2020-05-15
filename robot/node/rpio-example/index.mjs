import rpio from "rpio";

const BLUE_LED = 18;
const FORWARD_LEFT=16;
const FORWARD_RIGHT=11;
const BACKWARD_LEFT=13;
const BACKWARD_RIGHT=15;
const SENSOR=33;

rpio.init({gpiomem: false});

function blinkBlue(time){
    console.log("Blinking");
    rpio.open(BLUE_LED, rpio.OUTPUT, rpio.LOW);
    rpio.write(BLUE_LED, rpio.HIGH);
    rpio.sleep(time);
    rpio.close(BLUE_LED);
}

function goForward(time){
    rpio.open(FORWARD_LEFT, rpio.OUTPUT, rpio.HIGH);
    rpio.open(FORWARD_RIGHT, rpio.OUTPUT, rpio.HIGH);
    rpio.sleep(time);
    rpio.close(FORWARD_LEFT);
    rpio.close(FORWARD_LEFT);
}

(()=>{
    rpio.open(SENSOR, rpio.PWM);
    const int = setInterval(()=>{
        console.log(`The sensor is ${rpio.read(SENSOR)}`)
    }, 1000);
    goForward(2);
    blinkBlue(3);
    setTimeout(()=>{
        console.log("Closing sensor");
        rpio.close(SENSOR);
    }, 50000)
})();




