// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component1.dart';
export 'app_component1.dart';
import 'package:angular/angular.dart';
import 'src/Random_Generator/R_G_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/Random_Generator/R_G_component.template.dart' as _ref1;
import 'package:first_app/app_component1.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component1.dart' as import2;
import 'dart:html' as import3;
import 'src/Random_Generator/R_G_component.template.dart' as import4;
import 'src/Random_Generator/todo_list_service.dart' as import5;
import 'src/Random_Generator/R_G_component.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';

final List<dynamic> styles$AppComponent2 = [import0.styles];

class ViewAppComponent20 extends AppView<import2.AppComponent2> {
  import3.Element _el_0;
  import3.Element _el_2;
  import4.ViewRGComponent0 _compView_2;
  import5.TodoListService _TodoListService_2_5;
  import6.RGComponent _RGComponent_2_6;
  static RenderComponentType _renderType;
  ViewAppComponent20(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app2');
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:first_app/lib/app_component1.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent2);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent2> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('Random Generator');
    _el_0.append(_text_1);
    _compView_2 = import4.ViewRGComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _TodoListService_2_5 = import5.TodoListService();
    _RGComponent_2_6 = import6.RGComponent(_TodoListService_2_5);
    _compView_2.create(_RGComponent_2_6, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.TodoListService) && (2 == nodeIndex))) {
      return _TodoListService_2_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
  }
}

AppView<import2.AppComponent2> viewFactory_AppComponent20(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent20(parentView, parentIndex);
}

final List<dynamic> styles$AppComponent2Host = const [];

class _ViewAppComponent2Host0 extends AppView<import2.AppComponent2> {
  ViewAppComponent20 _compView_0;
  import2.AppComponent2 _AppComponent2_0_5;
  _ViewAppComponent2Host0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent2> build() {
    _compView_0 = ViewAppComponent20(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent2_0_5 = import2.AppComponent2();
    _compView_0.create(_AppComponent2_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent2_0_5);
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

AppView<import2.AppComponent2> viewFactory_AppComponent2Host0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent2Host0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent2> _AppComponent2NgFactory = const ComponentFactory('my-app2', viewFactory_AppComponent2Host0);
ComponentFactory<import2.AppComponent2> get AppComponent2NgFactory {
  return _AppComponent2NgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent2, AppComponent2NgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
