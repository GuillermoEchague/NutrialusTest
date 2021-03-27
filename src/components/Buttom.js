import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from "../utils/colors";

const Buttom = ({guardarConsultar}) => {

    
    const consultarCliente = () => {
        // Consultar la API
        guardarConsultar(true)
    }

return ( 
    <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.buttom} onPress={consultarCliente}>
              <Text style={styles.text}>OBTENER PACIENTE</Text> 
            </TouchableOpacity>
        </View>
);

}


const styles = StyleSheet.create({
    viewFooter:{
        position:"absolute",
        bottom: 0,
        width:"100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height:100,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontWeight: "bold",
        fontSize: 18,
        color: '#fff',
        textAlign:"center",
    },
    buttom:{
        backgroundColor:"black",
        padding: 16,
        borderRadius:20,
        width:"75%",
    },

})

export default Buttom