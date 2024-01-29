import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cotizacion = ({cotizacion}) => {

    if(Object.keys(cotizacion).length === 0 ) return null;

    const { PRICE,HIGHDAY,LOWDAY, CHANGEPCT24HOUR,LASTUPDATE} = cotizacion;
    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto,styles.precio]}>
                <Text style={styles.span}>{PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio más alto del día:  
                <Text style={styles.span}> {HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio más bajo del día:  
                <Text style={styles.span}> {LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variación últimas 24 horas:  
                <Text style={styles.span}> {CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.texto}>Última actualización:  
                <Text style={styles.span}> {LASTUPDATE}</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    resultado:{
        backgroundColor: '#5e49e2',
        padding: 20,
        marginTop: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    texto:{
        color: 'white',
        fontFamily: 'LatoRegular',
        fontSize: 18,
        marginBottom: 10
    },
    precio:{
        fontSize: 38,
        color: '#FAA44C'
    },
    span:{
        fontFamily: 'LatoBlack'
    }
});
export default Cotizacion
