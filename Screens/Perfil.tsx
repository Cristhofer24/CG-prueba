import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Config';
import { getDatabase, ref, onValue } from "firebase/database";
import { FlatList } from 'react-native-gesture-handler';
import Card2 from '../Componente/Card2';

export default function Perfil() {

  const [lista, setlista] = useState([])
  //Leer Datos
  function datos() {

    const starCountRef = ref(db, 'usuarios/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)

      const listaTem: any = Object.keys(data).map((name) => ({
        name, ...data[name]
      }))
      // console.log(listaTem)
      setlista(listaTem)
    });
  }

  useEffect(() => {
    datos()
  }, [])

  return (
    <ImageBackground source={{uri:'https://www.bancodelpacifico.com/BancoPacifico/media/layout-images/social.jpg'}}>
    <FlatList
      data={lista}
      renderItem={({ item }) =>
        <Card2 data={item} />
      }
    />
</ImageBackground>

  )
}

const styles = StyleSheet.create({
  img: {
   
   flex:1

  }
})