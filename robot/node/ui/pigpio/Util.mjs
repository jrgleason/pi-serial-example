import pigpio from 'pigpio';
const { Gpio } = pigpio;

const BASIC_CONFIG = {
    mode: Gpio.OUTPUT
}

const HIGH = 1;
const LOW = 0;

export {BASIC_CONFIG, HIGH, LOW, Gpio}