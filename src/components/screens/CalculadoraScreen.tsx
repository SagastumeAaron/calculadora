/* eslint-disable prettier/prettier */
import React, { } from 'react'
import { Image, Text, View } from 'react-native'
import { BotonCalc } from '../BotonCalc';
import { styles } from './theme/appTheeme';
import { useCalculadora } from '../../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numeroActual,
        limpiarTodo,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        btnPorcentaje,
        calcular,
    } = useCalculadora(); //de esta manera llamamos todas las funciones de useCalculadora


    return (

        <View style={styles.calculadoraContainer}>

            <Image style={styles.imgStyle} source={require('./theme/img/logo.png')} />
            <Text style={styles.texto}>Calculator</Text>
            {/*Condición para que si el numero pequeño es 0 no se muestre */}
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }

            <Text style={styles.Resultado} numberOfLines={1} adjustsFontSizeToFit>{numeroActual}</Text>

            {/*Fila de botones*/}
            <View style={styles.fila}>
                <BotonCalc texto="C" color="white" action={limpiarTodo} />
                <BotonCalc texto="del" color="white" action={btnDelete} />
                <BotonCalc texto="%" color="white" action={btnPorcentaje} />
                <BotonCalc texto="/" color="white" action={btnDividir} />
            </View>

            {/*Fila de botones*/}
            <View style={styles.fila}>
                <BotonCalc texto="7" action={armarNumero} />
                <BotonCalc texto="8" action={armarNumero} />
                <BotonCalc texto="9" action={armarNumero} />
                <BotonCalc texto="X" color="white" action={btnMultiplicar} />
            </View>

            {/*Fila de botones*/}
            <View style={styles.fila}>
                <BotonCalc texto="4" action={armarNumero} />
                <BotonCalc texto="5" action={armarNumero} />
                <BotonCalc texto="6" action={armarNumero} />
                <BotonCalc texto="-" color="white" action={btnRestar} />
            </View>

            {/*Fila de botones*/}
            <View style={styles.fila}>
                <BotonCalc texto="1" action={armarNumero} />
                <BotonCalc texto="2" action={armarNumero} />
                <BotonCalc texto="3" action={armarNumero} />
                <BotonCalc texto="+" color="white" action={btnSumar} />
            </View>

            {/*Fila de botones*/}
            <View style={styles.fila}>
                <BotonCalc texto="%" color="white" action={btnPorcentaje} />
                <BotonCalc texto="0" action={armarNumero} />
                <BotonCalc texto="." action={armarNumero} />
                <BotonCalc texto="=" color="#009821" action={calcular} />
            </View>
        </View>
    );
}


