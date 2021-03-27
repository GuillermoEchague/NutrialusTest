import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import colors from '../utils/colors';

const ImagenHeader = ({resultado}) => {
    const {image} = resultado;
    return(
        <View style={styles.viewForm}>
            <View>
                <Image 
                style={styles.tinyLogo}
                source={{
                   uri: `${image}`,
                   // uri:'http://placeimg.com/640/480'
                  }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewForm:{
        position: 'absolute',
        bottom: -90,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
       
    },
    
    tinyLogo: {
      width: 250,
      height: 130,
      justifyContent: 'center'
    },
    
})


export default ImagenHeader