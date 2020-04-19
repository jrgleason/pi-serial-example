from gpiozero import Motor, Robot, LED
from time import sleep

switch = LED(4)
switch.on()

# motora = Motor(forward=22, backward=17)
# motorb = Motor(forward=18, backward=27)


# motora.forward()
# motorb.forward()

robot = Robot(left=(18, 27), right=(22, 17))

robot.forward()
sleep(1)
robot.right()
sleep(3)
robot.backward()
sleep(1)
