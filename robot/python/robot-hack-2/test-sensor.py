from gpiozero import Button, LED
from signal import pause
from time import sleep

print("Starting the sensor")
engageSensor = LED(21)
pir = Button(20)
engageSensor.on()
while True:
  print(f'running ${pir.is_pressed}')
  sleep(1)
	
# led = LED(26)
# pir.wait_for_motion()
# print("Motion detected!")
  
