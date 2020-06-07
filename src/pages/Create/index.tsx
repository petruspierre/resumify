import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import Button from '../../components/Button';

const Create: React.FC = () => {

  const [title, setTitle] = useState('');
  const [discipline, setDiscipline] = useState<React.ReactText>('Biologia');

  const [step, setStep] = useState('discipline');

  const navigation = useNavigation();

  function handleNavigateBack(){
    if (step === 'discipline') {
      navigation.goBack();
    } else if (step === 'title') {
      setTitle('');
      setStep('discipline');
    } else if (step === 'aditional') {
      setStep('title');
    }
  }

  function handleNextStep(){
    if (step === 'discipline'){
      setStep('title');
    } else if (step === 'title') {
      setStep('aditional');
    }
  }

  if(step !== 'aditional') {
    return (
      <View style={styles.container}>
  
        <TouchableOpacity style={styles.backArrow} onPress={handleNavigateBack}>
          <Feather name="arrow-left" size={24} color="#000"/>
        </TouchableOpacity>
        
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {step === 'discipline'
            ? 'qual a matéria do resumo?'
            : 'qual o título do resumo?'}
            </Text>
        </View>
  
        <View style={styles.nextContainer}>
          {step === 'discipline'
          ? (<View style={styles.pickerContainer}>
            <Picker style={styles.picker} itemStyle={styles.pickerText} onValueChange={(item:React.ReactText) => setDiscipline(item)}>
              <Picker.Item label="Biologia" value="Biologia"/>
              <Picker.Item label="Física" value="Física"/>
              <Picker.Item label="História" value="História"/>
              <Picker.Item label="Matemática" value="Matemática"/>
              <Picker.Item label="Português" value="Português"/>
              <Picker.Item label="Química" value="Química"/>
            </Picker>
          </View>)
          : <TextInput
            style={styles.input}
            placeholder="ex.: segunda guerra mundial"
            value={title}
            onChangeText={setTitle}
          />}
          
          <Button title="próximo" icon="chevron-right" onPress={handleNextStep}/>
        </View>
  
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backArrow} onPress={handleNavigateBack}>
          <Feather name="arrow-left" size={24} color="#000"/>
        </TouchableOpacity>
      
        <KeyboardAwareScrollView style={styles.scrollContainer}>

          <View style={styles.headerAditional}>
            <Text style={styles.headerAditionalText}>adicionar novo(a):</Text>
            <View style={styles.pickerContainer}>
              <Picker style={styles.picker} itemStyle={styles.pickerText}>
                <Picker.Item label="Tópico" value="Tópico"/>
              </Picker>
            </View>
          </View>

          

        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Create;