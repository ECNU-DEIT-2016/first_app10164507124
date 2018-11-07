import 'dart:math' show Random;
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'todo_list_service.dart';

@Component(
  selector: 'Rand-G',
  styleUrls: ['R_G_component.css'],
  templateUrl: 'R_G_component.html',
  directives: [
    MaterialCheckboxComponent,
    MaterialFabComponent,
    MaterialIconComponent,
    materialInputDirectives,
    NgFor,
    NgIf,
  ],
  providers: [const ClassProvider(TodoListService)],
)
class RGComponent {
  final TodoListService todoListService;
  int sides = 12, value;                    // 定义实例变量
  String toString() => '$value';      // Define a method using shorthand syntax.
  Die die = new Die();
  
  List<String> items = [];
  List<String> names = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
  String newTodo = '';

  RGComponent(this.todoListService);

  void add() {
    items.add(newTodo);
    newTodo = '';
  }

  void main() {  
    while(items.length < 10){      
      newTodo = names[die.roll()]; 
      if(!items.contains(newTodo)){items.add(newTodo);newTodo = '';break;}
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
  
  Die({int n: 10}) {                   // Define a constructor.
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