import { StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    fondo: {
        flex: 1, //para que tome color en toda la pantalla
        backgroundColor: 'white',
        paddingHorizontal: 0,
    },

    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 0,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },

    Resultado: {
        color: "white",
        fontSize: 60,
        textAlign: 'right',
        backgroundColor: '#0072B1',
        marginBottom: 10,
    },

    resultadoPequeno: {
        color: 'black',
        fontSize: 30,
        textAlign: 'right'
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },

    botonTexto: {
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        padding: 10,
        fontWeight: '300'
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    imgStyle: {
        width: '37%',
        marginHorizontal: '30%',
    },

    texto: {
        fontSize: 30,
        marginVertical: '10%',
        textAlign: 'center',
        color: 'green',
        marginTop: '-0.1%',
        fontWeight: 'bold',
    }

});