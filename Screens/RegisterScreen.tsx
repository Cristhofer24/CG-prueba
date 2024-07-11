import {Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Config/Config';
import { ref, set } from "firebase/database";

export default function RegisterScreen({navigation}:any) {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')

//registro
function registro(){

  createUserWithEmailAndPassword(auth, correo, clave)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigation.navigate('Login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    let titulo=""
    let detalle=""
    switch (errorCode) {
      case "auth/missing-email":
          titulo="Correo Invalido"
          detalle="Error de correo electronico, revise sus credenciales"
        
        break;
    case "auth/missing-password":
      titulo="Contraseña incorrecta"
          detalle="Error de contraseña, revise sus credenciales"
     break;
      default:
            titulo="Error de Ingreso"
          detalle="revise sus credenciales"
        break;
    }    
    Alert.alert(titulo,detalle);

    // ..
  });

  set(ref(db, 'usuarios/' + id), {
    name:nombre,
    email:correo,
    phone:telefono,
    psw:clave
  
 });
 Alert.alert("¡Exito!","Usuario Guardado exitosamente")  
  
}
  return (
    <View style={styles.container}>

    <Text style={styles.title}>Registrate</Text>
    <TextInput placeholder='Ingrese cedula' style={styles.input}
    onChangeText={(texto)=>(setId(texto))}
     
    /> 
    <TextInput placeholder='Ingrese nombre' style={styles.input}
    onChangeText={(texto)=>(setNombre(texto))}
     
    /> 

<TextInput placeholder='Ingrese Telefono' style={styles.input}
    onChangeText={(texto)=>(setTelefono(texto))}
    /> 

    <TextInput placeholder='Ingrese correo' style={styles.input}
    onChangeText={(texto)=>(setCorreo(texto))}
      keyboardType='email-address'
     
    /> 

    <TextInput placeholder='Ingrese contraseña' style={styles.input}
        onChangeText={(texto)=>(setClave(texto))}
      
    />
     
   <TouchableOpacity style={styles.btn} onPress={()=>registro()}>
      <Text style={styles.btnTxt}>Registrarse</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.btn1} onPress={()=>navigation.navigate('Login')}>
      <Text style={styles.btnTxt}>Iniciar sesion</Text>
   </TouchableOpacity>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green',
      marginBottom:5,
      width:150,
      height:45,
  },
  btn1:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    width:150,
    height:45,
},
  btnTxt:{
color:'white'
  },
  input:{
    backgroundColor:'white',
    width:200,
    height:50,
    marginBottom:8,
    padding:8
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:10
  }
});