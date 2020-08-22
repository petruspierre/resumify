import React, { Dispatch, SetStateAction } from 'react';
import { Text, TextInput } from 'react-native';

import styles from './styles';

interface Props {
  bodyTitle: string;
  setBodyTitle: Dispatch<SetStateAction<string>>;
}

const Topic: React.FC<Props> = ({ bodyTitle, setBodyTitle }) => {
  return (
    <>
      <Text style={styles.inputTitle}>subtítulo</Text>
      <TextInput
        style={styles.input}
        value={bodyTitle}
        onChangeText={setBodyTitle}
      />
    </>
  );
};

export default Topic;
