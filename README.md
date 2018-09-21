#### iot-arduino

*By Ritesh Patel*

##### Description

An IoT prototype built with Raspberry Pi3 & Arduino. It's a work in progress. At this moment, this prototype detects JoyStick movement attached to Arduino Board. Raspberry Pi3 is equipped with AWS GreenGrass core to execute Lambda functions locally on the device. GreenGrass core continuously monitors for JoyStick data. Local lambda functions will push data onto AWS for further processing.

**joy.js**

This file is running via Arduino IDE and monitoring JoyStick attached to the breadboard. Upon JoyStick movement, it will pick up data and persist at a pre-determined location on Raspberry Pi 3.

**ggJoyStick.js**

This is your `lambda` code running locally on the `GreenGrass Core`. It will publish `JoyStick data` every 3 seconds onto AWS for further processing.

##### Questions / Issues

Gimme a holler if you have a question.
Cheers!

