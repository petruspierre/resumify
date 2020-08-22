import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

interface Params {
  body: {
    type: string;
    title: string;
    content: string[];
  }[];
}

interface CardProps {
  data: {
    type: string;
    title: string;
    content: string[];
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>
        {data.type === 'topic'
          ? 'tópico'
          : data.type === 'subtitle'
          ? 'subtítulo'
          : 'parágrafo'}
      </Text>
      {data.type === 'topic' && <Text style={styles.title}>{data.title}</Text>}
      {data.content.map((value, index) => (
        <Text style={styles.content} key={index}>
          {`   ${value}`}
        </Text>
      ))}
    </View>
  );
};

const Preview: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function handleNavigateBack() {
    navigation.goBack();
  }

  const routeParams = route.params as Params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={handleNavigateBack}>
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <ScrollView
        style={{ flex: 1, width: '100%', marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 16 }}
      >
        {routeParams.body.map((value, index) => (
          <Card key={index} data={value} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Preview;
