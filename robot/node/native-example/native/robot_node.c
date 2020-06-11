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
napi_value node_turnOffLight(napi_env env, napi_callback_info info){
    napi_value result;
    napi_status status;
    int answer = turnOffLight();
    status = napi_create_int64(env, answer, &result);
    if (status != napi_ok) return NULL;
    return result;
}
napi_value node_turnOnLight(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value args[3];
    napi_status status;
    status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
    if (status != napi_ok) return NULL;
    int red;
    status = napi_get_value_int64(env, args[0], &red);
    if (status != napi_ok) return NULL;
    int green;
    status = napi_get_value_int64(env, args[1], &green);
    if (status != napi_ok) return NULL;
    int blue;
    status = napi_get_value_int64(env, args[2], &blue);
    if (status != napi_ok) return NULL;
    int result = turnOnLight(red, green, blue);
    napi_value wrappedResult;
    status = napi_create_int64(env, result, &wrappedResult);
    if (status != napi_ok) return NULL;
    return wrappedResult;
}