from gpiozero import PWMLED
from time import sleep

led = PWMLED(26)
led2 = PWMLED(19)

while True:
    led.value = 0  # off
    led2.value = 0
    sleep(1)
    led.value = 0.25
    led2.value = 0.25
    sleep(1)
    led.value = 0.5  # half brightness
    led2.value = 0.5
    sleep(1)
    led.value = 0.75
    sleep(1)
    led.value = 1  # full brightness
    sleep(1)
