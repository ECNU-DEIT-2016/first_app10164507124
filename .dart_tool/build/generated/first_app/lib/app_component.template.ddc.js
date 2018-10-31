define(['dart_sdk', 'packages/first_app/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/first_app/src/Random_Generator/R_G_component', 'packages/first_app/app_component', 'packages/angular/angular.template', 'packages/angular/core.template', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/angular_components.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, R_G_component, app_component, angular, core, material_fab, material_fab$, material_icon, material_icon$, material_checkbox, material_checkbox$, has_disabled, angular_components) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__Random_Generator__todo_list_service = R_G_component.src__Random_Generator__todo_list_service;
  const src__Random_Generator__R_G_component = R_G_component.src__Random_Generator__R_G_component;
  const app_component$ = app_component.app_component;
  const angular$46template = angular.angular$46template;
  const core$46template = core.core$46template;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const angular_components$46template = angular_components.angular_components$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__Random_Generator__todo_list_service$46template = Object.create(_root);
  const src__Random_Generator__R_G_component$46css$46shim = Object.create(_root);
  const src__Random_Generator__R_G_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core$.String, dart.dynamic)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidToTodoListService = () => (VoidToTodoListService = dart.constFn(dart.fnType(src__Random_Generator__todo_list_service.TodoListService, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let AppViewOfRGComponent = () => (AppViewOfRGComponent = dart.constFn(src__core__linker__app_view.AppView$(src__Random_Generator__R_G_component.RGComponent)))();
  let AppViewAndintToAppViewOfRGComponent = () => (AppViewAndintToAppViewOfRGComponent = dart.constFn(dart.fnType(AppViewOfRGComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfRGComponent = () => (ComponentRefOfRGComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__Random_Generator__R_G_component.RGComponent)))();
  let ComponentFactoryOfRGComponent = () => (ComponentFactoryOfRGComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__Random_Generator__R_G_component.RGComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _TodoListService_2_5 = Symbol('_TodoListService_2_5');
  const _RGComponent_2_6 = Symbol('_RGComponent_2_6');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("Random Generator");
      this[_el_0][$append](_text_1);
      this[_compView_2] = new src__Random_Generator__R_G_component$46template.ViewRGComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_TodoListService_2_5] = new src__Random_Generator__todo_list_service.TodoListService.new();
      this[_RGComponent_2_6] = new src__Random_Generator__R_G_component.RGComponent.new(this[_TodoListService_2_5]);
      this[_compView_2].create(this[_RGComponent_2_6], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__Random_Generator__todo_list_service.TodoListService) && 2 === nodeIndex) {
        return this[_TodoListService_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_TodoListService_2_5] = null;
    this[_RGComponent_2_6] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:first_app/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__Random_Generator__R_G_component$46template.ViewRGComponent0),
    [_TodoListService_2_5]: dart.fieldType(src__Random_Generator__todo_list_service.TodoListService),
    [_RGComponent_2_6]: dart.fieldType(src__Random_Generator__R_G_component.RGComponent)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__Random_Generator__R_G_component$46template.initReflector();
  };
  dart.defineLazy(src__Random_Generator__todo_list_service$46template, {
    /*src__Random_Generator__todo_list_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__Random_Generator__todo_list_service$46template.initReflector = function() {
    if (dart.test(src__Random_Generator__todo_list_service$46template._visited)) {
      return;
    }
    src__Random_Generator__todo_list_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__Random_Generator__todo_list_service.TodoListService), dart.fn(() => new src__Random_Generator__todo_list_service.TodoListService.new(), VoidToTodoListService()));
    core$46template.initReflector();
  };
  dart.defineLazy(src__Random_Generator__R_G_component$46css$46shim, {
    /*src__Random_Generator__R_G_component$46css$46shim.styles*/get styles() {
      return ["ul._ngcontent-%ID%{list-style:none;padding-left:0}li._ngcontent-%ID%{line-height:3em}li:hover._ngcontent-%ID%{background-color:rgb(152,143,235)}li._ngcontent-%ID% material-checkbox._ngcontent-%ID%{vertical-align:middle}li._ngcontent-%ID% material-fab._ngcontent-%ID%{float:right;vertical-align:middle}.done._ngcontent-%ID%{text-decoration:line-through}"];
    }
  });
  dart.defineLazy(src__Random_Generator__R_G_component$46template, {
    /*src__Random_Generator__R_G_component$46template.styles$RGComponent*/get styles$RGComponent() {
      return [src__Random_Generator__R_G_component$46css$46shim.styles];
    }
  });
  const _el_0$ = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialFabComponent_1_5 = Symbol('_MaterialFabComponent_1_5');
  const _el_2$ = Symbol('_el_2');
  const _compView_2$ = Symbol('_compView_2');
  const _MaterialIconComponent_2_5 = Symbol('_MaterialIconComponent_2_5');
  const _anchor_3 = Symbol('_anchor_3');
  const _el_3_0 = Symbol('_el_3_0');
  const _text_3_1 = Symbol('_text_3_1');
  const _appEl_4 = Symbol('_appEl_4');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_2 = Symbol('_expr_2');
  src__Random_Generator__R_G_component$46template.ViewRGComponent0 = class ViewRGComponent0 extends src__core__linker__app_view.AppView$(src__Random_Generator__R_G_component.RGComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0$]);
      this[_compView_1] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0$][$append](this[_el_1]);
      this.createAttr(this[_el_1], "mini", "");
      this.createAttr(this[_el_1], "raised", "");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialFabComponent_1_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_1]), this[_compView_1].ref);
      this[_compView_2$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      this[_el_2$] = this[_compView_2$].rootEl;
      this.createAttr(this[_el_2$], "icon", "add");
      this.addShimC(html.HtmlElement._check(this[_el_2$]));
      this[_MaterialIconComponent_2_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_2$]));
      this[_compView_2$].create(this[_MaterialIconComponent_2_5], []);
      this[_compView_1].create(this[_MaterialFabComponent_1_5], [JSArrayOfElement().of([this[_el_2$]])]);
      this[_anchor_3] = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](this[_anchor_3]);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(src__Random_Generator__R_G_component$46template.viewFactory_RGComponent2, AppViewAndintToAppViewOfRGComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let subscription_0 = this[_MaterialFabComponent_1_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'main')));
      this.init([], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_1_5].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_1_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "add";
        changed = true;
      }
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      let currVal_2 = _ctx.items[$isEmpty] === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        if (currVal_2) {
          let doc = html.document;
          this[_el_3_0] = doc[$createElement]("p");
          this.addShimE(this[_el_3_0]);
          this[_text_3_1] = html.Text.new("No random number is created yet.");
          this[_el_3_0][$append](this[_text_3_1]);
          this.addInlinedNodes(this[_anchor_3], JSArrayOfNode().of([this[_el_3_0]]), true);
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_3_0]]), true);
        }
        this[_expr_2] = currVal_2;
      }
      this[_NgIf_4_9].ngIf = _ctx.items[$isNotEmpty];
      this[_appEl_4].detectChangesInNestedViews();
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_2$];
      t$0 == null ? null : t$0.destroy();
    }
  };
  (src__Random_Generator__R_G_component$46template.ViewRGComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialFabComponent_1_5] = null;
    this[_el_2$] = null;
    this[_compView_2$] = null;
    this[_MaterialIconComponent_2_5] = null;
    this[_anchor_3] = null;
    this[_el_3_0] = null;
    this[_text_3_1] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_2] = false;
    src__Random_Generator__R_G_component$46template.ViewRGComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("Rand-G"));
    let t = src__Random_Generator__R_G_component$46template.ViewRGComponent0._renderType;
    t == null ? src__Random_Generator__R_G_component$46template.ViewRGComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:first_app/lib/src/Random_Generator/R_G_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__Random_Generator__R_G_component$46template.styles$RGComponent) : t;
    this.setupComponentType(src__Random_Generator__R_G_component$46template.ViewRGComponent0._renderType);
  }).prototype = src__Random_Generator__R_G_component$46template.ViewRGComponent0.prototype;
  dart.addTypeTests(src__Random_Generator__R_G_component$46template.ViewRGComponent0);
  dart.setMethodSignature(src__Random_Generator__R_G_component$46template.ViewRGComponent0, () => ({
    __proto__: dart.getMethods(src__Random_Generator__R_G_component$46template.ViewRGComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__Random_Generator__R_G_component.RGComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__Random_Generator__R_G_component$46template.ViewRGComponent0, () => ({
    __proto__: dart.getFields(src__Random_Generator__R_G_component$46template.ViewRGComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_1_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_2$]: dart.fieldType(html.Element),
    [_compView_2$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_2_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_anchor_3]: dart.fieldType(html.Comment),
    [_el_3_0]: dart.fieldType(html.Element),
    [_text_3_1]: dart.fieldType(html.Text),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_2]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__Random_Generator__R_G_component$46template.ViewRGComponent0, {
    /*src__Random_Generator__R_G_component$46template.ViewRGComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__Random_Generator__R_G_component$46template.viewFactory_RGComponent0 = function(parentView, parentIndex) {
    return new src__Random_Generator__R_G_component$46template.ViewRGComponent0.new(parentView, parentIndex);
  };
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0 = Symbol('_expr_0');
  src__Random_Generator__R_G_component$46template._ViewRGComponent2 = class _ViewRGComponent2 extends src__core__linker__app_view.AppView$(src__Random_Generator__R_G_component.RGComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0$]);
      this[_el_1] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", this[_el_0$]));
      this.addShimC(this[_el_1]);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_1][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__Random_Generator__R_G_component$46template.viewFactory_RGComponent3, AppViewAndintToAppViewOfRGComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.items;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_2_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__Random_Generator__R_G_component$46template._ViewRGComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_1] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0] = null;
    src__Random_Generator__R_G_component$46template._ViewRGComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__Random_Generator__R_G_component$46template.ViewRGComponent0._renderType;
  }).prototype = src__Random_Generator__R_G_component$46template._ViewRGComponent2.prototype;
  dart.addTypeTests(src__Random_Generator__R_G_component$46template._ViewRGComponent2);
  dart.setMethodSignature(src__Random_Generator__R_G_component$46template._ViewRGComponent2, () => ({
    __proto__: dart.getMethods(src__Random_Generator__R_G_component$46template._ViewRGComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__Random_Generator__R_G_component.RGComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__Random_Generator__R_G_component$46template._ViewRGComponent2, () => ({
    __proto__: dart.getFields(src__Random_Generator__R_G_component$46template._ViewRGComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.UListElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__Random_Generator__R_G_component$46template.viewFactory_RGComponent2 = function(parentView, parentIndex) {
    return new src__Random_Generator__R_G_component$46template._ViewRGComponent2.new(parentView, parentIndex);
  };
  const _MaterialCheckboxComponent_1_5 = Symbol('_MaterialCheckboxComponent_1_5');
  const _text_3 = Symbol('_text_3');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _MaterialFabComponent_4_5 = Symbol('_MaterialFabComponent_4_5');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _MaterialIconComponent_5_5 = Symbol('_MaterialIconComponent_5_5');
  const _expr_1 = Symbol('_expr_1');
  let const$0;
  const _handle_trigger_4_0 = Symbol('_handle_trigger_4_0');
  src__Random_Generator__R_G_component$46template._ViewRGComponent3 = class _ViewRGComponent3 extends src__core__linker__app_view.AppView$(src__Random_Generator__R_G_component.RGComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("li");
      this.addShimE(this[_el_0$]);
      this[_compView_1] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0$][$append](this[_el_1]);
      this.createAttr(this[_el_1], "materialTooltip", "Mark item as done");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialCheckboxComponent_1_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_1]), this[_compView_1].ref, null, null, null);
      this[_compView_1].create(this[_MaterialCheckboxComponent_1_5], [const$0 || (const$0 = dart.constList([], dart.dynamic))]);
      this[_el_2$] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0$]);
      this.addShimE(this[_el_2$]);
      this[_text_3] = html.Text.new("");
      this[_el_2$][$append](this[_text_3]);
      this[_compView_4] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_0$][$append](this[_el_4]);
      this.createAttr(this[_el_4], "mini", "");
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_MaterialFabComponent_4_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_4]), this[_compView_4].ref);
      this[_compView_5] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this.createAttr(this[_el_5], "icon", "delete");
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_MaterialIconComponent_5_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_5]));
      this[_compView_5].create(this[_MaterialIconComponent_5_5], []);
      this[_compView_4].create(this[_MaterialFabComponent_4_5], [JSArrayOfElement().of([this[_el_5]])]);
      let subscription_0 = this[_MaterialFabComponent_4_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_4_0)));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialCheckboxComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_done = this[_MaterialCheckboxComponent_1_5];
      let local_item = core$.String._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_4_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_5_5].icon = "delete";
        changed = true;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_0 = local_done.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_2$]), "done", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_3][$text] = core$.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_4];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_5];
      t$0 == null ? null : t$0.destroy();
      this[_MaterialCheckboxComponent_1_5].ngOnDestroy();
    }
    [_handle_trigger_4_0]($event) {
      let local_i = core$.int._check(this.locals[$_get]("index"));
      this.ctx.remove(local_i);
    }
  };
  (src__Random_Generator__R_G_component$46template._ViewRGComponent3.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialCheckboxComponent_1_5] = null;
    this[_el_2$] = null;
    this[_text_3] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_MaterialFabComponent_4_5] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_MaterialIconComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__Random_Generator__R_G_component$46template._ViewRGComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__Random_Generator__R_G_component$46template.ViewRGComponent0._renderType;
  }).prototype = src__Random_Generator__R_G_component$46template._ViewRGComponent3.prototype;
  dart.addTypeTests(src__Random_Generator__R_G_component$46template._ViewRGComponent3);
  dart.setMethodSignature(src__Random_Generator__R_G_component$46template._ViewRGComponent3, () => ({
    __proto__: dart.getMethods(src__Random_Generator__R_G_component$46template._ViewRGComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__Random_Generator__R_G_component.RGComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_4_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__Random_Generator__R_G_component$46template._ViewRGComponent3, () => ({
    __proto__: dart.getFields(src__Random_Generator__R_G_component$46template._ViewRGComponent3.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_1_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_el_2$]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_4_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_5_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core$.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__Random_Generator__R_G_component$46template.viewFactory_RGComponent3 = function(parentView, parentIndex) {
    return new src__Random_Generator__R_G_component$46template._ViewRGComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__Random_Generator__R_G_component$46template, {
    /*src__Random_Generator__R_G_component$46template.styles$RGComponentHost*/get styles$RGComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _TodoListService_0_5 = Symbol('_TodoListService_0_5');
  const _RGComponent_0_6 = Symbol('_RGComponent_0_6');
  src__Random_Generator__R_G_component$46template._ViewRGComponentHost0 = class _ViewRGComponentHost0 extends src__core__linker__app_view.AppView$(src__Random_Generator__R_G_component.RGComponent) {
    build() {
      this[_compView_0$] = new src__Random_Generator__R_G_component$46template.ViewRGComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_TodoListService_0_5] = new src__Random_Generator__todo_list_service.TodoListService.new();
      this[_RGComponent_0_6] = new src__Random_Generator__R_G_component.RGComponent.new(this[_TodoListService_0_5]);
      this[_compView_0$].create(this[_RGComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfRGComponent()).new(0, this, this.rootEl, this[_RGComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__Random_Generator__todo_list_service.TodoListService) && 0 === nodeIndex) {
        return this[_TodoListService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__Random_Generator__R_G_component$46template._ViewRGComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_TodoListService_0_5] = null;
    this[_RGComponent_0_6] = null;
    src__Random_Generator__R_G_component$46template._ViewRGComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__Random_Generator__R_G_component$46template._ViewRGComponentHost0.prototype;
  dart.addTypeTests(src__Random_Generator__R_G_component$46template._ViewRGComponentHost0);
  dart.setMethodSignature(src__Random_Generator__R_G_component$46template._ViewRGComponentHost0, () => ({
    __proto__: dart.getMethods(src__Random_Generator__R_G_component$46template._ViewRGComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__Random_Generator__R_G_component.RGComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__Random_Generator__R_G_component$46template._ViewRGComponentHost0, () => ({
    __proto__: dart.getFields(src__Random_Generator__R_G_component$46template._ViewRGComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__Random_Generator__R_G_component$46template.ViewRGComponent0),
    [_TodoListService_0_5]: dart.fieldType(src__Random_Generator__todo_list_service.TodoListService),
    [_RGComponent_0_6]: dart.fieldType(src__Random_Generator__R_G_component.RGComponent)
  }));
  src__Random_Generator__R_G_component$46template.viewFactory_RGComponentHost0 = function(parentView, parentIndex) {
    return new src__Random_Generator__R_G_component$46template._ViewRGComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__Random_Generator__R_G_component$46template, {
    /*src__Random_Generator__R_G_component$46template._RGComponentNgFactory*/get _RGComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfRGComponent()).new("Rand-G", dart.fn(src__Random_Generator__R_G_component$46template.viewFactory_RGComponentHost0, AppViewAndintToAppViewOfRGComponent())));
    }
  });
  dart.copyProperties(src__Random_Generator__R_G_component$46template, {
    get RGComponentNgFactory() {
      return src__Random_Generator__R_G_component$46template._RGComponentNgFactory;
    }
  });
  dart.defineLazy(src__Random_Generator__R_G_component$46template, {
    /*src__Random_Generator__R_G_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__Random_Generator__R_G_component$46template.initReflector = function() {
    if (dart.test(src__Random_Generator__R_G_component$46template._visited)) {
      return;
    }
    src__Random_Generator__R_G_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__Random_Generator__R_G_component.RGComponent), src__Random_Generator__R_G_component$46template.RGComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__Random_Generator__todo_list_service$46template.initReflector();
  };
  dart.trackLibraries("packages/first_app/app_component.template.ddc", {
    "package:first_app/app_component.template.dart": app_component$46template,
    "package:first_app/src/Random_Generator/todo_list_service.template.dart": src__Random_Generator__todo_list_service$46template,
    "package:first_app/src/Random_Generator/R_G_component.css.shim.dart": src__Random_Generator__R_G_component$46css$46shim,
    "package:first_app/src/Random_Generator/R_G_component.template.dart": src__Random_Generator__R_G_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/Random_Generator/todo_list_service.template.dart","src/Random_Generator/R_G_component.css.shim.dart","src/Random_Generator/R_G_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__Random_Generator__todo_list_service$46template: src__Random_Generator__todo_list_service$46template,
    src__Random_Generator__R_G_component$46css$46shim: src__Random_Generator__R_G_component$46css$46shim,
    src__Random_Generator__R_G_component$46template: src__Random_Generator__R_G_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
