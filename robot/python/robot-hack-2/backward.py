from gpiozero import LED
from time import sleep

rled = LED(26)
red = LED(4)
blue = LED(17)
green = LED(27)
rled.on()
red.on()
blue.on()
green.on()
sleep(1)
red.off()
green.off()
blue.off()
rled.off()
