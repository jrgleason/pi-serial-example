from gpiozero import LED, LightSensor

led = LED(21)
sensor = LightSensor(20)
led.on()

while True:
    sensor.wait_for_light()
    print("It's light! :)")
    sensor.wait_for_dark()
    print("It's dark :(")
