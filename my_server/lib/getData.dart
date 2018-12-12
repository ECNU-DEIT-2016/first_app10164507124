import 'dart:async';
import 'package:sqljocky5/sqljocky.dart';

class GetData {

     static Future<List> getData()async {
      List results;
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

//        await readData(conn);
      Results result = await (await conn
          .execute('SELECT *'
          'FROM student'));
          // .deStream();
      print(result);
      print(result.map((r) => r.byName('name')));
      results = result.toList();
      return results;
    }

    static Future<List> selectStu(id)async {
      var stuList;
      stuList = await getData();
      for(int i=0;i < stuList.length;i++){
        if(stuList[i][0]==id)
          return stuList[i];
      }
    }
}