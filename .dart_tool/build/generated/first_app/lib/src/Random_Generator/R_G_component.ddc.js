define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__Random_Generator__todo_list_service = Object.create(_root);
  const src__Random_Generator__R_G_component = Object.create(_root);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $removeAt = dartx.removeAt;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__Random_Generator__todo_list_service.TodoListService = class TodoListService extends core.Object {
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
  (src__Random_Generator__todo_list_service.TodoListService.new = function() {
    this[mockTodoList] = JSArrayOfString().of([]);
  }).prototype = src__Random_Generator__todo_list_service.TodoListService.prototype;
  dart.addTypeTests(src__Random_Generator__todo_list_service.TodoListService);
  const mockTodoList = Symbol("TodoListService.mockTodoList");
  dart.setMethodSignature(src__Random_Generator__todo_list_service.TodoListService, () => ({
    __proto__: dart.getMethods(src__Random_Generator__todo_list_service.TodoListService.__proto__),
    getTodoList: dart.fnType(async.Future$(core.List$(core.String)), [])
  }));
  dart.setFieldSignature(src__Random_Generator__todo_list_service.TodoListService, () => ({
    __proto__: dart.getFields(src__Random_Generator__todo_list_service.TodoListService.__proto__),
    mockTodoList: dart.fieldType(ListOfString())
  }));
  src__Random_Generator__R_G_component.RGComponent = class RGComponent extends core.Object {
    get todoListService() {
      return this[todoListService$];
    }
    set todoListService(value) {
      super.todoListService = value;
    }
    get sides() {
      return this[sides];
    }
    set sides(value) {
      this[sides] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    toString() {
      return dart.str(this.value);
    }
    get die() {
      return this[die];
    }
    set die(value) {
      this[die] = value;
    }
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    get names() {
      return this[names];
    }
    set names(value) {
      this[names] = value;
    }
    get newTodo() {
      return this[newTodo];
    }
    set newTodo(value) {
      this[newTodo] = value;
    }
    add() {
      this.items[$add](this.newTodo);
      this.newTodo = "";
    }
    main() {
      while (dart.notNull(this.items[$length]) < 10) {
        this.newTodo = this.names[$_get](this.die.roll());
        if (!dart.test(this.items[$contains](this.newTodo))) {
          this.items[$add](this.newTodo);
          this.newTodo = "";
          break;
        }
        this.newTodo = "";
      }
    }
    remove(index) {
      return this.items[$removeAt](index);
    }
  };
  (src__Random_Generator__R_G_component.RGComponent.new = function(todoListService) {
    this[sides] = 12;
    this[value$] = null;
    this[die] = new src__Random_Generator__R_G_component.Die.new();
    this[items] = JSArrayOfString().of([]);
    this[names] = JSArrayOfString().of(["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]);
    this[newTodo] = "";
    this[todoListService$] = todoListService;
  }).prototype = src__Random_Generator__R_G_component.RGComponent.prototype;
  dart.addTypeTests(src__Random_Generator__R_G_component.RGComponent);
  const todoListService$ = Symbol("RGComponent.todoListService");
  const sides = Symbol("RGComponent.sides");
  const value$ = Symbol("RGComponent.value");
  const die = Symbol("RGComponent.die");
  const items = Symbol("RGComponent.items");
  const names = Symbol("RGComponent.names");
  const newTodo = Symbol("RGComponent.newTodo");
  dart.setMethodSignature(src__Random_Generator__R_G_component.RGComponent, () => ({
    __proto__: dart.getMethods(src__Random_Generator__R_G_component.RGComponent.__proto__),
    add: dart.fnType(dart.void, []),
    main: dart.fnType(dart.void, []),
    remove: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(src__Random_Generator__R_G_component.RGComponent, () => ({
    __proto__: dart.getFields(src__Random_Generator__R_G_component.RGComponent.__proto__),
    todoListService: dart.finalFieldType(src__Random_Generator__todo_list_service.TodoListService),
    sides: dart.fieldType(core.int),
    value: dart.fieldType(core.int),
    die: dart.fieldType(src__Random_Generator__R_G_component.Die),
    items: dart.fieldType(ListOfString()),
    names: dart.fieldType(ListOfString()),
    newTodo: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(src__Random_Generator__R_G_component.RGComponent, ['toString']);
  src__Random_Generator__R_G_component.Die = class Die extends core.Object {
    get sides() {
      return this[sides$];
    }
    set sides(value) {
      this[sides$] = value;
    }
    get num() {
      return this[num];
    }
    set num(value) {
      this[num] = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      this[value$0] = value;
    }
    toString() {
      return dart.str(this.num);
    }
    roll() {
      return this.num = src__Random_Generator__R_G_component.Die.shaker.nextInt(this.sides);
    }
  };
  (src__Random_Generator__R_G_component.Die.new = function(opts) {
    let n = opts && 'n' in opts ? opts.n : 10;
    this[sides$] = null;
    this[num] = null;
    this[value$0] = null;
    if (n !== 0) {
      this.sides = n;
    } else {
      dart.throw(new core.ArgumentError.new());
    }
  }).prototype = src__Random_Generator__R_G_component.Die.prototype;
  dart.addTypeTests(src__Random_Generator__R_G_component.Die);
  const sides$ = Symbol("Die.sides");
  const num = Symbol("Die.num");
  const value$0 = Symbol("Die.value");
  dart.setMethodSignature(src__Random_Generator__R_G_component.Die, () => ({
    __proto__: dart.getMethods(src__Random_Generator__R_G_component.Die.__proto__),
    roll: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__Random_Generator__R_G_component.Die, () => ({
    __proto__: dart.getFields(src__Random_Generator__R_G_component.Die.__proto__),
    sides: dart.fieldType(core.int),
    num: dart.fieldType(core.int),
    value: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(src__Random_Generator__R_G_component.Die, ['toString']);
  dart.defineLazy(src__Random_Generator__R_G_component.Die, {
    /*src__Random_Generator__R_G_component.Die.shaker*/get shaker() {
      return math.Random.new();
    },
    set shaker(_) {}
  });
  dart.trackLibraries("packages/first_app/src/Random_Generator/R_G_component.ddc", {
    "package:first_app/src/Random_Generator/todo_list_service.dart": src__Random_Generator__todo_list_service,
    "package:first_app/src/Random_Generator/R_G_component.dart": src__Random_Generator__R_G_component
  }, '{"version":3,"sourceRoot":"","sources":["todo_list_service.dart","R_G_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAOe;;;;;;;AAEsB;cAAS,kBAAY;;;;;IAF3C,kBAAY,GAAG;EAG9B;;;;;;;;;;;;ICWwB;;;;;;IAClB;;;;;;IAAY;;;;;;;YACK,UAAE,UAAK;IAAC;IACzB;;;;;;IAES;;;;;;IACA;;;;;;IACN;;;;;;;AAUL,gBAAK,MAAI,CAAC,YAAO;AACjB,kBAAO,GAAG;IACZ;;AAGE,aAAmB,aAAb,UAAK,SAAO,IAAG,IAAG;AACtB,oBAAO,GAAG,UAAK,QAAC,QAAG,KAAK;AACxB,uBAAI,UAAK,WAAS,CAAC,YAAO,IAAE;AAAC,oBAAK,MAAI,CAAC,YAAO;AAAE,sBAAO,GAAG;AAAG;;AAC7D,oBAAO,GAAG;;IAEd;WAEc,KAAS;YAAK,WAAK,WAAS,CAAC,KAAK;IAAC;;mEApBrC,eAAoB;IAR5B,WAAK,GAAG;IAAI,YAAK;IAEjB,SAAG,GAAG,IAAI,4CAAG;IAEJ,WAAK,GAAG;IACR,WAAK,GAAG,sBAAC,KAAI,KAAI,KAAI,KAAI,KAAI,KAAI,KAAI,KAAI,KAAI;IACnD,aAAO,GAAG;IAEA,sBAAe,GAAf,eAAe;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyB7B;;;;;;IAAM;;;;;;IACH;;;;;;;YAEc,UAAE,QAAG;IAAC;;AAWzB,YAAO,SAAG,GAAG,+CAAM,QAAQ,CAAC,UAAK;IACnC;;;QAVS,mCAAG;IALR,YAAK;IAAC,SAAG;IACN,aAAK;AAKV,QAAI,CAAC,KAAE,GAAG;AACR,gBAAK,GAAG,CAAC;WACJ;AACL,iBAAM,IAAI,sBAAa;;EAE3B;;;;;;;;;;;;;;;;;MAZc,+CAAM;YAAG,AAAI,gBAAM","file":"R_G_component.ddc.js"}');
  // Exports:
  return {
    src__Random_Generator__todo_list_service: src__Random_Generator__todo_list_service,
    src__Random_Generator__R_G_component: src__Random_Generator__R_G_component
  };
});

//# sourceMappingURL=R_G_component.ddc.js.map
