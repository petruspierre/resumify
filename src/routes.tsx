import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Create from './pages/Create';
import Preview from './pages/Preview';

const Stack = createStackNavigator();

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: {
            backgroundColor: '#F0F0F5',
          }
        }}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Create' component={Create}/>
          <Stack.Screen name='Preview' component={Preview}/>
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

export default src;