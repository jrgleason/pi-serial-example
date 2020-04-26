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
napi_value backward(napi_env env, napi_callback_info args){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 1);
    gpioWrite(OUTPUT_3_GPIO, 1);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return 0;
}
napi_value left(napi_env env, napi_callback_info args){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 1);
    gpioWrite(OUTPUT_2_GPIO, 0);
    gpioWrite(OUTPUT_3_GPIO, 1);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return 0;
}
napi_value right(napi_env env, napi_callback_info args){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 1);
    gpioWrite(OUTPUT_3_GPIO, 0);
    gpioWrite(OUTPUT_4_GPIO, 1);
    return 0;
}
napi_value stop(napi_env env, napi_callback_info args){
    gpioWrite(ENABLE_1_2, 0);
    gpioWrite(ENABLE_3_4, 0);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 0);
    gpioWrite(OUTPUT_3_GPIO, 0);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return 0;
}
napi_value led(int red, int green, int blue){
    // TODO
    char arr[1];
    return sprintf(arr,"%ld", 1);;
}