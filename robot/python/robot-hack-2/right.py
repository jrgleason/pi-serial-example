from gpiozero import LED
from time import sleep

red = LED(4)
blue = LED(17)
green = LED(22)
red.on()
blue.on()
green.on()
sleep(1)
red.off()
green.off()
blue.off()
