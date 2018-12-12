import 'dart:async';
import 'package:sqljocky5/sqljocky.dart';

/// Drops the tables if they already exist
Future<void> dropTables(MySqlConnection conn) async {
  print("Dropping tables ...");
  await conn.execute("DROP TABLE IF EXISTS pets, student");
  print("Dropped tables!");
}

Future<void> createTables(MySqlConnection conn) async {
  print("Creating tables ...");
  await conn.execute('CREATE TABLE student (id INTEGER NOT NULL auto_increment, '
      'name VARCHAR(255), '
      'number VARCHAR(255), '
      'PRIMARY KEY (id))');
  // await conn.execute('CREATE TABLE pets (id INTEGER NOT NULL auto_increment, '
  //     'name VARCHAR(255), '
  //     'species TEXT, '
  //     'owner_id INTEGER, '
  //     'PRIMARY KEY (id),'
  //     'FOREIGN KEY (owner_id) REFERENCES people (id))');
  print("Created table!");
}

Future<void> insertRows(MySqlConnection conn) async {
  print("Inserting rows ...");
  List<Results> r1 =
      await conn.preparedMulti("INSERT INTO student 	(number,name)  VALUES(?, ?)", [
    ["10164507101","李典康"],
    ["10164507102","蔡心蕊"],
    ["10164507103","龙晶毅"],
    ["10164507104","唐莉雯"],
    ["10164507105","郑可欣"],
    ["10164507106","张静雅"],
    ["10164507107","吴松二"],
    ["10164507108","陈瑶"],
    ["10164507109","朱子恒"],
    ["10164507124","周嘉翔"],
    ["10164507111","赵世宇"],
    ["10164507112","戚晓颖"]
  ]);

  print("student table insert ids: " + r1.map((r) => r.insertId).toString());
  // List<Results> r2 = await conn.preparedMulti(
  //     "INSERT INTO pets (name, species, owner_id) VALUES (?, ?, ?)", [
  //   ["Rover", "Dog", 1],
  //   ["Daisy", "Cow", 2],
  //   ["Spot", "Dog", 2]
  // ]);
  // print("Pet table insert ids: " + r2.map((r) => r.insertId).toString());
  // print("Rows inserted!");
}

// Future<void> readData(MySqlConnection conn) async {
//   Results result =
//       await conn.execute('SELECT p.id, p.name, p.age, t.name AS pet, t.species '
//           'FROM people p '
//           'LEFT JOIN pets t ON t.owner_id = p.id');
//   print(result);
//   print(result.map((r) => r.byName('name')));
// }

main() async {
  var s = ConnectionSettings(
    user: "root",
    password: "123456",
    host: "localhost",
    port: 3306,
    db: "example",
  );

  // create a connection
  print("Opening connection ...");
  var conn = await MySqlConnection.connect(s);
  print("Opened connection!");

  await dropTables(conn);
  await createTables(conn);
  await insertRows(conn);
  // await readData(conn);

  await conn.close();
}