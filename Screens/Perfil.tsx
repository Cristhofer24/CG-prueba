import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Config';
import { getDatabase, ref, onValue } from "firebase/database";
import { FlatList } from 'react-native-gesture-handler';
import Card2 from '../Componente/Card2';

export default function Perfil() {

    const [lista, setlista] = useState([])
    //Leer Datos
    function historial(){

        const starCountRef = ref(db, 'usuarios/');
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
    <FlatList
    data={lista}
    renderItem={({ item }) =>
        <Card2 data={item} />
    }
/>
  )
}

const styles = StyleSheet.create({})