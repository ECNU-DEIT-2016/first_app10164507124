define(['dart_sdk', 'packages/first_app/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/first_app/src/todo_list/button_component', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/first_app/app_component', 'packages/angular/angular.template', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_list/material_list_item', 'packages/english_words/english_words', 'packages/angular_components/angular_components.template', 'packages/angular/core.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, module, dom_service, disposer, ng_zone, angular_2, imperative_view, dom_ruler, angular_2$, module$, overlay_ref, zindexer, alignment, dom_popup_source, time, button_component, managed_zone, app_component, angular, material_button, dark_theme, material_button$, material_icon, material_icon$, material_list, material_list$, button_decorator, has_disabled, material_list_item, material_dropdown_base, material_list_item$, english_words, angular_components, core, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, material_fab, material_fab$, reference, focus_interface, base_material_input, material_checkbox, material_checkbox$) {
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
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const time$ = time.time;
  const src__todo_list__todo_list_service = button_component.src__todo_list__todo_list_service;
  const src__todo_list__todo_list_component = button_component.src__todo_list__todo_list_component;
  const src__todo_list__button_component = button_component.src__todo_list__button_component;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const app_component$ = app_component.app_component;
  const angular$46template = angular.angular$46template;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_list__material_list_item$46template = material_list_item.material_list__material_list_item$46template;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_list__material_list_item = material_list_item$.material_list__material_list_item;
  const src__word_pair = english_words.src__word_pair;
  const angular_components$46template = angular_components.angular_components$46template;
  const core$46template = core.core$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__todo_list__button_component$46css$46shim = Object.create(_root);
  const src__todo_list__button_component$46template = Object.create(_root);
  const src__todo_list__todo_list_service$46template = Object.create(_root);
  const src__todo_list__todo_list_component$46css$46shim = Object.create(_root);
  const src__todo_list__todo_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core$.String, dart.dynamic)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core$.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let AppViewOfButtonComponent = () => (AppViewOfButtonComponent = dart.constFn(src__core__linker__app_view.AppView$(src__todo_list__button_component.ButtonComponent)))();
  let AppViewAndintToAppViewOfButtonComponent = () => (AppViewAndintToAppViewOfButtonComponent = dart.constFn(dart.fnType(AppViewOfButtonComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let ComponentRefOfButtonComponent = () => (ComponentRefOfButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__todo_list__button_component.ButtonComponent)))();
  let ComponentFactoryOfButtonComponent = () => (ComponentFactoryOfButtonComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__todo_list__button_component.ButtonComponent)))();
  let VoidToTodoListService = () => (VoidToTodoListService = dart.constFn(dart.fnType(src__todo_list__todo_list_service.TodoListService, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let AppViewOfTodoListComponent = () => (AppViewOfTodoListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent)))();
  let AppViewAndintToAppViewOfTodoListComponent = () => (AppViewAndintToAppViewOfTodoListComponent = dart.constFn(dart.fnType(AppViewOfTodoListComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentRefOfTodoListComponent = () => (ComponentRefOfTodoListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent)))();
  let ComponentFactoryOfTodoListComponent = () => (ComponentFactoryOfTodoListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__todo_list__todo_list_component.TodoListComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _TodoListService_2_5 = Symbol('_TodoListService_2_5');
  const _TodoListComponent_2_6 = Symbol('_TodoListComponent_2_6');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _ButtonComponent_3_5 = Symbol('_ButtonComponent_3_5');
  const __Document_3_6 = Symbol('__Document_3_6');
  const __Window_3_7 = Symbol('__Window_3_7');
  const __DomService_3_8 = Symbol('__DomService_3_8');
  const __AcxImperativeViewUtils_3_9 = Symbol('__AcxImperativeViewUtils_3_9');
  const __DomRuler_3_10 = Symbol('__DomRuler_3_10');
  const __ManagedZone_3_11 = Symbol('__ManagedZone_3_11');
  const __overlayContainerName_3_12 = Symbol('__overlayContainerName_3_12');
  const __overlayContainerParent_3_13 = Symbol('__overlayContainerParent_3_13');
  const __overlayContainer_3_14 = Symbol('__overlayContainer_3_14');
  const __overlaySyncDom_3_15 = Symbol('__overlaySyncDom_3_15');
  const __overlayRepositionLoop_3_16 = Symbol('__overlayRepositionLoop_3_16');
  const __OverlayStyleConfig_3_17 = Symbol('__OverlayStyleConfig_3_17');
  const __ZIndexer_3_18 = Symbol('__ZIndexer_3_18');
  const __OverlayDomRenderService_3_19 = Symbol('__OverlayDomRenderService_3_19');
  const __OverlayService_3_20 = Symbol('__OverlayService_3_20');
  const __defaultPopupPositions_3_21 = Symbol('__defaultPopupPositions_3_21');
  const __DomPopupSourceFactory_3_22 = Symbol('__DomPopupSourceFactory_3_22');
  const __Clock_3_23 = Symbol('__Clock_3_23');
  const _Document_3_6 = Symbol('_Document_3_6');
  const _Window_3_7 = Symbol('_Window_3_7');
  const _DomService_3_8 = Symbol('_DomService_3_8');
  const _AcxImperativeViewUtils_3_9 = Symbol('_AcxImperativeViewUtils_3_9');
  const _DomRuler_3_10 = Symbol('_DomRuler_3_10');
  const _ManagedZone_3_11 = Symbol('_ManagedZone_3_11');
  let const$;
  const _overlayContainerName_3_12 = Symbol('_overlayContainerName_3_12');
  let const$0;
  const _overlayContainerParent_3_13 = Symbol('_overlayContainerParent_3_13');
  let const$1;
  const _overlayContainer_3_14 = Symbol('_overlayContainer_3_14');
  const _overlaySyncDom_3_15 = Symbol('_overlaySyncDom_3_15');
  const _overlayRepositionLoop_3_16 = Symbol('_overlayRepositionLoop_3_16');
  const _OverlayStyleConfig_3_17 = Symbol('_OverlayStyleConfig_3_17');
  const _ZIndexer_3_18 = Symbol('_ZIndexer_3_18');
  const _OverlayDomRenderService_3_19 = Symbol('_OverlayDomRenderService_3_19');
  const _OverlayService_3_20 = Symbol('_OverlayService_3_20');
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  const _defaultPopupPositions_3_21 = Symbol('_defaultPopupPositions_3_21');
  const _DomPopupSourceFactory_3_22 = Symbol('_DomPopupSourceFactory_3_22');
  let const$16;
  const _Clock_3_23 = Symbol('_Clock_3_23');
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_Document_3_6]() {
      if (this[__Document_3_6] == null) {
        this[__Document_3_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_3_6];
    }
    get [_Window_3_7]() {
      if (this[__Window_3_7] == null) {
        this[__Window_3_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_3_7];
    }
    get [_DomService_3_8]() {
      if (this[__DomService_3_8] == null) {
        this[__DomService_3_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_3_7]));
      }
      return this[__DomService_3_8];
    }
    get [_AcxImperativeViewUtils_3_9]() {
      if (this[__AcxImperativeViewUtils_3_9] == null) {
        this[__AcxImperativeViewUtils_3_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_3_8]));
      }
      return this[__AcxImperativeViewUtils_3_9];
    }
    get [_DomRuler_3_10]() {
      if (this[__DomRuler_3_10] == null) {
        this[__DomRuler_3_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_3_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_3_8]));
      }
      return this[__DomRuler_3_10];
    }
    get [_ManagedZone_3_11]() {
      if (this[__ManagedZone_3_11] == null) {
        this[__ManagedZone_3_11] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_3_11];
    }
    get [_overlayContainerName_3_12]() {
      if (this[__overlayContainerName_3_12] == null) {
        this[__overlayContainerName_3_12] = laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_3_12];
    }
    get [_overlayContainerParent_3_13]() {
      if (this[__overlayContainerParent_3_13] == null) {
        this[__overlayContainerParent_3_13] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_3_6]), this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_3_13];
    }
    get [_overlayContainer_3_14]() {
      if (this[__overlayContainer_3_14] == null) {
        this[__overlayContainer_3_14] = laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_3_12]), html.HtmlElement._check(this[_overlayContainerParent_3_13]), this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_3_14];
    }
    get [_overlaySyncDom_3_15]() {
      if (this[__overlaySyncDom_3_15] == null) {
        this[__overlaySyncDom_3_15] = true;
      }
      return this[__overlaySyncDom_3_15];
    }
    get [_overlayRepositionLoop_3_16]() {
      if (this[__overlayRepositionLoop_3_16] == null) {
        this[__overlayRepositionLoop_3_16] = true;
      }
      return this[__overlayRepositionLoop_3_16];
    }
    get [_OverlayStyleConfig_3_17]() {
      if (this[__OverlayStyleConfig_3_17] == null) {
        this[__OverlayStyleConfig_3_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_3_6]));
      }
      return this[__OverlayStyleConfig_3_17];
    }
    get [_ZIndexer_3_18]() {
      if (this[__ZIndexer_3_18] == null) {
        this[__ZIndexer_3_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_3_18];
    }
    get [_OverlayDomRenderService_3_19]() {
      if (this[__OverlayDomRenderService_3_19] == null) {
        this[__OverlayDomRenderService_3_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_3_17], html.HtmlElement._check(this[_overlayContainer_3_14]), core$.String._check(this[_overlayContainerName_3_12]), this[_DomRuler_3_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_3_8]), this[_AcxImperativeViewUtils_3_9], this[_overlaySyncDom_3_15], this[_overlayRepositionLoop_3_16], this[_ZIndexer_3_18]);
      }
      return this[__OverlayDomRenderService_3_19];
    }
    get [_OverlayService_3_20]() {
      if (this[__OverlayService_3_20] == null) {
        this[__OverlayService_3_20] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_3_15], this[_OverlayDomRenderService_3_19], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_3_20];
    }
    get [_defaultPopupPositions_3_21]() {
      if (this[__defaultPopupPositions_3_21] == null) {
        this[__defaultPopupPositions_3_21] = const$15 || (const$15 = dart.constList([const$2 || (const$2 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$4 || (const$4 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$3 || (const$3 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$6 || (const$6 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$5 || (const$5 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$8 || (const$8 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$7 || (const$7 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$11 || (const$11 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$10 || (const$10 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$14 || (const$14 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$12 || (const$12 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$13 || (const$13 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_3_21];
    }
    get [_DomPopupSourceFactory_3_22]() {
      if (this[__DomPopupSourceFactory_3_22] == null) {
        this[__DomPopupSourceFactory_3_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_3_10]);
      }
      return this[__DomPopupSourceFactory_3_22];
    }
    get [_Clock_3_23]() {
      if (this[__Clock_3_23] == null) {
        this[__Clock_3_23] = const$16 || (const$16 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_3_23];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("First Homework");
      this[_el_0][$append](_text_1);
      this[_compView_2] = new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_TodoListService_2_5] = new src__todo_list__todo_list_service.TodoListService.new();
      this[_TodoListComponent_2_6] = new src__todo_list__todo_list_component.TodoListComponent.new(this[_TodoListService_2_5]);
      this[_compView_2].create(this[_TodoListComponent_2_6], []);
      this[_compView_3] = new src__todo_list__button_component$46template.ViewButtonComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_ButtonComponent_3_5] = new src__todo_list__button_component.ButtonComponent.new();
      this[_compView_3].create(this[_ButtonComponent_3_5], []);
      this.init(const$17 || (const$17 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__todo_list__todo_list_service.TodoListService) && 2 === nodeIndex) {
        return this[_TodoListService_2_5];
      }
      if (token === dart.wrapType(html.Document) && 3 === nodeIndex) {
        return this[_Document_3_6];
      }
      if (token === dart.wrapType(html.Window) && 3 === nodeIndex) {
        return this[_Window_3_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 3 === nodeIndex) {
        return this[_DomService_3_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 3 === nodeIndex) {
        return this[_AcxImperativeViewUtils_3_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 3 === nodeIndex) {
        return this[_DomRuler_3_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 3 === nodeIndex) {
        return this[_ManagedZone_3_11];
      }
      if (token === (const$18 || (const$18 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 3 === nodeIndex) {
        return this[_overlayContainerName_3_12];
      }
      if (token === (const$19 || (const$19 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 3 === nodeIndex) {
        return this[_overlayContainerParent_3_13];
      }
      if (token === (const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 3 === nodeIndex) {
        return this[_overlayContainer_3_14];
      }
      if (token === (const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 3 === nodeIndex) {
        return this[_overlaySyncDom_3_15];
      }
      if (token === (const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 3 === nodeIndex) {
        return this[_overlayRepositionLoop_3_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 3 === nodeIndex) {
        return this[_OverlayStyleConfig_3_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 3 === nodeIndex) {
        return this[_ZIndexer_3_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 3 === nodeIndex) {
        return this[_OverlayDomRenderService_3_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 3 === nodeIndex) {
        return this[_OverlayService_3_20];
      }
      if (token === (const$23 || (const$23 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 3 === nodeIndex) {
        return this[_defaultPopupPositions_3_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 3 === nodeIndex) {
        return this[_DomPopupSourceFactory_3_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 3 === nodeIndex) {
        return this[_Clock_3_23];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_TodoListComponent_2_6].ngOnInit();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonComponent_3_5].ngOnInit();
      }
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
      let t$ = this[_compView_3];
      t$ == null ? null : t$.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_TodoListService_2_5] = null;
    this[_TodoListComponent_2_6] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_ButtonComponent_3_5] = null;
    this[__Document_3_6] = null;
    this[__Window_3_7] = null;
    this[__DomService_3_8] = null;
    this[__AcxImperativeViewUtils_3_9] = null;
    this[__DomRuler_3_10] = null;
    this[__ManagedZone_3_11] = null;
    this[__overlayContainerName_3_12] = null;
    this[__overlayContainerParent_3_13] = null;
    this[__overlayContainer_3_14] = null;
    this[__overlaySyncDom_3_15] = null;
    this[__overlayRepositionLoop_3_16] = null;
    this[__OverlayStyleConfig_3_17] = null;
    this[__ZIndexer_3_18] = null;
    this[__OverlayDomRenderService_3_19] = null;
    this[__OverlayService_3_20] = null;
    this[__defaultPopupPositions_3_21] = null;
    this[__DomPopupSourceFactory_3_22] = null;
    this[__Clock_3_23] = null;
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
  dart.setGetterSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getGetters(app_component$46template.ViewAppComponent0.__proto__),
    [_Document_3_6]: dart.dynamic,
    [_Window_3_7]: dart.dynamic,
    [_DomService_3_8]: dart.dynamic,
    [_AcxImperativeViewUtils_3_9]: utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils,
    [_DomRuler_3_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_3_11]: utils__angular__managed_zone__angular_2.Angular2ManagedZone,
    [_overlayContainerName_3_12]: dart.dynamic,
    [_overlayContainerParent_3_13]: dart.dynamic,
    [_overlayContainer_3_14]: dart.dynamic,
    [_overlaySyncDom_3_15]: core$.bool,
    [_overlayRepositionLoop_3_16]: core$.bool,
    [_OverlayStyleConfig_3_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_3_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_3_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_3_20]: src__laminate__overlay__overlay_service.OverlayService,
    [_defaultPopupPositions_3_21]: core$.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_3_22]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_3_23]: time$.Clock
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0),
    [_TodoListService_2_5]: dart.fieldType(src__todo_list__todo_list_service.TodoListService),
    [_TodoListComponent_2_6]: dart.fieldType(src__todo_list__todo_list_component.TodoListComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(src__todo_list__button_component$46template.ViewButtonComponent0),
    [_ButtonComponent_3_5]: dart.fieldType(src__todo_list__button_component.ButtonComponent),
    [__Document_3_6]: dart.fieldType(dart.dynamic),
    [__Window_3_7]: dart.fieldType(dart.dynamic),
    [__DomService_3_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_3_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__DomRuler_3_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_3_11]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_3_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_3_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_3_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_3_15]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_3_16]: dart.fieldType(core$.bool),
    [__OverlayStyleConfig_3_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_3_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_3_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_3_20]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__defaultPopupPositions_3_21]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_3_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_3_23]: dart.fieldType(time$.Clock)
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
    src__todo_list__button_component$46template.initReflector();
    src__todo_list__todo_list_component$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__button_component$46css$46shim, {
    /*src__todo_list__button_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{}.first._ngcontent-%ID%{color:#2196F3}.is-saved._ngcontent-%ID%{color:#ccc}.is-saved._ngcontent-%ID% .first._ngcontent-%ID%{color:#ddd}"];
    }
  });
  dart.defineLazy(src__todo_list__button_component$46template, {
    /*src__todo_list__button_component$46template.styles$ButtonComponent*/get styles$ButtonComponent() {
      return [src__todo_list__button_component$46css$46shim.styles];
    }
  });
  const _el_0$ = Symbol('_el_0');
  const _compView_0$ = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialButtonComponent_0_6 = Symbol('_MaterialButtonComponent_0_6');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialIconComponent_1_5 = Symbol('_MaterialIconComponent_1_5');
  const _el_3$ = Symbol('_el_3');
  const _compView_3$ = Symbol('_compView_3');
  const _MaterialListComponent_3_5 = Symbol('_MaterialListComponent_3_5');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _el_6 = Symbol('_el_6');
  const _el_7 = Symbol('_el_7');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgFor_9_9 = Symbol('_NgFor_9_9');
  const _expr_1 = Symbol('_expr_1');
  let const$25;
  let const$26;
  src__todo_list__button_component$46template.ViewButtonComponent0 = class ViewButtonComponent0 extends src__core__linker__app_view.AppView$(src__todo_list__button_component.ButtonComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      parentRenderNode[$append](this[_el_0$]);
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_AcxDarkTheme_0_5] = new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_6] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0$]), this[_AcxDarkTheme_0_5], this[_compView_0$].ref, null);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.createAttr(this[_el_1], "icon", "lightbulb_outline");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_compView_1].create(this[_MaterialIconComponent_1_5], []);
      let _text_2 = html.Text.new("Get new ideas");
      this[_compView_0$].create(this[_MaterialButtonComponent_0_6], [JSArrayOfNode().of([this[_el_1], _text_2])]);
      this[_compView_3$] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 3);
      this[_el_3$] = this[_compView_3$].rootEl;
      parentRenderNode[$append](this[_el_3$]);
      this.addShimC(html.HtmlElement._check(this[_el_3$]));
      this[_MaterialListComponent_3_5] = new material_list__material_list.MaterialListComponent.new();
      let doc = html.document;
      this[_el_4] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_4], "group", "");
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_4][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__todo_list__button_component$46template.viewFactory_ButtonComponent1, AppViewAndintToAppViewOfButtonComponent()));
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this[_el_6] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_6], "group", "");
      this.addShimC(this[_el_6]);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_6]);
      this.createAttr(this[_el_7], "label", "");
      this.addShimC(this[_el_7]);
      let _text_8 = html.Text.new("Saved names");
      this[_el_7][$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_6][$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 6, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(src__todo_list__button_component$46template.viewFactory_ButtonComponent2, AppViewAndintToAppViewOfButtonComponent()));
      this[_NgFor_9_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_9], _TemplateRef_9_8);
      this[_compView_3$].create(this[_MaterialListComponent_3_5], [JSArrayOfDivElement().of([this[_el_4], this[_el_6]])]);
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'generateNames')));
      this.init(const$26 || (const$26 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_AcxDarkTheme_0_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialButtonComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "lightbulb_outline";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_3$].markAsCheckOnce();
      }
      let currVal_1 = _ctx.names;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_5_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9].ngDoCheck();
      }
      if (firstCheck) {
        if (!(_ctx.savedNames == null)) {
          this[_NgFor_9_9].ngForOf = _ctx.savedNames;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_9_9].ngDoCheck();
      }
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_3$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_3$].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_9];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_0$];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_1];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_3$];
      t$2 == null ? null : t$2.destroy();
    }
  };
  (src__todo_list__button_component$46template.ViewButtonComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_el_3$] = null;
    this[_compView_3$] = null;
    this[_MaterialListComponent_3_5] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_appEl_9] = null;
    this[_NgFor_9_9] = null;
    this[_expr_1] = null;
    src__todo_list__button_component$46template.ViewButtonComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("btn-components"));
    let t = src__todo_list__button_component$46template.ViewButtonComponent0._renderType;
    t == null ? src__todo_list__button_component$46template.ViewButtonComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:first_app/lib/src/todo_list/button_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__todo_list__button_component$46template.styles$ButtonComponent) : t;
    this.setupComponentType(src__todo_list__button_component$46template.ViewButtonComponent0._renderType);
  }).prototype = src__todo_list__button_component$46template.ViewButtonComponent0.prototype;
  dart.addTypeTests(src__todo_list__button_component$46template.ViewButtonComponent0);
  dart.setMethodSignature(src__todo_list__button_component$46template.ViewButtonComponent0, () => ({
    __proto__: dart.getMethods(src__todo_list__button_component$46template.ViewButtonComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__button_component.ButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__button_component$46template.ViewButtonComponent0, () => ({
    __proto__: dart.getFields(src__todo_list__button_component$46template.ViewButtonComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(theme__dark_theme.AcxDarkTheme),
    [_MaterialButtonComponent_0_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_1_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_3$]: dart.fieldType(html.Element),
    [_compView_3$]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_3_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_el_4]: dart.fieldType(html.DivElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.DivElement),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_9_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__todo_list__button_component$46template.ViewButtonComponent0, {
    /*src__todo_list__button_component$46template.ViewButtonComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__todo_list__button_component$46template.viewFactory_ButtonComponent0 = function(parentView, parentIndex) {
    return new src__todo_list__button_component$46template.ViewButtonComponent0.new(parentView, parentIndex);
  };
  const _MaterialListItemComponent_0_5 = Symbol('_MaterialListItemComponent_0_5');
  const _text_2 = Symbol('_text_2');
  const _text_3 = Symbol('_text_3');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  src__todo_list__button_component$46template._ViewButtonComponent1 = class _ViewButtonComponent1 extends src__core__linker__app_view.AppView$(src__todo_list__button_component.ButtonComponent) {
    build() {
      this[_compView_0$] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialListItemComponent_0_5] = new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_0$]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      let doc = html.document;
      this[_el_1] = doc[$createElement]("span");
      this[_el_1].className = "first";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_text_3] = html.Text.new("");
      let _text_4 = html.Text.new(".com");
      this[_compView_0$].create(this[_MaterialListItemComponent_0_5], [JSArrayOfNode().of([this[_el_1], this[_text_3], _text_4])]);
      let subscription_0 = this[_MaterialListItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialListItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_0_5].ngOnInit();
      }
      let currVal_0 = _ctx.savedNames.contains(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateElemClass(this[_el_0$], "is-saved", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.first);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_2][$text] = core$.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_item.second);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_3][$text] = core$.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      this.ctx.toggleSavedState(local_item);
    }
  };
  (src__todo_list__button_component$46template._ViewButtonComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialListItemComponent_0_5] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__todo_list__button_component$46template._ViewButtonComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__button_component$46template.ViewButtonComponent0._renderType;
  }).prototype = src__todo_list__button_component$46template._ViewButtonComponent1.prototype;
  dart.addTypeTests(src__todo_list__button_component$46template._ViewButtonComponent1);
  dart.setMethodSignature(src__todo_list__button_component$46template._ViewButtonComponent1, () => ({
    __proto__: dart.getMethods(src__todo_list__button_component$46template._ViewButtonComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__button_component.ButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__button_component$46template._ViewButtonComponent1, () => ({
    __proto__: dart.getFields(src__todo_list__button_component$46template._ViewButtonComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_0_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core$.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__todo_list__button_component$46template.viewFactory_ButtonComponent1 = function(parentView, parentIndex) {
    return new src__todo_list__button_component$46template._ViewButtonComponent1.new(parentView, parentIndex);
  };
  src__todo_list__button_component$46template._ViewButtonComponent2 = class _ViewButtonComponent2 extends src__core__linker__app_view.AppView$(src__todo_list__button_component.ButtonComponent) {
    build() {
      this[_compView_0$] = new material_list__material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialListItemComponent_0_5] = new material_list__material_list_item.MaterialListItemComponent.new(html.HtmlElement._check(this[_el_0$]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.viewData.parentIndex, null)), null, null);
      let doc = html.document;
      this[_el_1] = doc[$createElement]("span");
      this[_el_1].className = "first";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_text_3] = html.Text.new("");
      let _text_4 = html.Text.new(".com");
      this[_compView_0$].create(this[_MaterialListItemComponent_0_5], [JSArrayOfNode().of([this[_el_1], this[_text_3], _text_4])]);
      let subscription_0 = this[_MaterialListItemComponent_0_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0$]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_MaterialListItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialListItemComponent_0_5].ngOnInit();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_item.first);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = core$.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.second);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_3][$text] = core$.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($event) {
      let local_item = src__word_pair.WordPair._check(this.locals[$_get]("$implicit"));
      this.ctx.removeFromSaved(local_item);
    }
  };
  (src__todo_list__button_component$46template._ViewButtonComponent2.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_compView_0$] = null;
    this[_MaterialListItemComponent_0_5] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__todo_list__button_component$46template._ViewButtonComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__button_component$46template.ViewButtonComponent0._renderType;
  }).prototype = src__todo_list__button_component$46template._ViewButtonComponent2.prototype;
  dart.addTypeTests(src__todo_list__button_component$46template._ViewButtonComponent2);
  dart.setMethodSignature(src__todo_list__button_component$46template._ViewButtonComponent2, () => ({
    __proto__: dart.getMethods(src__todo_list__button_component$46template._ViewButtonComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__button_component.ButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__button_component$46template._ViewButtonComponent2, () => ({
    __proto__: dart.getFields(src__todo_list__button_component$46template._ViewButtonComponent2.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_compView_0$]: dart.fieldType(material_list__material_list_item$46template.ViewMaterialListItemComponent0),
    [_MaterialListItemComponent_0_5]: dart.fieldType(material_list__material_list_item.MaterialListItemComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__todo_list__button_component$46template.viewFactory_ButtonComponent2 = function(parentView, parentIndex) {
    return new src__todo_list__button_component$46template._ViewButtonComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__button_component$46template, {
    /*src__todo_list__button_component$46template.styles$ButtonComponentHost*/get styles$ButtonComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _ButtonComponent_0_5 = Symbol('_ButtonComponent_0_5');
  const __Document_0_6 = Symbol('__Document_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10 = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11 = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12 = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13 = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14 = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15 = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16 = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17 = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18 = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19 = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20 = Symbol('__OverlayService_0_20');
  const __defaultPopupPositions_0_21 = Symbol('__defaultPopupPositions_0_21');
  const __DomPopupSourceFactory_0_22 = Symbol('__DomPopupSourceFactory_0_22');
  const __Clock_0_23 = Symbol('__Clock_0_23');
  const _Document_0_6 = Symbol('_Document_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10 = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11 = Symbol('_ManagedZone_0_11');
  let const$27;
  const _overlayContainerName_0_12 = Symbol('_overlayContainerName_0_12');
  let const$28;
  const _overlayContainerParent_0_13 = Symbol('_overlayContainerParent_0_13');
  let const$29;
  const _overlayContainer_0_14 = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15 = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16 = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17 = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18 = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19 = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20 = Symbol('_OverlayService_0_20');
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  const _defaultPopupPositions_0_21 = Symbol('_defaultPopupPositions_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$44;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  src__todo_list__button_component$46template._ViewButtonComponentHost0 = class _ViewButtonComponentHost0 extends src__core__linker__app_view.AppView$(src__todo_list__button_component.ButtonComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_DomRuler_0_10]() {
      if (this[__DomRuler_0_10] == null) {
        this[__DomRuler_0_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_10];
    }
    get [_ManagedZone_0_11]() {
      if (this[__ManagedZone_0_11] == null) {
        this[__ManagedZone_0_11] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11];
    }
    get [_overlayContainerName_0_12]() {
      if (this[__overlayContainerName_0_12] == null) {
        this[__overlayContainerName_0_12] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12];
    }
    get [_overlayContainerParent_0_13]() {
      if (this[__overlayContainerParent_0_13] == null) {
        this[__overlayContainerParent_0_13] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13];
    }
    get [_overlayContainer_0_14]() {
      if (this[__overlayContainer_0_14] == null) {
        this[__overlayContainer_0_14] = laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$29 || (const$29 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14];
    }
    get [_overlaySyncDom_0_15]() {
      if (this[__overlaySyncDom_0_15] == null) {
        this[__overlaySyncDom_0_15] = true;
      }
      return this[__overlaySyncDom_0_15];
    }
    get [_overlayRepositionLoop_0_16]() {
      if (this[__overlayRepositionLoop_0_16] == null) {
        this[__overlayRepositionLoop_0_16] = true;
      }
      return this[__overlayRepositionLoop_0_16];
    }
    get [_OverlayStyleConfig_0_17]() {
      if (this[__OverlayStyleConfig_0_17] == null) {
        this[__OverlayStyleConfig_0_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_17];
    }
    get [_ZIndexer_0_18]() {
      if (this[__ZIndexer_0_18] == null) {
        this[__ZIndexer_0_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18];
    }
    get [_OverlayDomRenderService_0_19]() {
      if (this[__OverlayDomRenderService_0_19] == null) {
        this[__OverlayDomRenderService_0_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17], html.HtmlElement._check(this[_overlayContainer_0_14]), core$.String._check(this[_overlayContainerName_0_12]), this[_DomRuler_0_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), this[_AcxImperativeViewUtils_0_9], this[_overlaySyncDom_0_15], this[_overlayRepositionLoop_0_16], this[_ZIndexer_0_18]);
      }
      return this[__OverlayDomRenderService_0_19];
    }
    get [_OverlayService_0_20]() {
      if (this[__OverlayService_0_20] == null) {
        this[__OverlayService_0_20] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20];
    }
    get [_defaultPopupPositions_0_21]() {
      if (this[__defaultPopupPositions_0_21] == null) {
        this[__defaultPopupPositions_0_21] = const$43 || (const$43 = dart.constList([const$30 || (const$30 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$32 || (const$32 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$31 || (const$31 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$34 || (const$34 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$33 || (const$33 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$36 || (const$36 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$35 || (const$35 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$39 || (const$39 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$37 || (const$37 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$38 || (const$38 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$42 || (const$42 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$40 || (const$40 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$41 || (const$41 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_21];
    }
    get [_DomPopupSourceFactory_0_22]() {
      if (this[__DomPopupSourceFactory_0_22] == null) {
        this[__DomPopupSourceFactory_0_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_10]);
      }
      return this[__DomPopupSourceFactory_0_22];
    }
    get [_Clock_0_23]() {
      if (this[__Clock_0_23] == null) {
        this[__Clock_0_23] = const$44 || (const$44 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_23];
    }
    build() {
      this[_compView_0$] = new src__todo_list__button_component$46template.ViewButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_ButtonComponent_0_5] = new src__todo_list__button_component.ButtonComponent.new();
      this[_compView_0$].create(this[_ButtonComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfButtonComponent()).new(0, this, this.rootEl, this[_ButtonComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11];
      }
      if (token === (const$45 || (const$45 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12];
      }
      if (token === (const$46 || (const$46 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13];
      }
      if (token === (const$47 || (const$47 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14];
      }
      if (token === (const$48 || (const$48 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15];
      }
      if (token === (const$49 || (const$49 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20];
      }
      if (token === (const$50 || (const$50 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$51 || (const$51 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 0 === nodeIndex) {
        return this[_Clock_0_23];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonComponent_0_5].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__todo_list__button_component$46template._ViewButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_ButtonComponent_0_5] = null;
    this[__Document_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__DomRuler_0_10] = null;
    this[__ManagedZone_0_11] = null;
    this[__overlayContainerName_0_12] = null;
    this[__overlayContainerParent_0_13] = null;
    this[__overlayContainer_0_14] = null;
    this[__overlaySyncDom_0_15] = null;
    this[__overlayRepositionLoop_0_16] = null;
    this[__OverlayStyleConfig_0_17] = null;
    this[__ZIndexer_0_18] = null;
    this[__OverlayDomRenderService_0_19] = null;
    this[__OverlayService_0_20] = null;
    this[__defaultPopupPositions_0_21] = null;
    this[__DomPopupSourceFactory_0_22] = null;
    this[__Clock_0_23] = null;
    src__todo_list__button_component$46template._ViewButtonComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__todo_list__button_component$46template._ViewButtonComponentHost0.prototype;
  dart.addTypeTests(src__todo_list__button_component$46template._ViewButtonComponentHost0);
  dart.setMethodSignature(src__todo_list__button_component$46template._ViewButtonComponentHost0, () => ({
    __proto__: dart.getMethods(src__todo_list__button_component$46template._ViewButtonComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__button_component.ButtonComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__todo_list__button_component$46template._ViewButtonComponentHost0, () => ({
    __proto__: dart.getGetters(src__todo_list__button_component$46template._ViewButtonComponentHost0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils,
    [_DomRuler_0_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11]: utils__angular__managed_zone__angular_2.Angular2ManagedZone,
    [_overlayContainerName_0_12]: dart.dynamic,
    [_overlayContainerParent_0_13]: dart.dynamic,
    [_overlayContainer_0_14]: dart.dynamic,
    [_overlaySyncDom_0_15]: core$.bool,
    [_overlayRepositionLoop_0_16]: core$.bool,
    [_OverlayStyleConfig_0_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20]: src__laminate__overlay__overlay_service.OverlayService,
    [_defaultPopupPositions_0_21]: core$.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_22]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_0_23]: time$.Clock
  }));
  dart.setFieldSignature(src__todo_list__button_component$46template._ViewButtonComponentHost0, () => ({
    __proto__: dart.getFields(src__todo_list__button_component$46template._ViewButtonComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__todo_list__button_component$46template.ViewButtonComponent0),
    [_ButtonComponent_0_5]: dart.fieldType(src__todo_list__button_component.ButtonComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__DomRuler_0_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_0_16]: dart.fieldType(core$.bool),
    [__OverlayStyleConfig_0_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__defaultPopupPositions_0_21]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_23]: dart.fieldType(time$.Clock)
  }));
  src__todo_list__button_component$46template.viewFactory_ButtonComponentHost0 = function(parentView, parentIndex) {
    return new src__todo_list__button_component$46template._ViewButtonComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__button_component$46template, {
    /*src__todo_list__button_component$46template._ButtonComponentNgFactory*/get _ButtonComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfButtonComponent()).new("btn-components", dart.fn(src__todo_list__button_component$46template.viewFactory_ButtonComponentHost0, AppViewAndintToAppViewOfButtonComponent())));
    }
  });
  dart.copyProperties(src__todo_list__button_component$46template, {
    get ButtonComponentNgFactory() {
      return src__todo_list__button_component$46template._ButtonComponentNgFactory;
    }
  });
  dart.defineLazy(src__todo_list__button_component$46template, {
    /*src__todo_list__button_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__button_component$46template.initReflector = function() {
    if (dart.test(src__todo_list__button_component$46template._visited)) {
      return;
    }
    src__todo_list__button_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__todo_list__button_component.ButtonComponent), src__todo_list__button_component$46template.ButtonComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__todo_list_service$46template, {
    /*src__todo_list__todo_list_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__todo_list_service$46template.initReflector = function() {
    if (dart.test(src__todo_list__todo_list_service$46template._visited)) {
      return;
    }
    src__todo_list__todo_list_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__todo_list__todo_list_service.TodoListService), dart.fn(() => new src__todo_list__todo_list_service.TodoListService.new(), VoidToTodoListService()));
    core$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__todo_list_component$46css$46shim, {
    /*src__todo_list__todo_list_component$46css$46shim.styles*/get styles() {
      return ["ul._ngcontent-%ID%{list-style:none;padding-left:0}li._ngcontent-%ID%{line-height:3em}li:hover._ngcontent-%ID%{background-color:#EEE}li._ngcontent-%ID% material-checkbox._ngcontent-%ID%{vertical-align:middle}li._ngcontent-%ID% material-fab._ngcontent-%ID%{float:right;vertical-align:middle}.done._ngcontent-%ID%{text-decoration:line-through}"];
    }
  });
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template.styles$TodoListComponent*/get styles$TodoListComponent() {
      return [src__todo_list__todo_list_component$46css$46shim.styles];
    }
  });
  const _el_0$0 = Symbol('_el_0');
  const _el_1$ = Symbol('_el_1');
  const _compView_1$ = Symbol('_compView_1');
  const _DeferredValidator_1_5 = Symbol('_DeferredValidator_1_5');
  const _NgValidators_1_6 = Symbol('_NgValidators_1_6');
  const _NgModel_1_7 = Symbol('_NgModel_1_7');
  const _NgControl_1_8 = Symbol('_NgControl_1_8');
  const _MaterialInputComponent_1_9 = Symbol('_MaterialInputComponent_1_9');
  const _BaseMaterialInput_1_10 = Symbol('_BaseMaterialInput_1_10');
  const _MaterialInputDefaultValueAccessor_1_11 = Symbol('_MaterialInputDefaultValueAccessor_1_11');
  const _el_2$ = Symbol('_el_2');
  const _compView_2$ = Symbol('_compView_2');
  const _MaterialFabComponent_2_5 = Symbol('_MaterialFabComponent_2_5');
  const _el_3$0 = Symbol('_el_3');
  const _compView_3$0 = Symbol('_compView_3');
  const _MaterialIconComponent_3_5 = Symbol('_MaterialIconComponent_3_5');
  const _anchor_4 = Symbol('_anchor_4');
  const _el_4_0 = Symbol('_el_4_0');
  const _text_4_1 = Symbol('_text_4_1');
  const _appEl_5$ = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _expr_3 = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  let const$52;
  let const$53;
  const _handle_ngModelChange_1_1 = Symbol('_handle_ngModelChange_1_1');
  let const$54;
  src__todo_list__todo_list_component$46template.ViewTodoListComponent0 = class ViewTodoListComponent0 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0$0]);
      this[_compView_1$] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 1);
      this[_el_1$] = this[_compView_1$].rootEl;
      this[_el_0$0][$append](this[_el_1$]);
      this.createAttr(this[_el_1$], "autoFocus", "");
      this.createAttr(this[_el_1$], "floatingLabel", "");
      this.createAttr(this[_el_1$], "label", "What do you need to do?");
      this.createAttr(this[_el_1$], "style", "width:80%");
      this.addShimC(html.HtmlElement._check(this[_el_1$]));
      this[_DeferredValidator_1_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_1_6] = [this[_DeferredValidator_1_5]];
      this[_NgModel_1_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_1_6], null);
      this[_NgControl_1_8] = this[_NgModel_1_7];
      this[_MaterialInputComponent_1_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_1_8], this[_compView_1$].ref, this[_DeferredValidator_1_5]);
      this[_BaseMaterialInput_1_10] = this[_MaterialInputComponent_1_9];
      this[_MaterialInputDefaultValueAccessor_1_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_1_10], this[_NgControl_1_8]);
      this[_compView_1$].create(this[_MaterialInputComponent_1_9], [const$52 || (const$52 = dart.constList([], dart.dynamic)), const$53 || (const$53 = dart.constList([], dart.dynamic))]);
      this[_compView_2$] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 2);
      this[_el_2$] = this[_compView_2$].rootEl;
      this[_el_0$0][$append](this[_el_2$]);
      this.createAttr(this[_el_2$], "mini", "");
      this.createAttr(this[_el_2$], "raised", "");
      this.addShimC(html.HtmlElement._check(this[_el_2$]));
      this[_MaterialFabComponent_2_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_2$]), this[_compView_2$].ref);
      this[_compView_3$0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      this[_el_3$0] = this[_compView_3$0].rootEl;
      this.createAttr(this[_el_3$0], "icon", "add");
      this.addShimC(html.HtmlElement._check(this[_el_3$0]));
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_3$0]));
      this[_compView_3$0].create(this[_MaterialIconComponent_3_5], []);
      this[_compView_2$].create(this[_MaterialFabComponent_2_5], [JSArrayOfElement().of([this[_el_3$0]])]);
      this[_anchor_4] = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](this[_anchor_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5$] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5$], dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent2, AppViewAndintToAppViewOfTodoListComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5$], _TemplateRef_5_8);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(this[_el_1$], "keyup.enter", this.eventHandler0(dart.dynamic, dart.bind(this.ctx, 'add')));
      let subscription_0 = this[_NgModel_1_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_1_1)));
      let subscription_1 = this[_MaterialFabComponent_2_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'add')));
      this.init([], [subscription_0, subscription_1]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 1 === nodeIndex) {
        return this[_DeferredValidator_1_5];
      }
      if (token === (const$54 || (const$54 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 1 === nodeIndex) {
        return this[_NgValidators_1_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 1 === nodeIndex) {
        return this[_NgModel_1_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 1 === nodeIndex) {
        return this[_NgControl_1_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 === nodeIndex) {
        return this[_MaterialInputComponent_1_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 1 === nodeIndex) {
        return this[_BaseMaterialInput_1_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 1 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_1_7].model = _ctx.newTodo;
      this[_NgModel_1_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_1_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_1_9].label = "What do you need to do?";
        changed = true;
        this[_MaterialInputComponent_1_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1$].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_3 = _ctx.newTodo[$isEmpty];
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialFabComponent_2_5].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_2_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5].icon = "add";
        changed = true;
      }
      if (changed) {
        this[_compView_3$0].markAsCheckOnce();
      }
      let currVal_6 = _ctx.items[$isEmpty] === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        if (currVal_6) {
          let doc = html.document;
          this[_el_4_0] = doc[$createElement]("p");
          this.addShimE(this[_el_4_0]);
          this[_text_4_1] = html.Text.new("Nothing to do! Add items above.");
          this[_el_4_0][$append](this[_text_4_1]);
          this.addInlinedNodes(this[_anchor_4], JSArrayOfNode().of([this[_el_4_0]]), true);
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_4_0]]), true);
        }
        this[_expr_6] = currVal_6;
      }
      this[_NgIf_5_9].ngIf = _ctx.items[$isNotEmpty];
      this[_appEl_5$].detectChangesInNestedViews();
      this[_compView_2$].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      this[_compView_2$].detectChanges();
      this[_compView_3$0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_1_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_5$];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1$];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_2$];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_3$0];
      t$1 == null ? null : t$1.destroy();
      this[_MaterialInputComponent_1_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_1_11].ngOnDestroy();
    }
    [_handle_ngModelChange_1_1]($event) {
      this.ctx.newTodo = core$.String._check($event);
    }
  };
  (src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_el_1$] = null;
    this[_compView_1$] = null;
    this[_DeferredValidator_1_5] = null;
    this[_NgValidators_1_6] = null;
    this[_NgModel_1_7] = null;
    this[_NgControl_1_8] = null;
    this[_MaterialInputComponent_1_9] = null;
    this[_BaseMaterialInput_1_10] = null;
    this[_MaterialInputDefaultValueAccessor_1_11] = null;
    this[_el_2$] = null;
    this[_compView_2$] = null;
    this[_MaterialFabComponent_2_5] = null;
    this[_el_3$0] = null;
    this[_compView_3$0] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_anchor_4] = null;
    this[_el_4_0] = null;
    this[_text_4_1] = null;
    this[_appEl_5$] = null;
    this[_NgIf_5_9] = null;
    this[_expr_3] = null;
    this[_expr_6] = false;
    src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("todo-list"));
    let t = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
    t == null ? src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:first_app/lib/src/todo_list/todo_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__todo_list__todo_list_component$46template.styles$TodoListComponent) : t;
    this.setupComponentType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType);
  }).prototype = src__todo_list__todo_list_component$46template.ViewTodoListComponent0.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template.ViewTodoListComponent0);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__),
    [_el_0$0]: dart.fieldType(html.DivElement),
    [_el_1$]: dart.fieldType(html.Element),
    [_compView_1$]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_1_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_1_6]: dart.fieldType(core$.List),
    [_NgModel_1_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_1_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_1_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_1_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_1_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_el_2$]: dart.fieldType(html.Element),
    [_compView_2$]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_2_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_3$0]: dart.fieldType(html.Element),
    [_compView_3$0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_anchor_4]: dart.fieldType(html.Comment),
    [_el_4_0]: dart.fieldType(html.Element),
    [_text_4_1]: dart.fieldType(html.Text),
    [_appEl_5$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_3]: dart.fieldType(core$.bool),
    [_expr_6]: dart.fieldType(core$.bool)
  }));
  dart.defineLazy(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, {
    /*src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent0 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(parentView, parentIndex);
  };
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0$ = Symbol('_expr_0');
  src__todo_list__todo_list_component$46template._ViewTodoListComponent2 = class _ViewTodoListComponent2 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$0] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0$0]);
      this[_el_1$] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", this[_el_0$0]));
      this.addShimC(this[_el_1$]);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_1$][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent3, AppViewAndintToAppViewOfTodoListComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0$0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.items;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_2_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
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
  (src__todo_list__todo_list_component$46template._ViewTodoListComponent2.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_el_1$] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0$] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponent2.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponent2);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent2, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent2, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__),
    [_el_0$0]: dart.fieldType(html.DivElement),
    [_el_1$]: dart.fieldType(html.UListElement),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent2 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponent2.new(parentView, parentIndex);
  };
  const _MaterialCheckboxComponent_1_5 = Symbol('_MaterialCheckboxComponent_1_5');
  const _text_3$ = Symbol('_text_3');
  const _el_4$ = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _MaterialFabComponent_4_5 = Symbol('_MaterialFabComponent_4_5');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _MaterialIconComponent_5_5 = Symbol('_MaterialIconComponent_5_5');
  const _expr_1$ = Symbol('_expr_1');
  let const$55;
  const _handle_trigger_4_0 = Symbol('_handle_trigger_4_0');
  src__todo_list__todo_list_component$46template._ViewTodoListComponent3 = class _ViewTodoListComponent3 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$0] = doc[$createElement]("li");
      this.addShimE(this[_el_0$0]);
      this[_compView_1$] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 1);
      this[_el_1$] = this[_compView_1$].rootEl;
      this[_el_0$0][$append](this[_el_1$]);
      this.createAttr(this[_el_1$], "materialTooltip", "Mark item as done");
      this.addShimC(html.HtmlElement._check(this[_el_1$]));
      this[_MaterialCheckboxComponent_1_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_1$]), this[_compView_1$].ref, null, null, null);
      this[_compView_1$].create(this[_MaterialCheckboxComponent_1_5], [const$55 || (const$55 = dart.constList([], dart.dynamic))]);
      this[_el_2$] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0$0]);
      this.addShimE(this[_el_2$]);
      this[_text_3$] = html.Text.new("");
      this[_el_2$][$append](this[_text_3$]);
      this[_compView_4] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 4);
      this[_el_4$] = this[_compView_4].rootEl;
      this[_el_0$0][$append](this[_el_4$]);
      this.createAttr(this[_el_4$], "mini", "");
      this.addShimC(html.HtmlElement._check(this[_el_4$]));
      this[_MaterialFabComponent_4_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_4$]), this[_compView_4].ref);
      this[_compView_5] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this.createAttr(this[_el_5], "icon", "delete");
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_MaterialIconComponent_5_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_5]));
      this[_compView_5].create(this[_MaterialIconComponent_5_5], []);
      this[_compView_4].create(this[_MaterialFabComponent_4_5], [JSArrayOfElement().of([this[_el_5]])]);
      let subscription_0 = this[_MaterialFabComponent_4_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_4_0)));
      this.init([this[_el_0$0]], [subscription_0]);
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
        this[_compView_1$].markAsCheckOnce();
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
      this[_compView_1$].detectHostChanges(firstCheck);
      let currVal_0 = local_done.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_2$]), "done", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_text_3$][$text] = core$.String._check(currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1$];
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
  (src__todo_list__todo_list_component$46template._ViewTodoListComponent3.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_el_1$] = null;
    this[_compView_1$] = null;
    this[_MaterialCheckboxComponent_1_5] = null;
    this[_el_2$] = null;
    this[_text_3$] = null;
    this[_el_4$] = null;
    this[_compView_4] = null;
    this[_MaterialFabComponent_4_5] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_MaterialIconComponent_5_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponent3.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponent3);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent3, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_4_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent3, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_el_1$]: dart.fieldType(html.Element),
    [_compView_1$]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_1_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_el_2$]: dart.fieldType(html.Element),
    [_text_3$]: dart.fieldType(html.Text),
    [_el_4$]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_4_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_5_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(core$.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent3 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template.styles$TodoListComponentHost*/get styles$TodoListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$0 = Symbol('_compView_0');
  const _TodoListService_0_5 = Symbol('_TodoListService_0_5');
  const _TodoListComponent_0_6 = Symbol('_TodoListComponent_0_6');
  src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0 = class _ViewTodoListComponentHost0 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      this[_compView_0$0] = new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_TodoListService_0_5] = new src__todo_list__todo_list_service.TodoListService.new();
      this[_TodoListComponent_0_6] = new src__todo_list__todo_list_component.TodoListComponent.new(this[_TodoListService_0_5]);
      this[_compView_0$0].create(this[_TodoListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTodoListComponent()).new(0, this, this.rootEl, this[_TodoListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__todo_list__todo_list_service.TodoListService) && 0 === nodeIndex) {
        return this[_TodoListService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_TodoListComponent_0_6].ngOnInit();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_TodoListService_0_5] = null;
    this[_TodoListComponent_0_6] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0),
    [_TodoListService_0_5]: dart.fieldType(src__todo_list__todo_list_service.TodoListService),
    [_TodoListComponent_0_6]: dart.fieldType(src__todo_list__todo_list_component.TodoListComponent)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponentHost0 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template._TodoListComponentNgFactory*/get _TodoListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTodoListComponent()).new("todo-list", dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponentHost0, AppViewAndintToAppViewOfTodoListComponent())));
    }
  });
  dart.copyProperties(src__todo_list__todo_list_component$46template, {
    get TodoListComponentNgFactory() {
      return src__todo_list__todo_list_component$46template._TodoListComponentNgFactory;
    }
  });
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__todo_list_component$46template.initReflector = function() {
    if (dart.test(src__todo_list__todo_list_component$46template._visited)) {
      return;
    }
    src__todo_list__todo_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__todo_list__todo_list_component.TodoListComponent), src__todo_list__todo_list_component$46template.TodoListComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__todo_list__todo_list_service$46template.initReflector();
  };
  dart.trackLibraries("packages/first_app/app_component.template.ddc", {
    "package:first_app/app_component.template.dart": app_component$46template,
    "package:first_app/src/todo_list/button_component.css.shim.dart": src__todo_list__button_component$46css$46shim,
    "package:first_app/src/todo_list/button_component.template.dart": src__todo_list__button_component$46template,
    "package:first_app/src/todo_list/todo_list_service.template.dart": src__todo_list__todo_list_service$46template,
    "package:first_app/src/todo_list/todo_list_component.css.shim.dart": src__todo_list__todo_list_component$46css$46shim,
    "package:first_app/src/todo_list/todo_list_component.template.dart": src__todo_list__todo_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/todo_list/button_component.css.shim.dart","src/todo_list/button_component.template.dart","src/todo_list/todo_list_service.template.dart","src/todo_list/todo_list_component.css.shim.dart","src/todo_list/todo_list_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__todo_list__button_component$46css$46shim: src__todo_list__button_component$46css$46shim,
    src__todo_list__button_component$46template: src__todo_list__button_component$46template,
    src__todo_list__todo_list_service$46template: src__todo_list__todo_list_service$46template,
    src__todo_list__todo_list_component$46css$46shim: src__todo_list__todo_list_component$46css$46shim,
    src__todo_list__todo_list_component$46template: src__todo_list__todo_list_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
