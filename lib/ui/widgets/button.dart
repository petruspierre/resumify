import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Button extends StatelessWidget {
  final String title;
  final IconData icon;
  final Function onPressed;

  const Button({
    Key? key,
    required this.title,
    required this.icon,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.symmetric(horizontal: 50),
      child: ElevatedButton.icon(
        icon: Icon(icon),
        label: Text(title),
        onPressed: () => onPressed(),
      ),
    );
  }
}
