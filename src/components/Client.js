import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Client = ({resultado}) => {

    const {name, email, phone, image} = resultado;

   if(!name) return null;

return(
    <View  style={styles.Cliente}>
       <View>
        <Text  style={styles.title}>DATOS DEL PACIENTE</Text>
       </View>
        <View>
        <Text style={styles.texto}>Nombre: </Text>
        <Text style={styles.Paciente}>{name}</Text>
        <Text style={styles.texto}>Email:</Text>
        <Text style={styles.Paciente}>{email}</Text>
        <Text style={styles.texto}>Teléfono:</Text>
        <Text style={styles.Paciente}>{phone}</Text>
        <Text style={styles.texto}>Imágen:</Text>
        <Text style={styles.Paciente}>{image}</Text>
        </View>
    </View>
);

}

const styles = StyleSheet.create({
    Cliente:{
        marginBottom:10,
        bottom: -110,
    },
    texto:{
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
        marginRight:0,
        fontWeight: 'bold',
    },

    Paciente: {
        color: 'black',
        fontSize: 19,
        textAlign: 'center',
        marginRight:0,  
    },

    title: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginRight:0,
        fontWeight: 'bold',
        marginBottom:10,
    },
    image:{
        flexDirection: "row",
    },

})

export default Client;