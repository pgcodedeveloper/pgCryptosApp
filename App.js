import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import React, { useState } from 'react';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import useFuentes from './hooks/useFuentes';

export default function App() {
    const loaded = useFuentes();
    const [cotizacion,setCotizacion] = useState({});
    const [cargando,setCargando] = useState(false);

    const consultarAPIMoneda = async (crypto, moneda) =>{
        setCargando(true);
        //Consultar al API para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
        try {   
            const response = await axios.get(url);
            setCotizacion(response.data?.DISPLAY[crypto][moneda]);
        } catch (error) {

            console.log(error);
        }
        finally{
            setCargando(false);
        }
    }

    if(!loaded){
        return null;
    }

    return (
        <ScrollView>
            <Header />

            <View style={styles.container}>
                <Formulario consultarAPIMoneda={consultarAPIMoneda}/>

                {cargando ? <ActivityIndicator size={'large'} color={'#5e49e2'} style={{marginTop: 40}}/> : (
                    <Cotizacion 
                        cotizacion={cotizacion}
                    />
                )}
            </View>

            <StatusBar style="auto" translucent={false} backgroundColor='#5e49e2'/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: '2.5%'
    }
});
