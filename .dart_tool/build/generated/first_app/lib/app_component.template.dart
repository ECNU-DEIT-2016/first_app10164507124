// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/todo_list/todo_list_component.dart';
import 'src/todo_list/button_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/todo_list/button_component.template.dart' as _ref1;
import 'src/todo_list/todo_list_component.template.dart' as _ref2;
import 'package:first_app/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'src/todo_list/todo_list_component.template.dart' as import4;
import 'src/todo_list/todo_list_service.dart' as import5;
import 'src/todo_list/todo_list_component.dart' as import6;
import 'src/todo_list/button_component.template.dart' as import7;
import 'src/todo_list/button_component.dart' as import8;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import9;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import10;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import11;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import12;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import13;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import14;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import15;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import17;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import18;
import 'package:quiver/time.dart' as import19;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import21;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/src/runtime.dart' as import24;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/window/module.dart' as import26;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import27;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import28;
import 'package:angular_components/utils/disposer/disposer.dart' as import29;
import 'package:angular/src/core/zone/ng_zone.dart' as import30;
import 'package:angular/src/core/linker/component_loader.dart' as import31;
import 'package:angular_components/laminate/overlay/module.dart' as import32;
import 'package:angular/src/core/di/opaque_token.dart' as import33;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import34;
import 'package:angular_components/laminate/enums/alignment.dart' as import35;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import3.Element _el_2;
  import4.ViewTodoListComponent0 _compView_2;
  import5.TodoListService _TodoListService_2_5;
  import6.TodoListComponent _TodoListComponent_2_6;
  import3.Element _el_3;
  import7.ViewButtonComponent0 _compView_3;
  import8.ButtonComponent _ButtonComponent_3_5;
  dynamic __Document_3_6;
  dynamic __Window_3_7;
  dynamic __DomService_3_8;
  import9.AcxImperativeViewUtils __AcxImperativeViewUtils_3_9;
  import10.DomRuler __DomRuler_3_10;
  import11.Angular2ManagedZone __ManagedZone_3_11;
  dynamic __overlayContainerName_3_12;
  dynamic __overlayContainerParent_3_13;
  dynamic __overlayContainer_3_14;
  bool __overlaySyncDom_3_15;
  bool __overlayRepositionLoop_3_16;
  import12.OverlayStyleConfig __OverlayStyleConfig_3_17;
  import13.ZIndexer __ZIndexer_3_18;
  import14.OverlayDomRenderService __OverlayDomRenderService_3_19;
  import15.OverlayService __OverlayService_3_20;
  List<import17.RelativePosition> __defaultPopupPositions_3_21;
  import18.DomPopupSourceFactory __DomPopupSourceFactory_3_22;
  import19.Clock __Clock_3_23;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import21.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import23.appViewUtils.createRenderType((import24.isDevMode ? 'asset:first_app/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  dynamic get _Document_3_6 {
    if ((this.__Document_3_6 == null)) {
      (__Document_3_6 = import26.getDocument());
    }
    return this.__Document_3_6;
  }

  dynamic get _Window_3_7 {
    if ((this.__Window_3_7 == null)) {
      (__Window_3_7 = import26.getWindow());
    }
    return this.__Window_3_7;
  }

  dynamic get _DomService_3_8 {
    if ((this.__DomService_3_8 == null)) {
      (__DomService_3_8 = import27.createDomService(this.parentView.injectorGet(import28.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import29.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import30.NgZone, this.viewData.parentIndex), this._Window_3_7));
    }
    return this.__DomService_3_8;
  }

  import9.AcxImperativeViewUtils get _AcxImperativeViewUtils_3_9 {
    if ((this.__AcxImperativeViewUtils_3_9 == null)) {
      (__AcxImperativeViewUtils_3_9 = import9.AcxImperativeViewUtils(this.parentView.injectorGet(import31.ComponentLoader, this.viewData.parentIndex), this._DomService_3_8));
    }
    return this.__AcxImperativeViewUtils_3_9;
  }

  import10.DomRuler get _DomRuler_3_10 {
    if ((this.__DomRuler_3_10 == null)) {
      (__DomRuler_3_10 = import10.DomRuler(this._Document_3_6, this._DomService_3_8));
    }
    return this.__DomRuler_3_10;
  }

  import11.Angular2ManagedZone get _ManagedZone_3_11 {
    if ((this.__ManagedZone_3_11 == null)) {
      (__ManagedZone_3_11 = import11.Angular2ManagedZone(this.parentView.injectorGet(import30.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_3_11;
  }

  dynamic get _overlayContainerName_3_12 {
    if ((this.__overlayContainerName_3_12 == null)) {
      (__overlayContainerName_3_12 = import32.getDefaultContainerName(this.parentView.injectorGet(const import33.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_3_12;
  }

  dynamic get _overlayContainerParent_3_13 {
    if ((this.__overlayContainerParent_3_13 == null)) {
      (__overlayContainerParent_3_13 = import32.getOverlayContainerParent(this._Document_3_6, this.parentView.injectorGet(const import33.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_3_13;
  }

  dynamic get _overlayContainer_3_14 {
    if ((this.__overlayContainer_3_14 == null)) {
      (__overlayContainer_3_14 = import32.getDefaultContainer(this._overlayContainerName_3_12, this._overlayContainerParent_3_13, this.parentView.injectorGet(const import33.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_3_14;
  }

  bool get _overlaySyncDom_3_15 {
    if ((this.__overlaySyncDom_3_15 == null)) {
      (__overlaySyncDom_3_15 = true);
    }
    return this.__overlaySyncDom_3_15;
  }

  bool get _overlayRepositionLoop_3_16 {
    if ((this.__overlayRepositionLoop_3_16 == null)) {
      (__overlayRepositionLoop_3_16 = true);
    }
    return this.__overlayRepositionLoop_3_16;
  }

  import12.OverlayStyleConfig get _OverlayStyleConfig_3_17 {
    if ((this.__OverlayStyleConfig_3_17 == null)) {
      (__OverlayStyleConfig_3_17 = import12.OverlayStyleConfig(this._Document_3_6));
    }
    return this.__OverlayStyleConfig_3_17;
  }

  import13.ZIndexer get _ZIndexer_3_18 {
    if ((this.__ZIndexer_3_18 == null)) {
      (__ZIndexer_3_18 = import13.ZIndexer());
    }
    return this.__ZIndexer_3_18;
  }

  import14.OverlayDomRenderService get _OverlayDomRenderService_3_19 {
    if ((this.__OverlayDomRenderService_3_19 == null)) {
      (__OverlayDomRenderService_3_19 = import14.OverlayDomRenderService(this._OverlayStyleConfig_3_17, this._overlayContainer_3_14, this._overlayContainerName_3_12, this._DomRuler_3_10, this._DomService_3_8, this._AcxImperativeViewUtils_3_9, this._overlaySyncDom_3_15, this._overlayRepositionLoop_3_16, this._ZIndexer_3_18));
    }
    return this.__OverlayDomRenderService_3_19;
  }

  import15.OverlayService get _OverlayService_3_20 {
    if ((this.__OverlayService_3_20 == null)) {
      (__OverlayService_3_20 = import15.OverlayService(this.parentView.injectorGet(import30.NgZone, this.viewData.parentIndex), this._overlaySyncDom_3_15, this._OverlayDomRenderService_3_19, this.parentView.injectorGet(import15.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_3_20;
  }

  List<import17.RelativePosition> get _defaultPopupPositions_3_21 {
    if ((this.__defaultPopupPositions_3_21 == null)) {
      (__defaultPopupPositions_3_21 = const [import17.RelativePosition(animationOrigin: 'top center'), import17.RelativePosition(animationOrigin: 'top right', originX: import17.Alignment('End', 'flex-end')), import17.RelativePosition(animationOrigin: 'top left', originX: import17.Alignment('Start', 'flex-start')), import17.RelativePosition(animationOrigin: 'bottom center', originY: import17.Alignment('End', 'flex-end')), import17.RelativePosition(animationOrigin: 'bottom right', originX: import17.Alignment('End', 'flex-end'), originY: import17.Alignment('End', 'flex-end')), import17.RelativePosition(animationOrigin: 'bottom left', originX: import17.Alignment('Start', 'flex-start'), originY: import17.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_3_21;
  }

  import18.DomPopupSourceFactory get _DomPopupSourceFactory_3_22 {
    if ((this.__DomPopupSourceFactory_3_22 == null)) {
      (__DomPopupSourceFactory_3_22 = import18.DomPopupSourceFactory(this._DomRuler_3_10));
    }
    return this.__DomPopupSourceFactory_3_22;
  }

  import19.Clock get _Clock_3_23 {
    if ((this.__Clock_3_23 == null)) {
      (__Clock_3_23 = const import19.Clock());
    }
    return this.__Clock_3_23;
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('First Homework');
    _el_0.append(_text_1);
    _compView_2 = import4.ViewTodoListComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _TodoListService_2_5 = import5.TodoListService();
    _TodoListComponent_2_6 = import6.TodoListComponent(_TodoListService_2_5);
    _compView_2.create(_TodoListComponent_2_6, []);
    _compView_3 = import7.ViewButtonComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    addShimC(_el_3);
    _ButtonComponent_3_5 = import8.ButtonComponent();
    _compView_3.create(_ButtonComponent_3_5, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.TodoListService) && (2 == nodeIndex))) {
      return _TodoListService_2_5;
    }
    if ((identical(token, import3.Document) && (3 == nodeIndex))) {
      return _Document_3_6;
    }
    if ((identical(token, import3.Window) && (3 == nodeIndex))) {
      return _Window_3_7;
    }
    if ((identical(token, import28.DomService) && (3 == nodeIndex))) {
      return _DomService_3_8;
    }
    if ((identical(token, import9.AcxImperativeViewUtils) && (3 == nodeIndex))) {
      return _AcxImperativeViewUtils_3_9;
    }
    if ((identical(token, import10.DomRuler) && (3 == nodeIndex))) {
      return _DomRuler_3_10;
    }
    if ((identical(token, import34.ManagedZone) && (3 == nodeIndex))) {
      return _ManagedZone_3_11;
    }
    if ((identical(token, const import33.OpaqueToken('overlayContainerName')) && (3 == nodeIndex))) {
      return _overlayContainerName_3_12;
    }
    if ((identical(token, const import33.OpaqueToken('overlayContainerParent')) && (3 == nodeIndex))) {
      return _overlayContainerParent_3_13;
    }
    if ((identical(token, const import33.OpaqueToken('overlayContainer')) && (3 == nodeIndex))) {
      return _overlayContainer_3_14;
    }
    if ((identical(token, const import33.OpaqueToken('overlaySyncDom')) && (3 == nodeIndex))) {
      return _overlaySyncDom_3_15;
    }
    if ((identical(token, const import33.OpaqueToken('overlayRepositionLoop')) && (3 == nodeIndex))) {
      return _overlayRepositionLoop_3_16;
    }
    if ((identical(token, import12.OverlayStyleConfig) && (3 == nodeIndex))) {
      return _OverlayStyleConfig_3_17;
    }
    if ((identical(token, import13.ZIndexer) && (3 == nodeIndex))) {
      return _ZIndexer_3_18;
    }
    if ((identical(token, import14.OverlayDomRenderService) && (3 == nodeIndex))) {
      return _OverlayDomRenderService_3_19;
    }
    if ((identical(token, import15.OverlayService) && (3 == nodeIndex))) {
      return _OverlayService_3_20;
    }
    if ((identical(token, const import33.OpaqueToken<List<import35.RelativePosition>>('defaultPopupPositions')) && (3 == nodeIndex))) {
      return _defaultPopupPositions_3_21;
    }
    if ((identical(token, import18.DomPopupSourceFactory) && (3 == nodeIndex))) {
      return _DomPopupSourceFactory_3_22;
    }
    if (((identical(token, import19.Clock) || identical(token, const import33.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (3 == nodeIndex))) {
      return _Clock_3_23;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import23.AppViewUtils.throwOnChanges && firstCheck)) {
      _TodoListComponent_2_6.ngOnInit();
    }
    if ((!import23.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonComponent_3_5.ngOnInit();
    }
    _compView_2.detectChanges();
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
    _compView_3?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import21.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
