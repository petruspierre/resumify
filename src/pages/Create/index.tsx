import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Linking, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';

import Topic from '../../components/Topic';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

interface Body {
  type: string,
  title: string,
  content: string[]
}

const Create: React.FC = () => {

  const [title, setTitle] = useState('');
  const [discipline, setDiscipline] = useState<React.ReactText>('Biologia');

  const [body, setBody] = useState<Body[]>([]);
  const [type, setType] = useState<React.ReactText>('topic');
  const [bodyTitle, setBodyTitle] = useState('');
  const [bodyAditionalInfoText, setBodyAditionalInfoText] = useState('');
  const [bodyAditionalInfo, setBodyAditionalInfo] = useState<string[]>([]);

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
      if(!title) {
        Alert.alert('ooops...', 'preencha o campo de título');
        return;
      }
      setStep('aditional');
    }
  }

  function handleAddBody(){

    if(type === 'topic'){
      if(!bodyTitle) {
        Alert.alert('ooops...', 'preencha o campo de título');
        return;
      }
  
      const data = {
        type: type as string,
        title: bodyTitle,
        content: bodyAditionalInfo
      }
  
      setBody([...body, data]);
      setBodyTitle('');
      setBodyAditionalInfo([]);
    } else if(type === 'paragraph') {
      if(!bodyAditionalInfoText) {
        Alert.alert('ooops...', 'preencha o campo de parágrafo');
        return;
      }

      const data = {
        type: type as string,
        title: '',
        content: [bodyAditionalInfoText]
      }

      setBody([...body, data]);
      setBodyTitle('');
      setBodyAditionalInfoText('');
    }

  }

  function handleAddAditionalInfo(){
    if(!bodyAditionalInfoText) {
      Alert.alert('ooops...', 'preencha o campo antes de adicionar!');
    }

    setBodyAditionalInfo([...bodyAditionalInfo, bodyAditionalInfoText]);
    setBodyAditionalInfoText('');
  }

  async function handleFinish(){
    try {
      const data = {
        discipline,
        title,
        body
      }

      const response = await api.post('/pdf', data);

      const url = (response.data.finalPath);

      Linking.openURL(url);

    } catch(err) {
      Alert.alert('ooops...', 'ocorreu um erro, tente novamente');
    }
  }

  if(step === 'discipline' || step === 'title') {
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
            <Picker 
              style={styles.picker} 
              itemStyle={styles.pickerText} 
              onValueChange={(item:React.ReactText) => setDiscipline(item)}
              selectedValue={discipline}>
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
        <TouchableOpacity style={styles.eye} onPress={handleNavigateBack}>
          <Feather name="eye" size={24} color="#000"/>
        </TouchableOpacity>
      
        <KeyboardAwareScrollView nestedScrollEnabled style={styles.scrollContainer} contentContainerStyle={{flex: 1}}>

          <View style={styles.headerAditional}>
            <Text style={styles.headerAditionalText}>adicionar novo(a):</Text>
            <View style={styles.pickerContainer}>
              <Picker 
                style={styles.picker} 
                itemStyle={styles.pickerText} 
                onValueChange={(item:React.ReactText) => setType(item)}
                selectedValue={type}>
                <Picker.Item label="Tópico" value="topic"/>
                <Picker.Item label="Parágrafo" value="paragraph"/>
              </Picker>
            </View>
          </View>

          <View style={styles.mainAditionalContainer}>

            {type === 'topic' && 
              <Topic 
                bodyTitle={bodyTitle} 
                bodyAditionalInfoText={bodyAditionalInfoText}
                bodyAditionalInfo={bodyAditionalInfo}
                setBodyTitle={setBodyTitle}
                setBodyAditionalInfoText={setBodyAditionalInfoText}
                handleAddAditionalInfo={handleAddAditionalInfo}
              />
            }

            {type === 'paragraph' &&
              <Paragraph
                bodyAditionalInfoText={bodyAditionalInfoText}
                setBodyAditionalInfoText={setBodyAditionalInfoText}
                handleAddBody={handleAddBody}
              />
            }
              
          </View>

          <View style={styles.footerAditional}>
            <RectButton style={styles.addButton} onPress={handleAddBody}>
              <Feather name="plus" size={24} color="#fff" />
            </RectButton>
            <View style={styles.finishButton}>
              <Button title="finalizar" icon="chevron-right" onPress={handleFinish}/>
            </View>
          </View>

        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Create;