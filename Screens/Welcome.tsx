import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome({navigation}:any) {
  return (
    <View style={styles.container}>
      <Button title='Ingresar' onPress={()=>navigation.navigate('Login')}/>
      <Button title='Registrate' onPress={()=>navigation.navigate('Registro')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  