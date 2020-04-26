#define NAPI_EXPERIMENTAL
#include <node_api.h>
#include <stdio.h>
#include "robot.h"

napi_value init(napi_env env, napi_value exports) {
  napi_status status;
  napi_value fn;

  // 'Export' the 'left' function.
  status = napi_create_function(env, NULL, 0, left, NULL, &fn);
  if (status != napi_ok) return NULL;
  // 'Export' the 'right' function.
  status = napi_create_function(env, NULL, 0, right, NULL, &fn);
  if (status != napi_ok) return NULL;
  // 'Export' the 'up' function.
  status = napi_create_function(env, NULL, 0, up, NULL, &fn);
  if (status != napi_ok) return NULL;
  // 'Export' the 'down' function.
  status = napi_create_function(env, NULL, 0, down, NULL, &fn);
  if (status != napi_ok) return NULL;
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init)
