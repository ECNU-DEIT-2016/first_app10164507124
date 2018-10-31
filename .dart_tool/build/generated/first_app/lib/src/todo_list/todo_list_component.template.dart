// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'todo_list_component.dart';
export 'todo_list_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'todo_list_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'todo_list_service.template.dart' as _ref2;
import 'package:first_app/src/todo_list/todo_list_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'todo_list_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_input/material_input.template.dart' as import4;
import 'package:angular_components/material_input/deferred_validator.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import 'package:angular_components/material_input/material_input.dart' as import7;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import8;
import 'package:angular_components/material_button/material_fab.template.dart' as import9;
import 'package:angular_components/material_button/material_fab.dart' as import10;
import 'package:angular_components/material_icon/material_icon.template.dart' as import11;
import 'package:angular_components/material_icon/material_icon.dart' as import12;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/src/runtime.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import22;
import 'package:angular_forms/src/directives/ng_control.dart' as import23;
import 'package:angular_components/utils/angular/reference/reference.dart' as import24;
import 'package:angular_components/focus/focus_interface.dart' as import25;
import 'package:angular_components/interfaces/has_disabled.dart' as import26;
import 'package:angular_components/material_input/base_material_input.dart' as import27;
import 'package:angular/src/common/directives/ng_for.dart' as import28;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import29;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import30;
import 'dart:core';
import 'todo_list_service.dart' as import32;

final List<dynamic> styles$TodoListComponent = [import0.styles];

