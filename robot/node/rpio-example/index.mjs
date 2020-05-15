import rpio from "rpio";

const BLUE_LED = 18;
const FORWARD_LEFT=16;
const FORWARD_RIGHT=11;
const BACKWARD_LEFT=13;
const BACKWARD_RIGHT=15;

function blinkBlue(){
    rpio.open(BLUE_LED, rpio.OUTPUT, rpio.High);
    rpio.sleep(1);
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
    goForward(2);
    blinkBlue();
})();




