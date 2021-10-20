import 'package:flutter/material.dart';
import 'package:resumify/pages/Archive/archive.dart';
import 'package:resumify/pages/Create/create.dart';
import 'package:resumify/ui/widgets/button.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  _navigateToScreen(BuildContext context, StatelessWidget screen) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => screen.build(context)),
    );
  }

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
                Button(
                    title: 'criar novo resumo',
                    icon: Icons.add,
                    onPressed: () {
                      _navigateToScreen(context, Create());
                    }),
                SizedBox(
                  height: 4,
                ),
                Button(
                    title: 'meus resumos',
                    icon: Icons.inventory_2_outlined,
                    onPressed: () {
                      _navigateToScreen(context, Archive());
                    }),
              ],
            )
          ],
        ),
      ),
    );
  }
}