class ViewTodoListComponent0 extends AppView<import2.TodoListComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import4.ViewMaterialInputComponent0 _compView_1;
  import5.DeferredValidator _DeferredValidator_1_5;
  List<dynamic> _NgValidators_1_6;
  import6.NgModel _NgModel_1_7;
  import6.NgModel _NgControl_1_8;
  import7.MaterialInputComponent _MaterialInputComponent_1_9;
  import7.MaterialInputComponent _BaseMaterialInput_1_10;
  import8.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_1_11;
  import3.Element _el_2;
  import9.ViewMaterialFabComponent0 _compView_2;
  import10.MaterialFabComponent _MaterialFabComponent_2_5;
  import3.Element _el_3;
  import11.ViewMaterialIconComponent0 _compView_3;
  import12.MaterialIconComponent _MaterialIconComponent_3_5;
  import3.Comment _anchor_4;
  import3.Element _el_4_0;
  import3.Text _text_4_1;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  bool _expr_3;
  bool _expr_6 = false;
  static RenderComponentType _renderType;
  ViewTodoListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('todo-list');
    _renderType ??= import18.appViewUtils.createRenderType((import19.isDevMode ? 'asset:first_app/lib/src/todo_list/todo_list_component.dart' : null), ViewEncapsulation.Emulated, styles$TodoListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.TodoListComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _compView_1 = import4.ViewMaterialInputComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'autoFocus', '');
    createAttr(_el_1, 'floatingLabel', '');
    createAttr(_el_1, 'label', 'What do you need to do?');
    createAttr(_el_1, 'style', 'width:80%');
    addShimC(_el_1);
    _DeferredValidator_1_5 = import5.DeferredValidator();
    _NgValidators_1_6 = [_DeferredValidator_1_5];
    _NgModel_1_7 = import6.NgModel(_NgValidators_1_6, null);
    _NgControl_1_8 = _NgModel_1_7;
    _MaterialInputComponent_1_9 = import7.MaterialInputComponent(null, null, null, _NgControl_1_8, _compView_1.ref, _DeferredValidator_1_5);
    _BaseMaterialInput_1_10 = _MaterialInputComponent_1_9;
    _MaterialInputDefaultValueAccessor_1_11 = import8.MaterialInputDefaultValueAccessor(_BaseMaterialInput_1_10, _NgControl_1_8);
    _compView_1.create(_MaterialInputComponent_1_9, [const [], const []]);
    _compView_2 = import9.ViewMaterialFabComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    createAttr(_el_2, 'mini', '');
    createAttr(_el_2, 'raised', '');
    addShimC(_el_2);
    _MaterialFabComponent_2_5 = import10.MaterialFabComponent(_el_2, _compView_2.ref);
    _compView_3 = import11.ViewMaterialIconComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    createAttr(_el_3, 'icon', 'add');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import12.MaterialIconComponent(_el_3);
    _compView_3.create(_MaterialIconComponent_3_5, []);
    _compView_2.create(_MaterialFabComponent_2_5, [
      [_el_3]
    ]);
    _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    final _anchor_5 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_5);
    _appEl_5 = ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_TodoListComponent2);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    import18.appViewUtils.eventManager.addEventListener(_el_1, 'keyup.enter', eventHandler0(ctx.add));
    final subscription_0 = _NgModel_1_7.update.listen(eventHandler1(_handle_ngModelChange_1_1));
    final subscription_1 = _MaterialFabComponent_2_5.trigger.listen(eventHandler0(ctx.add));
    init([], [subscription_0, subscription_1]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DeferredValidator) && (1 == nodeIndex))) {
      return _DeferredValidator_1_5;
    }
    if ((identical(token, const import22.MultiToken('NgValidators')) && (1 == nodeIndex))) {
      return _NgValidators_1_6;
    }
    if ((identical(token, import6.NgModel) && (1 == nodeIndex))) {
      return _NgModel_1_7;
    }
    if ((identical(token, import23.NgControl) && (1 == nodeIndex))) {
      return _NgControl_1_8;
    }
    if (((((identical(token, import7.MaterialInputComponent) || identical(token, import24.ReferenceDirective)) || identical(token, import25.Focusable)) || identical(token, import26.HasDisabled)) && (1 == nodeIndex))) {
      return _MaterialInputComponent_1_9;
    }
    if ((identical(token, import27.BaseMaterialInput) && (1 == nodeIndex))) {
      return _BaseMaterialInput_1_10;
    }
    if ((identical(token, import8.MaterialInputDefaultValueAccessor) && (1 == nodeIndex))) {
      return _MaterialInputDefaultValueAccessor_1_11;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.TodoListComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_1_7.model = _ctx.newTodo;
    _NgModel_1_7.ngAfterChanges();
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_1_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_1_9.label = 'What do you need to do?';
      changed = true;
      _MaterialInputComponent_1_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_2_5.raised = true;
      changed = true;
    }
    final currVal_3 = _ctx.newTodo.isEmpty;
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _MaterialFabComponent_2_5.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialFabComponent_2_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'add';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    final currVal_6 = (_ctx.items.isEmpty == true);
    if (import18.checkBinding(_expr_6, currVal_6)) {
      if (currVal_6) {
        var doc = import3.document;
        _el_4_0 = doc.createElement('p');
        addShimE(_el_4_0);
        _text_4_1 = import3.Text('Nothing to do! Add items above.');
        _el_4_0.append(_text_4_1);
        addInlinedNodes(_anchor_4, [_el_4_0], true);
      } else {
        removeInlinedNodes([_el_4_0], true);
      }
      _expr_6 = currVal_6;
    }
    _NgIf_5_9.ngIf = _ctx.items.isNotEmpty;
    _appEl_5.detectChangesInNestedViews();
    _compView_2.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    if (!import18.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialInputComponent_1_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_2?.destroy();
    _compView_3?.destroy();
    _MaterialInputComponent_1_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_1_11.ngOnDestroy();
  }

  void _handle_ngModelChange_1_1($event) {
    ctx.newTodo = $event;
  }
}

AppView<import2.TodoListComponent> viewFactory_TodoListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewTodoListComponent0(parentView, parentIndex);
}

