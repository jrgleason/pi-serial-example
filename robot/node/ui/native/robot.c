#include <pigpio.h>
#include <stdio.h>
#include <string.h>
#include "robot.h"

int initialized = 0;

int initialize(){
    if(initialized < 0){
        printf("pigpio has already been initialized");
        return 0;
    }
    else if (gpioInitialise() < 0) {
        fprintf(stderr, "pigpio initialisation failed.\n");
        return 1;
    }
    else {
        initialized = 1;
        return 0;
    }
}

int forward(){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 1);
    gpioWrite(OUTPUT_2_GPIO, 0);
    gpioWrite(OUTPUT_3_GPIO, 0);
    gpioWrite(OUTPUT_4_GPIO, 1);
    return(0);
}

int readTemperature(){

}

int backward(){
    gpioWrite(ENABLE_1_2, 1);
    gpioWrite(ENABLE_3_4, 1);
    gpioWrite(OUTPUT_1_GPIO, 0);
    gpioWrite(OUTPUT_2_GPIO, 1);
    gpioWrite(OUTPUT_3_GPIO, 1);
    gpioWrite(OUTPUT_4_GPIO, 0);
    return(0);
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
int turnOnLight(int red, int green, int blue){
    printf("Red: %d Green: %d Blue: %d", red, green, blue);
    gpioWrite(RED_LED_1, red);
    gpioWrite(GREEN_LED_1, green);
    gpioWrite(BLUE_LED_1, blue);
}
int turnOffLight(){
    gpioWrite(RED_LED_1, 0);
    gpioWrite(GREEN_LED_1, 0);
    gpioWrite(BLUE_LED_1, 0);
}