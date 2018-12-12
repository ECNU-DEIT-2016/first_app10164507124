import 'my_server.dart';
import 'dart:math' show Random;
/// This type initializes an application.
///
/// Override methods in this class to set up routes and initialize services like
/// database connections. See http://aqueduct.io/docs/http/channel/.
class MyServerChannel extends ApplicationChannel {

  /// Initialize services in this method.
  ///
  /// Implement this method to initialize services, read values from [options]
  /// and any other initialization required before constructing [entryPoint].
  ///
  /// This method is invoked prior to [entryPoint] being accessed.
  @override
  Future prepare() async {
    logger.onRecord.listen((rec) => print("$rec ${rec.error ?? ""} ${rec.stackTrace ?? ""}"));
  }

  /// Construct the request channel.
  ///
  /// Return an instance of some [Controller] that will be the initial receiver
  /// of all [Request]s.
  ///
  /// This method is invoked after [prepare].
  @override
  Controller get entryPoint {
    final router = Router();

    // Prefer to use `link` instead of `linkFunction`.
    // See: https://aqueduct.io/docs/http/request_controller/
    router
      .route("/users/[:id]").link(()=>MyController());
      ;

    return router;
  }
}

class RGComponent {
  //  int sides = 12, value;                    // 定义实例变量
  //  String toString() => '$value';      // Define a method using shorthand syntax.
  Die die = new Die();
  
  List<String> items = [];
  List<String> names = ["李典康","蔡心蕊","戚晓颖","龙晶毅","唐莉雯","赵世宇","陈瑶","朱子恒","张静雅","郑可欣","周嘉翔"];
  String newTodo = '';

  void add() {
    items.add(newTodo);
    newTodo = '';
  }

  String get(int i){
    return items[i];
  }

  RGComponent() {  
    while(items.length < 10){      
      newTodo = names[die.roll()]; 
      if(!items.contains(newTodo)){items.add(newTodo);}
      newTodo = '';
    }     
  }

  String remove(int index) => items.removeAt(index);
}

class Die {                            // 定义一个类
  static Random shaker = new Random(); // 定义一个类变量
  int sides,num;  
  String value;                  // 定义实例变量

  String toString() => '$num';      // Define a method using shorthand syntax.
  
  Die({int n: 11}) {                   // Define a constructor.
    if (n!=0) {
      sides = n;
    } else {
      throw new ArgumentError(/* */);  // 支持 errors 和 exceptions.
    }
  }

  int roll() {                         // 定义一个实例方法
    return num = shaker.nextInt(sides); // 获取一个随机数。
  }
}

class MyController extends ResourceController {
  List<String> things = [];
  final RDGenerator = RGComponent();

  MyController(){
    int i = 0;
    while(i<10){
      addthings(RDGenerator.get(i));
      i++;
    }
  }

  void addthings(String thing){
    things.add(thing);
  }

  @Operation.get()
  Future<Response> getThings() async {
    return Response.ok(things);
  }

  @Operation.get('id')
  Future<Response> getThing(@Bind.path('id') int id) async {
    if (id < 0 || id >= things.length) {
      return Response.notFound();
    }
    if(things[id]!="周嘉翔")return Response.ok(things[id]);
    else {
      if(id<9)return Response.ok(things[id + 1]);
      else return Response.ok(things[0]);
    }
  }
}