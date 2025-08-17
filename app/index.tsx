import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export default function AppIndex() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
