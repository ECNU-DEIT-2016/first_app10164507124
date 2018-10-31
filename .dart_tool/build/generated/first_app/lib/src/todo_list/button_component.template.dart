// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'button_component.dart';
export 'button_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:english_words/english_words.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:first_app/src/todo_list/button_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'button_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_button/material_button.template.dart' as import4;
import 'package:angular_components/theme/dark_theme.dart' as import5;
import 'package:angular_components/material_button/material_button.dart' as import6;
import 'package:angular_components/material_icon/material_icon.template.dart' as import7;
import 'package:angular_components/material_icon/material_icon.dart' as import8;
import 'package:angular_components/material_list/material_list.template.dart' as import9;
import 'package:angular_components/material_list/material_list.dart' as import10;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import12;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime.dart' as import17;
import 'package:angular/angular.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/button_decorator/button_decorator.dart' as import21;
import 'package:angular_components/interfaces/has_disabled.dart' as import22;
import 'package:angular_components/material_list/material_list_item.template.dart' as import23;
import 'package:angular_components/material_list/material_list_item.dart' as import24;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import25;
import 'package:english_words/src/word_pair.dart' as import26;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import27;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import28;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import29;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import30;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import31;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import32;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import33;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import35;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import36;
import 'package:quiver/time.dart' as import37;
import 'package:angular_components/utils/browser/window/module.dart' as import38;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import39;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import40;
import 'package:angular_components/utils/disposer/disposer.dart' as import41;
import 'package:angular/src/core/zone/ng_zone.dart' as import42;
import 'package:angular/src/core/linker/component_loader.dart' as import43;
import 'package:angular_components/laminate/overlay/module.dart' as import44;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import45;
import 'package:angular_components/laminate/enums/alignment.dart' as import46;

final List<dynamic> styles$ButtonComponent = [import0.styles];

class ViewButtonComponent0 extends AppView<import2.ButtonComponent> {
  import3.Element _el_0;
  import4.ViewMaterialButtonComponent0 _compView_0;
  import5.AcxDarkTheme _AcxDarkTheme_0_5;
  import6.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import3.Element _el_1;
  import7.ViewMaterialIconComponent0 _compView_1;
  import8.MaterialIconComponent _MaterialIconComponent_1_5;
  import3.Element _el_3;
  import9.ViewMaterialListComponent0 _compView_3;
  import10.MaterialListComponent _MaterialListComponent_3_5;
  import3.DivElement _el_4;
  ViewContainer _appEl_5;
  import12.NgFor _NgFor_5_9;
  import3.DivElement _el_6;
  import3.DivElement _el_7;
  ViewContainer _appEl_9;
  import12.NgFor _NgFor_9_9;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewButtonComponent0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('btn-components');
    _renderType ??= import16.appViewUtils.createRenderType((import17.isDevMode ? 'asset:first_app/lib/src/todo_list/button_component.dart' : null), ViewEncapsulation.Emulated, styles$ButtonComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ButtonComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = import5.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_6 = import6.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0.ref, null);
    _compView_1 = import7.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'icon', 'lightbulb_outline');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import8.MaterialIconComponent(_el_1);
    _compView_1.create(_MaterialIconComponent_1_5, []);
    import3.Text _text_2 = import3.Text('Get new ideas');
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _text_2]
    ]);
    _compView_3 = import9.ViewMaterialListComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    addShimC(_el_3);
    _MaterialListComponent_3_5 = import10.MaterialListComponent();
    var doc = import3.document;
    _el_4 = doc.createElement('div');
    createAttr(_el_4, 'group', '');
    addShimC(_el_4);
    final _anchor_5 = createViewContainerAnchor();
    _el_4.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ButtonComponent1);
    _NgFor_5_9 = import12.NgFor(_appEl_5, _TemplateRef_5_8);
    _el_6 = doc.createElement('div');
    createAttr(_el_6, 'group', '');
    addShimC(_el_6);
    _el_7 = createDivAndAppend(doc, _el_6);
    createAttr(_el_7, 'label', '');
    addShimC(_el_7);
    import3.Text _text_8 = import3.Text('Saved names');
    _el_7.append(_text_8);
    final _anchor_9 = createViewContainerAnchor();
    _el_6.append(_anchor_9);
    _appEl_9 = ViewContainer(9, 6, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_ButtonComponent2);
    _NgFor_9_9 = import12.NgFor(_appEl_9, _TemplateRef_9_8);
    _compView_3.create(_MaterialListComponent_3_5, [
      [_el_4, _el_6]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(ctx.generateNames));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _AcxDarkTheme_0_5;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialButtonComponent_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.ButtonComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'lightbulb_outline';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    final currVal_1 = _ctx.names;
    if (import16.checkBinding(_expr_1, currVal_1)) {
      _NgFor_5_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import16.AppViewUtils.throwOnChanges) {
      _NgFor_5_9.ngDoCheck();
    }
    if (firstCheck) {
      if (!identical(_ctx.savedNames, null)) {
        (_NgFor_9_9.ngForOf = _ctx.savedNames);
      }
    }
    if (!import16.AppViewUtils.throwOnChanges) {
      _NgFor_9_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_3.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
    _compView_0?.destroy();
    _compView_1?.destroy();
    _compView_3?.destroy();
  }
}

