from gpiozero import LED, LineSensor
from signal import pause
engageSensor = LED(21)
engageSensor.on()
sensor = LineSensor(20)
sensor.when_line = lambda: print('Line detected')
sensor.when_no_line = lambda: print('No line detected')
pause()
