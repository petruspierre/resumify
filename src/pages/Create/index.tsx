import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';

import styles from './styles';

import Button from '../../components/Button';

const Create: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name="arrow-left" size={20} style={styles.backArrow}/>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>qual a matéria do resumo?</Text>
      </View>
      <View style={styles.nextContainer}>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker} itemStyle={styles.pickerText}>
            <Picker.Item label="Biologia" value="HIST"/>
            <Picker.Item label="Física" value="HIST"/>
            <Picker.Item label="História" value="HIST"/>
            <Picker.Item label="Matemática" value="HIST"/>
            <Picker.Item label="Português" value="HIST"/>
            <Picker.Item label="Química" value="HIST"/>
          </Picker>
        </View>
        <Button title="próximo" icon="chevron-right" onPress={() => {}}/>
      </View>
    </View>
  );
}

export default Create;