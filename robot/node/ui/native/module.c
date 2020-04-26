#define NAPI_EXPERIMENTAL
#include <node_api.h>
#include <stdio.h>
#include "robot.h"

napi_value init(napi_env env, napi_value exports) {
  napi_status status;
  napi_value fn;
  napi_property_descriptor desc = DECLARE_NAPI_PROPERTY("hello", Method);
  NAPI_CALL(env, napi_define_properties(env, exports, 1, &desc));
  // 'Export' the 'left' function.
//  status = napi_create_function(env, NULL, 0, left, NULL, &fn);
//  if (status != napi_ok) return NULL;
//  // 'Export' the 'right' function.
//  status = napi_create_function(env, NULL, 0, right, NULL, &fn);
//  if (status != napi_ok) return NULL;
//  // 'Export' the 'up' function.
//  status = napi_create_function(env, NULL, 0, forward, NULL, &fn);
//  if (status != napi_ok) return NULL;
//  // 'Export' the 'down' function.
//  status = napi_create_function(env, NULL, 0, backward, NULL, &fn);
//  if (status != napi_ok) return NULL;
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init)
