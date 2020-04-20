from gpiozero import LED, LineSensor
from signal import pause
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(20, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
engageSensor = LED(21)
engageSensor.on()
last = False
while True:
  output = GPIO.input(20)
  if(output != 1):
    if(last == False):
      print(GPIO.input(20))
    last=True
  else:
    if (last == True):
      print("Resetting")
    last=False
