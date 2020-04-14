# Raspberry Pi Serial (and GPIO) communication examples

This project was created to house the raspberry pi work I am doing.

# Robot

This includes Python code that I am currently using to control parts of the robot. It will evenetually include the UI for the robot.

# Arduino

For the robot's "face" I am using the Arduino and a TFT LCD. I will be communicating to the LCD to tell it what to show via the USB serial port on the device. 

# Commands

    sudo avrdude -p m128 -carduino -e -U flash:w:test2.hex -P/dev/ttyACM0