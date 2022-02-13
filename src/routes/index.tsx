import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Next from '../screens/Next';

export default function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Next"
          component={Next}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  )
}