AppView<import2.ButtonComponent> viewFactory_ButtonComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewButtonComponent0(parentView, parentIndex);
}

class _ViewButtonComponent1 extends AppView<import2.ButtonComponent> {
  import3.Element _el_0;
  import23.ViewMaterialListItemComponent0 _compView_0;
  import24.MaterialListItemComponent _MaterialListItemComponent_0_5;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Text _text_3;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewButtonComponent1(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewButtonComponent0._renderType;
  }
  @override
  ComponentRef<import2.ButtonComponent> build() {
    _compView_0 = import23.ViewMaterialListItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialListItemComponent_0_5 = import24.MaterialListItemComponent(_el_0, parentView.parentView.injectorGet(import25.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
    var doc = import3.document;
    _el_1 = doc.createElement('span');
    _el_1.className = 'first';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _text_3 = import3.Text('');
    import3.Text _text_4 = import3.Text('.com');
    _compView_0.create(_MaterialListItemComponent_0_5, [
      [_el_1, _text_3, _text_4]
    ]);
    final subscription_0 = _MaterialListItemComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.HasDisabled) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _MaterialListItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.ButtonComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import26.WordPair local_item = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_0_5.ngOnInit();
    }
    final currVal_0 = _ctx.savedNames.contains(local_item);
    if (import16.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'is-saved', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import16.interpolate0(local_item.first);
    if (import16.checkBinding(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import16.interpolate0(local_item.second);
    if (import16.checkBinding(_expr_2, currVal_2)) {
      _text_3.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialListItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final import26.WordPair local_item = locals['\$implicit'];
    ctx.toggleSavedState(local_item);
  }
}

AppView<import2.ButtonComponent> viewFactory_ButtonComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewButtonComponent1(parentView, parentIndex);
}

class _ViewButtonComponent2 extends AppView<import2.ButtonComponent> {
  import3.Element _el_0;
  import23.ViewMaterialListItemComponent0 _compView_0;
  import24.MaterialListItemComponent _MaterialListItemComponent_0_5;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Text _text_3;
  var _expr_0;
  var _expr_1;
  _ViewButtonComponent2(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewButtonComponent0._renderType;
  }
  @override
  ComponentRef<import2.ButtonComponent> build() {
    _compView_0 = import23.ViewMaterialListItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialListItemComponent_0_5 = import24.MaterialListItemComponent(_el_0, parentView.parentView.injectorGet(import25.DropdownHandle, parentView.viewData.parentIndex, null), null, null);
    var doc = import3.document;
    _el_1 = doc.createElement('span');
    _el_1.className = 'first';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _text_3 = import3.Text('');
    import3.Text _text_4 = import3.Text('.com');
    _compView_0.create(_MaterialListItemComponent_0_5, [
      [_el_1, _text_3, _text_4]
    ]);
    final subscription_0 = _MaterialListItemComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.HasDisabled) && ((0 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _MaterialListItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import26.WordPair local_item = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_0 = import16.interpolate0(local_item.first);
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import16.interpolate0(local_item.second);
    if (import16.checkBinding(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialListItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final import26.WordPair local_item = locals['\$implicit'];
    ctx.removeFromSaved(local_item);
  }
}

AppView<import2.ButtonComponent> viewFactory_ButtonComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewButtonComponent2(parentView, parentIndex);
}

final List<dynamic> styles$ButtonComponentHost = const [];

class _ViewButtonComponentHost0 extends AppView<import2.ButtonComponent> {
  ViewButtonComponent0 _compView_0;
  import2.ButtonComponent _ButtonComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import27.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  import28.DomRuler __DomRuler_0_10;
  import29.Angular2ManagedZone __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import30.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import31.ZIndexer __ZIndexer_0_18;
  import32.OverlayDomRenderService __OverlayDomRenderService_0_19;
  import33.OverlayService __OverlayService_0_20;
  List<import35.RelativePosition> __defaultPopupPositions_0_21;
  import36.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import37.Clock __Clock_0_23;
  _ViewButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((this.__Document_0_6 == null)) {
      (__Document_0_6 = import38.getDocument());
    }
    return this.__Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import38.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import39.createDomService(this.injectorGet(import40.DomService, this.viewData.parentIndex, null), this.injectorGet(import41.Disposer, this.viewData.parentIndex, null), this.injectorGet(import42.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import27.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = import27.AcxImperativeViewUtils(this.injectorGet(import43.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  import28.DomRuler get _DomRuler_0_10 {
    if ((this.__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import28.DomRuler(this._Document_0_6, this._DomService_0_8));
    }
    return this.__DomRuler_0_10;
  }

  import29.Angular2ManagedZone get _ManagedZone_0_11 {
    if ((this.__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = import29.Angular2ManagedZone(this.injectorGet(import42.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((this.__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = import44.getDefaultContainerName(this.injectorGet(const import19.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((this.__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = import44.getOverlayContainerParent(this._Document_0_6, this.injectorGet(const import19.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((this.__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = import44.getDefaultContainer(this._overlayContainerName_0_12, this._overlayContainerParent_0_13, this.injectorGet(const import19.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((this.__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return this.__overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((this.__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = true);
    }
    return this.__overlayRepositionLoop_0_16;
  }

  import30.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((this.__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import30.OverlayStyleConfig(this._Document_0_6));
    }
    return this.__OverlayStyleConfig_0_17;
  }

  import31.ZIndexer get _ZIndexer_0_18 {
    if ((this.__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import31.ZIndexer());
    }
    return this.__ZIndexer_0_18;
  }

  import32.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((this.__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import32.OverlayDomRenderService(this._OverlayStyleConfig_0_17, this._overlayContainer_0_14, this._overlayContainerName_0_12, this._DomRuler_0_10, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_15, this._overlayRepositionLoop_0_16, this._ZIndexer_0_18));
    }
    return this.__OverlayDomRenderService_0_19;
  }

  import33.OverlayService get _OverlayService_0_20 {
    if ((this.__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = import33.OverlayService(this.injectorGet(import42.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_15, this._OverlayDomRenderService_0_19, this.injectorGet(import33.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_20;
  }

  List<import35.RelativePosition> get _defaultPopupPositions_0_21 {
    if ((this.__defaultPopupPositions_0_21 == null)) {
      (__defaultPopupPositions_0_21 = const [import35.RelativePosition(animationOrigin: 'top center'), import35.RelativePosition(animationOrigin: 'top right', originX: import35.Alignment('End', 'flex-end')), import35.RelativePosition(animationOrigin: 'top left', originX: import35.Alignment('Start', 'flex-start')), import35.RelativePosition(animationOrigin: 'bottom center', originY: import35.Alignment('End', 'flex-end')), import35.RelativePosition(animationOrigin: 'bottom right', originX: import35.Alignment('End', 'flex-end'), originY: import35.Alignment('End', 'flex-end')), import35.RelativePosition(animationOrigin: 'bottom left', originX: import35.Alignment('Start', 'flex-start'), originY: import35.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_21;
  }

  import36.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = import36.DomPopupSourceFactory(this._DomRuler_0_10));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import37.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import37.Clock());
    }
    return this.__Clock_0_23;
  }

  @override
  ComponentRef<import2.ButtonComponent> build() {
    _compView_0 = ViewButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ButtonComponent_0_5 = import2.ButtonComponent();
    _compView_0.create(_ButtonComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ButtonComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import40.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import27.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import28.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import45.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import19.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import19.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import19.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import19.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import19.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import30.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import31.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import32.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import33.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, const import19.OpaqueToken<List<import46.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_21;
    }
    if ((identical(token, import36.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import37.Clock) || identical(token, const import19.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_23;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.ButtonComponent> viewFactory_ButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewButtonComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ButtonComponent> _ButtonComponentNgFactory = const ComponentFactory('btn-components', viewFactory_ButtonComponentHost0);
ComponentFactory<import2.ButtonComponent> get ButtonComponentNgFactory {
  return _ButtonComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ButtonComponent, ButtonComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
