from gpiozero import LED
from time import sleep
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(20, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
engageSensor = LED(21)
engageSensor.on()
rled = LED(26)
gled = LED(19)
gled.value = 1
red = LED(4)
blue = LED(18)
green = LED(22)
red.on()
blue.on()
green.on()
while True:
  output = GPIO.input(20)
  if(output != 1):
    print(f"Stopping ${output}")
#    break
gled.value = 0
red.off()
green.off()
blue.off()
