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