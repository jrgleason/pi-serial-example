from gpiozero import Motor, LED
from time import sleep

switch = LED(4)
switch.on()

motora = Motor(forward=22, backward=17)
motorb = Motor(forward=18, backward=27)

motora.forward()
motorb.forward()
sleep(3)
