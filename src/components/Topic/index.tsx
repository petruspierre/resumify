import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Props {
  bodyTitle: string;
  bodyAditionalInfoText: string;
  bodyAditionalInfo: string[];
  setBodyTitle: Dispatch<SetStateAction<string>>;
  setBodyAditionalInfoText: Dispatch<SetStateAction<string>>;
  handleAddAditionalInfo: () => void;
}

const Topic: React.FC<Props> = ({ bodyTitle, bodyAditionalInfoText, setBodyTitle, setBodyAditionalInfoText, handleAddAditionalInfo, bodyAditionalInfo }) => {
  return (
    <>
      <Text style={styles.inputTitle}>título do tópico</Text>
      <TextInput 
        style={styles.input}
        value={bodyTitle}
        onChangeText={setBodyTitle}
      />
      <Text style={styles.inputTitle}>informação extra</Text>

      <View style={{ flex: 1, width: '100%' }}>
        <TextInput 
          style={styles.textArea}
          placeholder="opcional"
          value={bodyAditionalInfoText}
          onChangeText={setBodyAditionalInfoText}
          onSubmitEditing={handleAddAditionalInfo}
          returnKeyType="send"
          multiline
        />
        <TouchableOpacity style={{ position: "absolute", top: 8, right: 8 }} onPress={handleAddAditionalInfo}>
          <Feather name="plus" size={24} color="#07070A"/>
        </TouchableOpacity>
      </View>

      {bodyAditionalInfo.length > 0 &&
        <ScrollView 
          nestedScrollEnabled
          style={{ width: '100%', maxHeight: 60, marginTop: 14 }}
          >
          {bodyAditionalInfo.map((item, index) => (
            <Text key={index} style={{ color: '#333', fontSize: 16 }}>{'     ' + item + ';'}</Text>
          ))}
        </ScrollView>
      }
    </>
  )
}

export default Topic;