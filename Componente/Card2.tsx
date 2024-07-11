import { Alert, ImageBackground, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card2(props: any) {


    return (

         
            <View style={styles.container}>
                <Text style={styles.txt} > Nombre: {props.data.name}</Text>
                <Text style={styles.txt}>Telefono: {props.data.phone}</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10
    },
    txt: {
        fontSize: 20
    },
   
})