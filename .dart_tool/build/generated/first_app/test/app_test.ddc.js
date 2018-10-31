define(['dart_sdk', 'packages/first_app/app_component.template', 'packages/first_app/app_component', 'packages/angular_test/src/bootstrap', 'packages/test/test', 'packages/matcher/src/core_matchers'], function(dart_sdk, app_component, app_component$, bootstrap, test, core_matchers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46template = app_component.app_component$46template;
  const app_component$0 = app_component$.app_component;
  const src__frontend__bed = bootstrap.src__frontend__bed;
  const test$ = test.test;
  const src__frontend__expect = test.src__frontend__expect;
  const src__core_matchers = core_matchers.src__core_matchers;
  const _root = Object.create(null);
  const app_test = Object.create(_root);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  app_test.main = function() {
    let testBed = src__frontend__bed.NgTestBed.forComponent(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory);
    let fixture = null;
    test$.setUp(dart.fn(() => async.async(core.Null, function*() {
      fixture = (yield testBed.create());
    }), VoidToFutureOfNull()));
    test$.tearDown(dart.fn(src__frontend__bed.disposeAnyRunningTest, VoidToFutureOfvoid()));
    test$.test("heading", dart.fn(() => {
      src__frontend__expect.expect(fixture.text, src__core_matchers.contains("My First AngularDart App"));
    }, VoidToNull()));
  };
  dart.trackLibraries("test/app_test.ddc", {
    "app_test.dart": app_test
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAOE,QAAM,UACF,4BAAS,aAAa,+BAAkB,8CAAqB;AACjE,QAA4B;AAE5B,eAAK,CAAC;AACJ,aAAO,IAAG,MAAM,OAAO,OAAO;IAChC;AAEA,kBAAQ,CAAC,uEAAqB;AAE9B,cAAI,CAAC,WAAW;AACd,kCAAM,CAAC,OAAO,KAAK,EAAE,2BAAQ,CAAC;;EAIlC","file":"app_test.ddc.js"}');
  // Exports:
  return {
    app_test: app_test
  };
});

//# sourceMappingURL=app_test.ddc.js.map
