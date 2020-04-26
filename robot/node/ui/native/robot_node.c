#include <stdio.h>
#include <string.h>
#include "robot_node.h"
#include "robot.h"

napi_value node_forward(napi_env env, napi_callback_info info){
    napi_value result;
    napi_status status;
    int answer = forward();
    status = napi_create_int64(env, answer, &result);
    if (status != napi_ok) return NULL;
    return result;
}
napi_value node_backward(napi_env env, napi_callback_info info){
    napi_value result;
    napi_status status;
    int answer = backward();
    status = napi_create_int64(env, answer, &result);
    if (status != napi_ok) return NULL;
    return result;
}
napi_value node_left(napi_env env, napi_callback_info info){
    napi_value result;
    napi_status status;
    int answer = left();
    status = napi_create_int64(env, answer, &result);
    if (status != napi_ok) return NULL;
    return result;
}
napi_value node_right(napi_env env, napi_callback_info info){
    napi_value result;
    napi_status status;
    int answer = right();
    status = napi_create_int64(env, answer, &result);
    if (status != napi_ok) return NULL;
    return result;
}
napi_value node_stop(napi_env env, napi_callback_info info){
    napi_value result;
    napi_status status;
    int answer = stop();
    status = napi_create_int64(env, answer, &result);
    if (status != napi_ok) return NULL;
    return result;
}
napi_value helloWorld(napi_env env, napi_callback_info info) {
  napi_value world;
  napi_status status;
  const char* str = "world";
  size_t str_len = strlen(str);
  status = napi_create_string_utf8(env, str, str_len, &world);
  if (status != napi_ok) return NULL;
  return world;
}