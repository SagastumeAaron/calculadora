import { useRef, useState } from "react";



//Creamos toda la logica de la calculadora
enum Operadores {
    sumar, restar, multiplicar, dividir, porcentaje
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numeroActual, setNumeroActual] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    //Limpiar todo el numero
    const limpiar = () => {
        setNumeroActual('0');
    }

    //Limpiar todos los datos
    const limpiarTodo = () => {
        setNumeroActual('0');
        setNumeroAnterior('0');
    }

    //Función para hacer validaciones
    const armarNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        if (numeroActual.includes('.') && numeroTexto === '.') return;

        if (numeroActual.startsWith('0') || numeroActual.startsWith('-0')) {

            //Punto decimal
            if (numeroTexto === '.') {
                setNumeroActual(numeroActual + numeroTexto);

                //Evaluar si es otro cero,, y hay un punto
            } else if (numeroTexto === '0' && numeroActual.includes('.')) {
                setNumeroActual(numeroActual + numeroTexto);

                //Evaluar si es diferente de cero, y no tiene un punto
            } else if (numeroTexto !== '0' && !numeroActual.includes('.')) {
                setNumeroActual(numeroTexto);

                //Evitar 0000.0
            } else if (numeroTexto === '0' && !numeroActual.includes('.')) {
                setNumeroActual(numeroActual);

            } else {
                setNumeroActual(numeroActual + numeroTexto)
            }

        } else {
            setNumeroActual(numeroActual + numeroTexto)
        }
    }

    //Convertir positivo o negativo
    const positivoNegativo = () => {
        if (numeroActual.includes('-')) {
            setNumeroActual(numeroActual.replace('-', ''));
        } else {
            setNumeroActual('-' + numeroActual);
        }
    }

    //Borrar un unico numero
    const btnDelete = () => {
        let negativo = '';
        let numeroTemporal = numeroActual;

        if (numeroActual.includes('-')) {
            negativo = '-';
            numeroTemporal = numeroActual.substr(1);
        }

        if (numeroTemporal.length > 1) {
            setNumeroActual(negativo + numeroTemporal.slice(0, -1));
        } else {
            setNumeroActual('0');
        }
    }

    //Enviar al numero anterior
    const cambiarNumAnterior = () => {
        //condicion para que no pase el ultimo punto si es que lleva el numero ejemplo 0220.
        if (numeroActual.endsWith('.')) {
            setNumeroAnterior(numeroActual.slice(0, -1));
        } else {
            setNumeroAnterior(numeroActual);
        }
        setNumeroActual('0');
    }

    //Boton de sumar
    const btnSumar = () => {
        cambiarNumAnterior(); //Llamo a la funcion cambiarNumAnterior
        ultimaOperacion.current = Operadores.sumar;
    }

    //Boton de restar
    const btnRestar = () => {
        cambiarNumAnterior(); //Llamo a la funcion cambiarNumAnterior
        ultimaOperacion.current = Operadores.restar;
    }

    //Boton de multiplicar
    const btnMultiplicar = () => {
        cambiarNumAnterior(); //Llamo a la funcion cambiarNumAnterior
        ultimaOperacion.current = Operadores.multiplicar;
    }

    //Boton de dividir
    const btnDividir = () => {
        cambiarNumAnterior(); //Llamo a la funcion cambiarNumAnterior
        ultimaOperacion.current = Operadores.dividir;
    }

    //Boton de dividir
    const btnPorcentaje = () => {
        cambiarNumAnterior(); //Llamo a la funcion cambiarNumAnterior
        ultimaOperacion.current = Operadores.porcentaje;
    }

    //Realizar los calculos
    const calcular = () => {
        const num1 = Number(numeroActual); //Declaramos una variable y la convertimos a number para poder hacer la operación matematica
        const num2 = Number(numeroAnterior); //Declaramos una variable y la convertimos a number para poder hacer la operación matematica

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumeroActual(`${num1 + num2}`)
                break;

            case Operadores.restar:
                setNumeroActual(`${num2 - num1}`) //Se agregan de manera opuesta para que reconozca los numeros negativos
                break;

            case Operadores.multiplicar:
                setNumeroActual(`${num1 * num2}`)
                break;

            case Operadores.dividir:
                setNumeroActual(`${num2 / num1}`) //Se agregan al reves para que la división se ejecute de manera correcta
                break;

            case Operadores.porcentaje:
                setNumeroActual(`${num2 % num1}`) //Se agregan al reves para que el procentaje se ejecute de manera correcta
                break;
        }

        setNumeroAnterior('0');
    }


    //este return es para indicar las funciones que vamos a enviar a otros lados
    return {
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
    }
}
