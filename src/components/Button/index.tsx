import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Props {
  title: string;
  icon: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ onPress, title, icon }) => {
  return (
    <RectButton style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonArrow}>
        <Feather name={icon} size={24} color="#FFF" />
      </View>
    </RectButton>
  );
};

export default Button;
