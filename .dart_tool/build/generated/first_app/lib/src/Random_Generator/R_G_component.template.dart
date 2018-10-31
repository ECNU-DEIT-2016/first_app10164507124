// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'R_G_component.dart';
export 'R_G_component.dart';
import 'dart:async';
import 'dart:math' show Random;
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'todo_list_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'todo_list_service.template.dart' as _ref2;
import 'package:first_app/src/Random_Generator/R_G_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'R_G_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_button/material_fab.template.dart' as import4;
import 'package:angular_components/material_button/material_fab.dart' as import5;
import 'package:angular_components/material_icon/material_icon.template.dart' as import6;
import 'package:angular_components/material_icon/material_icon.dart' as import7;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import17;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import18;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import19;
import 'package:angular_components/interfaces/has_disabled.dart' as import20;
import 'dart:core';
import 'todo_list_service.dart' as import22;

final List<dynamic> styles$RGComponent = [import0.styles];

class ViewRGComponent0 extends AppView<import2.RGComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import4.ViewMaterialFabComponent0 _compView_1;
  import5.MaterialFabComponent _MaterialFabComponent_1_5;
  import3.Element _el_2;
  import6.ViewMaterialIconComponent0 _compView_2;
  import7.MaterialIconComponent _MaterialIconComponent_2_5;
  import3.Comment _anchor_3;
  import3.Element _el_3_0;
  import3.Text _text_3_1;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  bool _expr_2 = false;
  static RenderComponentType _renderType;
  ViewRGComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('Rand-G');
    _renderType ??= import13.appViewUtils.createRenderType((import14.isDevMode ? 'asset:first_app/lib/src/Random_Generator/R_G_component.dart' : null), ViewEncapsulation.Emulated, styles$RGComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.RGComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _compView_1 = import4.ViewMaterialFabComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'mini', '');
    createAttr(_el_1, 'raised', '');
    addShimC(_el_1);
    _MaterialFabComponent_1_5 = import5.MaterialFabComponent(_el_1, _compView_1.ref);
    _compView_2 = import6.ViewMaterialIconComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    createAttr(_el_2, 'icon', 'add');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import7.MaterialIconComponent(_el_2);
    _compView_2.create(_MaterialIconComponent_2_5, []);
    _compView_1.create(_MaterialFabComponent_1_5, [
      [_el_2]
    ]);
    _anchor_3 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_3);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_RGComponent2);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final subscription_0 = _MaterialFabComponent_1_5.trigger.listen(eventHandler0(ctx.main));
    init([], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.RGComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_1_5.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import13.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialFabComponent_1_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'add';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    final currVal_2 = (_ctx.items.isEmpty == true);
    if (import13.checkBinding(_expr_2, currVal_2)) {
      if (currVal_2) {
        var doc = import3.document;
        _el_3_0 = doc.createElement('p');
        addShimE(_el_3_0);
        _text_3_1 = import3.Text('No random number is created yet.');
        _el_3_0.append(_text_3_1);
        addInlinedNodes(_anchor_3, [_el_3_0], true);
      } else {
        removeInlinedNodes([_el_3_0], true);
      }
      _expr_2 = currVal_2;
    }
    _NgIf_4_9.ngIf = _ctx.items.isNotEmpty;
    _appEl_4.detectChangesInNestedViews();
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_4?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_2?.destroy();
  }
}

AppView<import2.RGComponent> viewFactory_RGComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewRGComponent0(parentView, parentIndex);
}

class _ViewRGComponent2 extends AppView<import2.RGComponent> {
  import3.DivElement _el_0;
  import3.UListElement _el_1;
  ViewContainer _appEl_2;
  import17.NgFor _NgFor_2_9;
  var _expr_0;
  _ViewRGComponent2(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewRGComponent0._renderType;
  }
  @override
  ComponentRef<import2.RGComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'ul', _el_0);
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_RGComponent3);
    _NgFor_2_9 = import17.NgFor(_appEl_2, _TemplateRef_2_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.RGComponent _ctx = ctx;
    final currVal_0 = _ctx.items;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_2_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import13.AppViewUtils.throwOnChanges) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.RGComponent> viewFactory_RGComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewRGComponent2(parentView, parentIndex);
}

