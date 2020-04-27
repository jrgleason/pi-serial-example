#ifndef _ROBOT_NODE
#define _ROBOT_NODE
#include <js_native_api.h>
napi_value node_forward(napi_env env, napi_callback_info args);
napi_value node_backward(napi_env env, napi_callback_info args);
napi_value node_left(napi_env env, napi_callback_info args);
napi_value node_right(napi_env env, napi_callback_info args);
napi_value node_stop(napi_env env, napi_callback_info args);
napi_value helloWorld(napi_env env, napi_callback_info info);
napi_value node_turnOffLight(napi_env env, napi_callback_info info);
napi_value node_turnOnLight(napi_env env, napi_callback_info info);
#endif