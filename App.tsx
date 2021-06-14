import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { CalculadoraScreen } from './src/components/screens/CalculadoraScreen';
import { styles } from './src/components/screens/theme/appTheeme';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
