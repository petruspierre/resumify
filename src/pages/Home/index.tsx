import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import styles from './styles';

const Home: React.FC = () => {

  const navigation = useNavigation();

  function handleNavigateToCreate(){
    navigation.navigate('Create');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')}/>
        <Text style={styles.slogan}>uma nova maneira de criar seus resumos</Text>
      </View>

      <View style={styles.buttons}>
        <Button title="criar novo resumo" icon="chevron-right" onPress={handleNavigateToCreate}/>
      </View>
    </View>
  )
}

export default Home;