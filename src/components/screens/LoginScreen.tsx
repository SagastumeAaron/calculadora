import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Image, Text, TextInput, View } from 'react-native'
import { styles } from './theme/appTheeme';

interface Props extends StackScreenProps<any, any> { };

export const LoginScreen = ({ navigation }: Props) => {

    return (

        <View>
            <View style={styles.boton1}>
                <Image style={styles.imgStyle} source={require('./theme/img/logo.png')} />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su correo"
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}

                    secureTextEntry={true}
                    placeholder="Ingrese su contraseña"
                    keyboardType="default"
                />
            </View>
            <View style={styles.boton1} >
                <Button
                    title="Ingresar"
                    onPress={() => navigation.navigate('CalculadoraScreen')}
                />
            </View>
        </View>

    )
}
