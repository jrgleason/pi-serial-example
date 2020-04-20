from gpiozero import LED
from time import sleep

gled = LED(19)
gled.on()
enMotor = LED(4)
leftMotor = LED(18)
# rightMotor = LED(22)
enMotor.on()
leftMotor.on()
# rightMotor.on()
while True:
  print("running")
