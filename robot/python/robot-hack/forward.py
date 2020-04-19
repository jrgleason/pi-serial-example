from gpiozero import LED
from time import sleep

rled = LED(26)
gled = LED(19)
gled.value = 1
red = LED(4)
blue = LED(18)
green = LED(22)
red.on()
blue.on()
green.on()
sleep(1)
gled.value = 0
rled.value = 1
red.off()
green.off()
blue.off()
rled.value = 0
