import React, { Dispatch, SetStateAction } from 'react';
import { TextInput, Text } from 'react-native';

import styles from './styles';

interface Props {
  bodyAditionalInfoText: string;
  setBodyAditionalInfoText: Dispatch<SetStateAction<string>>;
  handleAddBody: () => void;
}

const Paragraph: React.FC<Props> = ({ bodyAditionalInfoText, setBodyAditionalInfoText, handleAddBody }) => {
  return (
    <>
      <Text style={styles.inputTitle}>conteúdo do parágrado</Text>
      <TextInput 
        style={styles.textArea}
        placeholder="opcional"
        value={bodyAditionalInfoText}
        onChangeText={setBodyAditionalInfoText}
        onSubmitEditing={handleAddBody}
        returnKeyType="send"
        multiline
      />
    </>
  );
}

export default Paragraph;