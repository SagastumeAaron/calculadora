import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { CalculadoraScreen } from './src/components/screens/CalculadoraScreen';
import { styles } from './src/components/screens/theme/appTheeme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black" //Este es para agregar el bar en Android
        barStyle='light-content' //Este es para agregar el bar en iPhone del color deseado
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
