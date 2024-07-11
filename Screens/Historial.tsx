import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from '../Config/Config';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Componente/Card';

export default function Historial() {

    const [lista, setlista] = useState([])
//Leer Datos
function historial(){
    const starCountRef = ref(db, 'transaccion/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      
        const listaTem : any =Object.keys(data).map((id)=>({
        id,...data[id]       }))
        // console.log(listaTem)
        setlista(listaTem)
    });
}

useEffect(() => {
    historial() 
   }, [])

  return (
    <View>
    <FlatList
        data={lista}
        renderItem={({ item }) =>
            <Card data={item} />
        }
    />
</View>
  )
}

const styles = StyleSheet.create({})