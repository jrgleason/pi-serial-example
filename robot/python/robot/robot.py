from gpiozero import Robot
from time import sleep

robot = Robot(left=(23, 16), right=(24, 20))

for i in range(4):
    robot.forward()
    sleep(10)
    robot.right()
    sleep(1)
