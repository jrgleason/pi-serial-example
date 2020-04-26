// http://www.gilbertogomez.co/nodejs/test/addons-napi/common.h
#ifndef _COMMON_WRAPPER
#define _COMMON_WRAPPER
// this could also be done without this file for example
// napi_property_descriptor hello = { "helloWorld", 0, helloWorld, 0, 0, 0, napi_default, 0 }
#define DECLARE_NAPI_PROPERTY(name, func)                                \
  { (name), 0, (func), 0, 0, 0, napi_default, 0 }
#endif
