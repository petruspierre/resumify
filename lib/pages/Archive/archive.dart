import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Archive extends StatelessWidget {
  const Archive({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Meus resumos'),
      ),
      body: Center(
        child: Column(
          children: [
            Text('Archive'),
          ],
        ),
      ),
    );
  }
}
