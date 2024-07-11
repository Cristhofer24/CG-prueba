import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, set } from "firebase/database";
import { db } from '../Config/Config';
export default function Operacione() {
    const [id, setId] = useState('')
    const [monto, setMonto] = useState('')
    const [operacion, setOperacion] = useState('')
    const [comentario, setComentario] = useState('')
    function transaccion() {
        if (monto > '500') {
            Alert.alert("Alerta", "Está prohibido las transacciones mayores a ese monto ")
            setId('')
            setMonto('')
            setOperacion('')
            setComentario('')

        } else {
            if (monto <= '5') {
                const handleAceptar = () => {
                    console.log('Aceptar');
                    set(ref(db, 'transaccion/' + id), {
                        price: monto,
                        op: operacion,
                        coment: comentario
                    });
                    Alert.alert("¡Exito!", "Transaccion Exitosa");

                };

                const handleCancelar = () => {
                    console.log('Cancelar');
                    setId('')
                    setMonto('')
                    setOperacion('')
                    setComentario('')

                };

                Alert.alert(
                    "Advertencia",
                    "¿Estás seguro de realizar esta transacción?",
                    [
                        {
                            text: "Cancelar",
                            onPress: handleCancelar,
                            style: "cancel"
                        },
                        {
                            text: "Aceptar",
                            onPress: handleAceptar
                        }
                    ],
                    { cancelable: false }
                );

            } else {


                set(ref(db, 'transaccion/' + id), {
                    price: monto,
                    op: operacion,
                    coment: comentario
                });
                Alert.alert("¡Exito!", "Transaccion Exitosa");



            }
        }
    }

    return (
        <View>
            <Text>Operaciones</Text>
            <TextInput placeholder='Id operacion'
                onChangeText={setId}
                value={id} />
            <TextInput placeholder='monto'
                onChangeText={setMonto}
                value={monto} />
            <TextInput placeholder='tipo de operacion'
                onChangeText={setOperacion}
                value={operacion} />
            <TextInput placeholder='tipo comentario'
                onChangeText={setComentario}
                value={comentario} />
            <Button title='Ejecutar' onPress={transaccion} />
        </View>
    )
}

const styles = StyleSheet.create({})