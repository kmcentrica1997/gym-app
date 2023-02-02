import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {Profile, Home} from './types';
import React from 'react';
import HomeScreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name={Home} component={HomeScreen} />
      <Stack.Screen name={Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
