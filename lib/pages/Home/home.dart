import 'package:flutter/material.dart';
import 'package:resumify/pages/Archive/archive.dart';
import 'package:resumify/pages/Create/create.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image(
              image: AssetImage('logo.png'),
            ),
            Container(
              width: 300,
              margin: EdgeInsets.only(top: 16),
              child: Text(
                'uma nova maneira de criar seus resumos',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 18),
              ),
            ),
            SizedBox(height: 96),
            Column(
              children: [
                Container(
                  width: double.infinity,
                  padding: EdgeInsets.symmetric(horizontal: 60),
                  child: ElevatedButton.icon(
                    icon: Icon(Icons.add),
                    label: Text('criar novo resumo'),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Create()),
                      );
                    },
                  ),
                ),
                SizedBox(
                  height: 4,
                ),
                Container(
                  width: double.infinity,
                  padding: EdgeInsets.symmetric(horizontal: 60),
                  child: ElevatedButton.icon(
                    icon: Icon(Icons.inventory_2_outlined),
                    label: Text('meus resumos'),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Archive()),
                      );
                    },
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
