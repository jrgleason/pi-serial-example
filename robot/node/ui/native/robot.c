#include <pigpio.h>
#include <stdio.h>
#include <string.h>
#include "robot.h"

//int forward(){
//    gpioWrite(ENABLE_1_2, 1);
//    gpioWrite(ENABLE_3_4, 1);
//    gpioWrite(OUTPUT_1_GPIO, 1);
//    gpioWrite(OUTPUT_2_GPIO, 0);
//    gpioWrite(OUTPUT_3_GPIO, 0);
//    gpioWrite(OUTPUT_4_GPIO, 1);
//    return 0;
//}

napi_value helloWorld(napi_env env, napi_callback_info info) {
  napi_value world;
  napi_status status;
  const char* str = "world";
  size_t str_len = strlen(str);
  status = napi_create_string_utf8(env, str, str_len, &world);
  if (status != napi_ok) return NULL;
  return world;
}

// TODO finish
//napi_value forward(napi_env env, napi_callback_info args){
//    napi_value promise;
//    napi_deferred deferred = NULL;
//    if (deferred != NULL) {
//        return NULL;
//    }
//    NAPI_CALL(env, napi_create_promise(env, &deferred, &promise));
//
//
//
//
//    return NULL;
//}
//napi_value backward(napi_env env, napi_callback_info args){
//    gpioWrite(ENABLE_1_2, 1);
//    gpioWrite(ENABLE_3_4, 1);
//    gpioWrite(OUTPUT_1_GPIO, 0);
//    gpioWrite(OUTPUT_2_GPIO, 1);
//    gpioWrite(OUTPUT_3_GPIO, 1);
//    gpioWrite(OUTPUT_4_GPIO, 0);
//    return 0;
//}
//napi_value left(napi_env env, napi_callback_info args){
//    gpioWrite(ENABLE_1_2, 1);
//    gpioWrite(ENABLE_3_4, 1);
//    gpioWrite(OUTPUT_1_GPIO, 1);
//    gpioWrite(OUTPUT_2_GPIO, 0);
//    gpioWrite(OUTPUT_3_GPIO, 1);
//    gpioWrite(OUTPUT_4_GPIO, 0);
//    return 0;
//}
//napi_value right(napi_env env, napi_callback_info args){
//    gpioWrite(ENABLE_1_2, 1);
//    gpioWrite(ENABLE_3_4, 1);
//    gpioWrite(OUTPUT_1_GPIO, 0);
//    gpioWrite(OUTPUT_2_GPIO, 1);
//    gpioWrite(OUTPUT_3_GPIO, 0);
//    gpioWrite(OUTPUT_4_GPIO, 1);
//    return 0;
//}
//napi_value stop(napi_env env, napi_callback_info args){
//    gpioWrite(ENABLE_1_2, 0);
//    gpioWrite(ENABLE_3_4, 0);
//    gpioWrite(OUTPUT_1_GPIO, 0);
//    gpioWrite(OUTPUT_2_GPIO, 0);
//    gpioWrite(OUTPUT_3_GPIO, 0);
//    gpioWrite(OUTPUT_4_GPIO, 0);
//    return 0;
//}
//napi_value led(int red, int green, int blue){
//    // TODO
//    char arr[1];
//    return sprintf(arr,"%ld", 1);;
//}