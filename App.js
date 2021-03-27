import React, {useState, useEffect} from 'react';

import { Alert, SafeAreaView, StyleSheet,Text, StatusBar} from 'react-native';

import colors from './src/utils/colors';

import Buttom from "./src/components/Buttom";
import {API_HOST} from "./src/utils/constants";
import Client from "./src/components/Client";
import ImagenHeader from "./src/components/ImagenHeader";

export default function App() {

 const [Consultar, guardarConsultar] = useState(false);
 const [resultado, guardarResultado] = useState({});

 useEffect(() => {
  const consultarCliente = async () =>{
    if(Consultar) {
      const url = `${API_HOST}`;
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
      } catch (error) {
        mostrarAlerta();
      }
    }
  }
  consultarCliente();
 }, [Consultar])

 const mostrarAlerta = () => {
   Alert.alert(
     'Error',
     'No hay resulados, error 404',
     [{text: 'OK'}]

   )
 }

 return(
  <>  
      <StatusBar barStyle='light-content'/>
      <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Test de programación - Nutrialus</Text>
      <ImagenHeader
       resultado={resultado}
      />
      </SafeAreaView>
       <Client
       resultado={resultado}
       /> 
      <Buttom 
      guardarConsultar={guardarConsultar}
      /> 
  </>  
  );
}


const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 170,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
    
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    width:"100%",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position: "absolute",
    zIndex:-1,
  },
  titleApp:{
    fontSize:25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginBottom: 30,
  },
  
  contenido: {
    
    bottom:0,
    position:'absolute',
    justifyContent:'center'
  },
 
});


