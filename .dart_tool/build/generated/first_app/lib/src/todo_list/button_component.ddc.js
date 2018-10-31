define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/english_words/english_words'], function(dart_sdk, change_detection, english_words) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__word_pair = english_words.src__word_pair;
  const _root = Object.create(null);
  const src__todo_list__todo_list_service = Object.create(_root);
  const src__todo_list__todo_list_component = Object.create(_root);
  const src__todo_list__button_component = Object.create(_root);
  const $add = dartx.add;
  const $removeAt = dartx.removeAt;
  const $toList = dartx.toList;
  const $take = dartx.take;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfWordPair = () => (JSArrayOfWordPair = dart.constFn(_interceptors.JSArray$(src__word_pair.WordPair)))();
  let _HashSetOfWordPair = () => (_HashSetOfWordPair = dart.constFn(collection._HashSet$(src__word_pair.WordPair)))();
  let ListOfWordPair = () => (ListOfWordPair = dart.constFn(core.List$(src__word_pair.WordPair)))();
  let SetOfWordPair = () => (SetOfWordPair = dart.constFn(core.Set$(src__word_pair.WordPair)))();
  src__todo_list__todo_list_service.TodoListService = class TodoListService extends core.Object {
    get mockTodoList() {
      return this[mockTodoList];
    }
    set mockTodoList(value) {
      this[mockTodoList] = value;
    }
    getTodoList() {
      return async.async(ListOfString(), (function* getTodoList() {
        return this.mockTodoList;
      }).bind(this));
    }
  };
  (src__todo_list__todo_list_service.TodoListService.new = function() {
    this[mockTodoList] = JSArrayOfString().of([]);
  }).prototype = src__todo_list__todo_list_service.TodoListService.prototype;
  dart.addTypeTests(src__todo_list__todo_list_service.TodoListService);
  const mockTodoList = Symbol("TodoListService.mockTodoList");
  dart.setMethodSignature(src__todo_list__todo_list_service.TodoListService, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_service.TodoListService.__proto__),
    getTodoList: dart.fnType(async.Future$(core.List$(core.String)), [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_service.TodoListService, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_service.TodoListService.__proto__),
    mockTodoList: dart.fieldType(ListOfString())
  }));
  src__todo_list__todo_list_component.TodoListComponent = class TodoListComponent extends core.Object {
    get todoListService() {
      return this[todoListService$];
    }
    set todoListService(value) {
      super.todoListService = value;
    }
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    get newTodo() {
      return this[newTodo];
    }
    set newTodo(value) {
      this[newTodo] = value;
    }
    ngOnInit() {
      return async.async(core.Null, (function* ngOnInit() {
        this.items = (yield this.todoListService.getTodoList());
      }).bind(this));
    }
    add() {
      this.items[$add](this.newTodo);
      this.newTodo = "";
    }
    remove(index) {
      return this.items[$removeAt](index);
    }
  };
  (src__todo_list__todo_list_component.TodoListComponent.new = function(todoListService) {
    this[items] = JSArrayOfString().of([]);
    this[newTodo] = "";
    this[todoListService$] = todoListService;
  }).prototype = src__todo_list__todo_list_component.TodoListComponent.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component.TodoListComponent);
  const todoListService$ = Symbol("TodoListComponent.todoListService");
  const items = Symbol("TodoListComponent.items");
  const newTodo = Symbol("TodoListComponent.newTodo");
  src__todo_list__todo_list_component.TodoListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__todo_list__todo_list_component.TodoListComponent, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component.TodoListComponent.__proto__),
    ngOnInit: dart.fnType(async.Future$(core.Null), []),
    add: dart.fnType(dart.void, []),
    remove: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component.TodoListComponent, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component.TodoListComponent.__proto__),
    todoListService: dart.finalFieldType(src__todo_list__todo_list_service.TodoListService),
    items: dart.fieldType(ListOfString()),
    newTodo: dart.fieldType(core.String)
  }));
  src__todo_list__button_component.ButtonComponent = class ButtonComponent extends core.Object {
    get names() {
      return this[names];
    }
    set names(value) {
      this[names] = value;
    }
    get savedNames() {
      return this[savedNames];
    }
    set savedNames(value) {
      super.savedNames = value;
    }
    generateNames() {
      this.names = src__word_pair.generateWordPairs()[$take](5)[$toList]();
    }
    ngOnInit() {
      this.generateNames();
    }
    addToSaved(name) {
      this.savedNames.add(name);
    }
    removeFromSaved(name) {
      this.savedNames.remove(name);
    }
    toggleSavedState(name) {
      if (dart.test(this.savedNames.contains(name))) {
        this.removeFromSaved(name);
        return;
      }
      this.addToSaved(name);
    }
  };
  (src__todo_list__button_component.ButtonComponent.new = function() {
    this[names] = JSArrayOfWordPair().of([]);
    this[savedNames] = new (_HashSetOfWordPair()).new();
  }).prototype = src__todo_list__button_component.ButtonComponent.prototype;
  dart.addTypeTests(src__todo_list__button_component.ButtonComponent);
  const names = Symbol("ButtonComponent.names");
  const savedNames = Symbol("ButtonComponent.savedNames");
  src__todo_list__button_component.ButtonComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__todo_list__button_component.ButtonComponent, () => ({
    __proto__: dart.getMethods(src__todo_list__button_component.ButtonComponent.__proto__),
    generateNames: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    addToSaved: dart.fnType(dart.void, [src__word_pair.WordPair]),
    removeFromSaved: dart.fnType(dart.void, [src__word_pair.WordPair]),
    toggleSavedState: dart.fnType(dart.void, [src__word_pair.WordPair])
  }));
  dart.setFieldSignature(src__todo_list__button_component.ButtonComponent, () => ({
    __proto__: dart.getFields(src__todo_list__button_component.ButtonComponent.__proto__),
    names: dart.fieldType(ListOfWordPair()),
    savedNames: dart.finalFieldType(SetOfWordPair())
  }));
  dart.trackLibraries("packages/first_app/src/todo_list/button_component.ddc", {
    "package:first_app/src/todo_list/todo_list_service.dart": src__todo_list__todo_list_service,
    "package:first_app/src/todo_list/todo_list_component.dart": src__todo_list__todo_list_component,
    "package:first_app/src/todo_list/button_component.dart": src__todo_list__button_component
  }, '{"version":3,"sourceRoot":"","sources":["todo_list_service.dart","todo_list_component.dart","button_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAOe;;;;;;;AAEsB;cAAS,kBAAY;;;;;IAF3C,kBAAY,GAAG;EAG9B;;;;;;;;;;;;ICYwB;;;;;;IAET;;;;;;IACN;;;;;;;AAKiB;AACtB,kBAAK,IAAG,MAAM,oBAAe,YAAY;MAC3C;;;AAGE,gBAAK,MAAI,CAAC,YAAO;AACjB,kBAAO,GAAG;IACZ;WAEc,KAAS;YAAK,WAAK,WAAS,CAAC,KAAK;IAAC;;wEAZ/B,eAAoB;IAHzB,WAAK,GAAG;IACd,aAAO,GAAG;IAEM,sBAAe,GAAf,eAAe;EAAC;;;;;;;;;;;;;;;;;;;ICNnC;;;;;;IACE;;;;;;;AAGJ,gBAAK,GAAG,gCAAiB,SAAO,CAAC,WAAS;IAC5C;;AAIE,wBAAa;IACf;eAGE,IAAa;AAEb,qBAAU,IAAI,CAAC,IAAI;IACrB;oBAGE,IAAa;AAEb,qBAAU,OAAO,CAAC,IAAI;IACxB;qBAGE,IAAa;AAEb,oBAAI,eAAU,SAAS,CAAC,IAAI,IAAG;AAC7B,4BAAe,CAAC,IAAI;AACpB;;AAEF,qBAAU,CAAC,IAAI;IACjB;;;IAhCI,WAAK,GAAI;IACP,gBAAU,GAAI;EAgCtB","file":"button_component.ddc.js"}');
  // Exports:
  return {
    src__todo_list__todo_list_service: src__todo_list__todo_list_service,
    src__todo_list__todo_list_component: src__todo_list__todo_list_component,
    src__todo_list__button_component: src__todo_list__button_component
  };
});

//# sourceMappingURL=button_component.ddc.js.map
