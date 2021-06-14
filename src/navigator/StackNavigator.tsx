import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CalculadoraScreen } from '../components/screens/CalculadoraScreen';
import { LoginScreen } from '../components/screens/LoginScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CalculadoraScreen" component={CalculadoraScreen} />
            {/* <Stack.Screen name="pagina3Screen" component={pagina3Screen} /> */}
        </Stack.Navigator>
    );
}