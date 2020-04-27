#define NAPI_EXPERIMENTAL
#include <node_api.h>
#include <pigpio.h>
#include <stdio.h>
#include "robot_node.h"
#include "robot.h"
#include "node_common.h"

napi_value init(napi_env env, napi_value exports) {
    napi_status status;
    napi_value fn;
    if (initialize() < 0) return NULL;
    napi_property_descriptor commands[] = {
        DECLARE_NAPI_PROPERTY("forward", node_forward),
        DECLARE_NAPI_PROPERTY("backward", node_backward),
        DECLARE_NAPI_PROPERTY("left", node_left),
        DECLARE_NAPI_PROPERTY("right", node_right),
        DECLARE_NAPI_PROPERTY("stop", node_stop),
        DECLARE_NAPI_PROPERTY("turnOnLight", node_turnOnLight),
        DECLARE_NAPI_PROPERTY("turnOffLight", node_turnOffLight),
    };
    status = napi_define_properties(env, exports, 6, commands);
    if (status != napi_ok) return NULL;
    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init)
