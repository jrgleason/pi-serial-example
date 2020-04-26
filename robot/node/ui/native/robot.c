#include <pigpio.h>
#include <stdio.h>
#include "robot.h"

napi_value forward(napi_env env, napi_callback_info args){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 1);
    gpioWrite(OUTPUT_2_GPIO, 0);
    gpioWrite(OUTPUT_3_GPIO, 0);
    gpioWrite(OUTPUT_4_GPIO, 1);
    return 0;
}
int backward(){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 1);
    gpioWrite(OUTPUT_3_GPIO, 1);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return 0;
}
int left(){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 1);
    gpioWrite(OUTPUT_2_GPIO, 0);
    gpioWrite(OUTPUT_3_GPIO, 1);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return 0;
}
int right(){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 1);
    gpioWrite(OUTPUT_3_GPIO, 0);
    gpioWrite(OUTPUT_4_GPIO, 1);
    return 0;
}
int stop(){
    gpioWrite(ENABLE_1_2, 0);
    gpioWrite(ENABLE_3_4, 0);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 0);
    gpioWrite(OUTPUT_3_GPIO, 0);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return 0;
}
int led(int red, int green, int blue){
    // TODO
    return 1;
}