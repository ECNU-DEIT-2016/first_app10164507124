define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const app_component1 = Object.create(_root);
  app_component1.AppComponent2 = class AppComponent2 extends core.Object {};
  (app_component1.AppComponent2.new = function() {
  }).prototype = app_component1.AppComponent2.prototype;
  dart.addTypeTests(app_component1.AppComponent2);
  dart.trackLibraries("packages/first_app/app_component1.ddc", {
    "package:first_app/app_component1.dart": app_component1
  }, '{"version":3,"sourceRoot":"","sources":["app_component1.dart"],"names":[],"mappings":";;;;;;;;;EAeA","file":"app_component1.ddc.js"}');
  // Exports:
  return {
    app_component1: app_component1
  };
});

//# sourceMappingURL=app_component1.ddc.js.map
