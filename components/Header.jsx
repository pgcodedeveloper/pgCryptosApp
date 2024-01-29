import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.encabezado}>Criptomonedas</Text>
            <Image 
                source={require('../src/img/cryptomonedas.png')}
                style={styles.imagen}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        backgroundColor: '#5e49e2',
        marginBottom: 15,
        alignItems: 'center',
        gap: 20,
        paddingBottom: 20
    },
    encabezado: {  
        fontFamily: 'LatoBlack',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 25,
        color: 'white',
    },
    imagen: {
        width: '100%',
        height: 150,
    }
})
export default Header
