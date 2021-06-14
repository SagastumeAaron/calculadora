import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './screens/theme/appTheeme'

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, color = '#ffffff', ancho = false, action }: Props) => {
    return (

        <TouchableOpacity onPress={() => action(texto)}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === 'white') ? 'green' : '#A7A7A7'
                }}>{texto}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
