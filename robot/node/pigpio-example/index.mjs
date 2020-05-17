import { Gpio } from 'pigpio';
const BLUE_LED = 24;
const led = new Gpio(BLUE_LED, {
  mode: Gpio.OUTPUT
});
