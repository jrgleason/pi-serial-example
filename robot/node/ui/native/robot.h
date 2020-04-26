#ifndef _ROBOT
#define _ROBOT
#include <js_native_api.h>
// These are the motors
static const int ENABLE_1_2 = 4;
static const int ENABLE_3_4 = 0;
static const int OUTPUT_1_GPIO = 18;
static const int OUTPUT_2_GPIO = 17;
static const int OUTPUT_3_GPIO = 27;
static const int OUTPUT_4_GPIO = 22;
// LED
static const int RED_LED_1 = 26;
static const int GREEN_LED_1 = 19;
static const int BLUE_LED_1=0;
// Sensor
static const int ENABLE_AVOIDANCE_SENSOR = 21;
static const int AVOIDANCE_SENSOR_OUTPUT = 20;
// Done Constants
napi_value forward(napi_env env, napi_callback_info args);
//int backward();
//int left();
//int right();
//int stop();
//int led(int red, int green, int blue);
#endif