class _ViewRGComponent3 extends AppView<import2.RGComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import18.ViewMaterialCheckboxComponent0 _compView_1;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_1_5;
  import3.Element _el_2;
  import3.Text _text_3;
  import3.Element _el_4;
  import4.ViewMaterialFabComponent0 _compView_4;
  import5.MaterialFabComponent _MaterialFabComponent_4_5;
  import3.Element _el_5;
  import6.ViewMaterialIconComponent0 _compView_5;
  import7.MaterialIconComponent _MaterialIconComponent_5_5;
  bool _expr_0;
  var _expr_1;
  _ViewRGComponent3(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewRGComponent0._renderType;
  }
  @override
  ComponentRef<import2.RGComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _compView_1 = import18.ViewMaterialCheckboxComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'materialTooltip', 'Mark item as done');
    addShimC(_el_1);
    _MaterialCheckboxComponent_1_5 = import19.MaterialCheckboxComponent(_el_1, _compView_1.ref, null, null, null);
    _compView_1.create(_MaterialCheckboxComponent_1_5, [const []]);
    _el_2 = createSpanAndAppend(doc, _el_0);
    addShimE(_el_2);
    _text_3 = import3.Text('');
    _el_2.append(_text_3);
    _compView_4 = import4.ViewMaterialFabComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    createAttr(_el_4, 'mini', '');
    addShimC(_el_4);
    _MaterialFabComponent_4_5 = import5.MaterialFabComponent(_el_4, _compView_4.ref);
    _compView_5 = import6.ViewMaterialIconComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    createAttr(_el_5, 'icon', 'delete');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import7.MaterialIconComponent(_el_5);
    _compView_5.create(_MaterialIconComponent_5_5, []);
    _compView_4.create(_MaterialFabComponent_4_5, [
      [_el_5]
    ]);
    final subscription_0 = _MaterialFabComponent_4_5.trigger.listen(eventHandler1(_handle_trigger_4_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.HasDisabled) && (1 == nodeIndex))) {
      return _MaterialCheckboxComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import19.MaterialCheckboxComponent local_done = _MaterialCheckboxComponent_1_5;
    final String local_item = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import13.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialFabComponent_4_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_5_5.icon = 'delete';
      changed = true;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    final currVal_0 = local_done.checked;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_2, 'done', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import13.interpolate0(local_item);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _compView_4?.destroy();
    _compView_5?.destroy();
    _MaterialCheckboxComponent_1_5.ngOnDestroy();
  }

  void _handle_trigger_4_0($event) {
    final int local_i = locals['index'];
    ctx.remove(local_i);
  }
}

AppView<import2.RGComponent> viewFactory_RGComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewRGComponent3(parentView, parentIndex);
}

final List<dynamic> styles$RGComponentHost = const [];

class _ViewRGComponentHost0 extends AppView<import2.RGComponent> {
  ViewRGComponent0 _compView_0;
  import22.TodoListService _TodoListService_0_5;
  import2.RGComponent _RGComponent_0_6;
  _ViewRGComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.RGComponent> build() {
    _compView_0 = ViewRGComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TodoListService_0_5 = import22.TodoListService();
    _RGComponent_0_6 = import2.RGComponent(_TodoListService_0_5);
    _compView_0.create(_RGComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _RGComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.TodoListService) && (0 == nodeIndex))) {
      return _TodoListService_0_5;
    }
    return notFoundResult;
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

AppView<import2.RGComponent> viewFactory_RGComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewRGComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.RGComponent> _RGComponentNgFactory = const ComponentFactory('Rand-G', viewFactory_RGComponentHost0);
ComponentFactory<import2.RGComponent> get RGComponentNgFactory {
  return _RGComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(RGComponent, RGComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
