define(['dart_sdk', 'packages/first_app/app_component1.template', 'packages/first_app/app_component1', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, app_component1, app_component1$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component1$46template = app_component1.app_component1$46template;
  const app_component1$0 = app_component1$.app_component1;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main = Object.create(_root);
  main.main = function() {
    src__bootstrap__run.runApp(app_component1$0.AppComponent2, app_component1$46template.AppComponent2NgFactory);
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAME,8BAAM,iCAAK,gDAAsB;EACnC","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
