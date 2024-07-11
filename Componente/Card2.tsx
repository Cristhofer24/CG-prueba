import { Alert, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card2(props: any) {
    // console.log(props.transaccion.);

    // function mensaje(usuario: any) {
    //     Alert.alert("INFORMACIÓN", "El comentario es :")
    // }

    return (

       
            <View style={styles.container}>
                <Text style={styles.txt} > nombre: {props.data.name}</Text>
                <Text style={styles.txt}>Telefono: {props.data}</Text>
                {/* <Text style={styles.txt}>Operacion: {props.data.op}</Text>
                <Text style={styles.txt}>Comentario: {props.data.coment}</Text> */}
            </View>
     

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