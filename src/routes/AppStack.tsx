import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  const config = { headerShown: false };
  
  return(
    <NavigationContainer>
      <Navigator screenOptions={config}>
        <Screen name="Landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  );
}