class _ViewTodoListComponent2 extends AppView<import2.TodoListComponent> {
  import3.DivElement _el_0;
  import3.UListElement _el_1;
  ViewContainer _appEl_2;
  import28.NgFor _NgFor_2_9;
  var _expr_0;
  _ViewTodoListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTodoListComponent0._renderType;
  }
  @override
  ComponentRef<import2.TodoListComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'ul', _el_0);
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_TodoListComponent3);
    _NgFor_2_9 = import28.NgFor(_appEl_2, _TemplateRef_2_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.TodoListComponent _ctx = ctx;
    final currVal_0 = _ctx.items;
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _NgFor_2_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import18.AppViewUtils.throwOnChanges) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.TodoListComponent> viewFactory_TodoListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTodoListComponent2(parentView, parentIndex);
}

class _ViewTodoListComponent3 extends AppView<import2.TodoListComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import29.ViewMaterialCheckboxComponent0 _compView_1;
  import30.MaterialCheckboxComponent _MaterialCheckboxComponent_1_5;
  import3.Element _el_2;
  import3.Text _text_3;
  import3.Element _el_4;
  import9.ViewMaterialFabComponent0 _compView_4;
  import10.MaterialFabComponent _MaterialFabComponent_4_5;
  import3.Element _el_5;
  import11.ViewMaterialIconComponent0 _compView_5;
  import12.MaterialIconComponent _MaterialIconComponent_5_5;
  bool _expr_0;
  var _expr_1;
  _ViewTodoListComponent3(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, {'\$implicit': null, 'index': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewTodoListComponent0._renderType;
  }
  @override
  ComponentRef<import2.TodoListComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _compView_1 = import29.ViewMaterialCheckboxComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'materialTooltip', 'Mark item as done');
    addShimC(_el_1);
    _MaterialCheckboxComponent_1_5 = import30.MaterialCheckboxComponent(_el_1, _compView_1.ref, null, null, null);
    _compView_1.create(_MaterialCheckboxComponent_1_5, [const []]);
    _el_2 = createSpanAndAppend(doc, _el_0);
    addShimE(_el_2);
    _text_3 = import3.Text('');
    _el_2.append(_text_3);
    _compView_4 = import9.ViewMaterialFabComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    createAttr(_el_4, 'mini', '');
    addShimC(_el_4);
    _MaterialFabComponent_4_5 = import10.MaterialFabComponent(_el_4, _compView_4.ref);
    _compView_5 = import11.ViewMaterialIconComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    createAttr(_el_5, 'icon', 'delete');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import12.MaterialIconComponent(_el_5);
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
    if ((identical(token, import26.HasDisabled) && (1 == nodeIndex))) {
      return _MaterialCheckboxComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import30.MaterialCheckboxComponent local_done = _MaterialCheckboxComponent_1_5;
    final String local_item = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
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
    if (import18.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_2, 'done', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import18.interpolate0(local_item);
    if (import18.checkBinding(_expr_1, currVal_1)) {
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

AppView<import2.TodoListComponent> viewFactory_TodoListComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTodoListComponent3(parentView, parentIndex);
}

final List<dynamic> styles$TodoListComponentHost = const [];

class _ViewTodoListComponentHost0 extends AppView<import2.TodoListComponent> {
  ViewTodoListComponent0 _compView_0;
  import32.TodoListService _TodoListService_0_5;
  import2.TodoListComponent _TodoListComponent_0_6;
  _ViewTodoListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.TodoListComponent> build() {
    _compView_0 = ViewTodoListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TodoListService_0_5 = import32.TodoListService();
    _TodoListComponent_0_6 = import2.TodoListComponent(_TodoListService_0_5);
    _compView_0.create(_TodoListComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _TodoListComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import32.TodoListService) && (0 == nodeIndex))) {
      return _TodoListService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _TodoListComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.TodoListComponent> viewFactory_TodoListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTodoListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.TodoListComponent> _TodoListComponentNgFactory = const ComponentFactory('todo-list', viewFactory_TodoListComponentHost0);
ComponentFactory<import2.TodoListComponent> get TodoListComponentNgFactory {
  return _TodoListComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TodoListComponent, TodoListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
