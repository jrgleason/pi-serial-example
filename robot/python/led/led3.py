from gpiozero import PWMLED
from time import sleep

led = PWMLED(26)
led2 = PWMLED(19)

while True:
    led.value = 1  # off
    led2.value = 0.25 
