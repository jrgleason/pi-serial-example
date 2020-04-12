from gpiozero import LED
from time import sleep

sleep(3)
red = LED(4)
blue = LED(18)
green = LED(22)
red.on()
blue.on()
green.on()
sleep(1)
red.off()
green.off()
blue.off()
