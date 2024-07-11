import { Alert, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props: any) {
    // console.log(props.transaccion.);

    function mensaje(transaccion: any) {
        Alert.alert("INFORMACIÓN", "El comentario es :" + transaccion.coment)
    }

    return (

        <TouchableOpacity onPress={() => mensaje(props.data)}>
            <View style={styles.container}>
                <Text style={styles.txt} > id: {props.data.id}</Text>
                <Text style={styles.txt}>Monto: {props.data.price}</Text>
                <Text style={styles.txt}>Operacion: {props.data.op}</Text>
                <Text style={styles.txt}>Comentario: {props.data.coment}</Text>
            </View>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 20
    },
    txt: {
        fontSize: 20
    }
})