#ifndef _TEMP
#define _TEMP
// This can be any standard IO pins
// DHT11 <- sensor
#define MAX_TIMINGS	85
#include <pigpio.h>
#include <stdint.h>
#define OUTPUT_PIN = 26;
int readTemperature();
#endif