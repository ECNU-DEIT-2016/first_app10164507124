import 'package:angular/angular.dart';
import 'src/todo_list/todo_list_component.dart';
import 'src/todo_list/button_component.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [TodoListComponent,ButtonComponent],
  // TODO: Remove MaterialIconComponent from directives.
  // (Blocked on https://github.com/dart-lang/angular_components/issues/145.)
  )
class AppComponent {  }