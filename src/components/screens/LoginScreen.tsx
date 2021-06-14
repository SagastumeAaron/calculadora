import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native'
import { styles } from './theme/appTheeme';

interface Props extends StackScreenProps<any, any> { };

export const LoginScreen = ({ navigation }: Props) => {

    return (
        <View style ={styles.boton1} >
            {/* <Text>Hola este es el login</Text> */}

            <Button
                title="Ingresar"
                onPress={() => navigation.navigate('CalculadoraScreen')}
            />
        </View>
    )
}
