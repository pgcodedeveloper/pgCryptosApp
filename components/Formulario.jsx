import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import axios from 'axios';

const Formulario = ({consultarAPIMoneda}) => {
    const [moneda,setMoneda] = useState('');
    const [crypto,setCrypto] = useState('');
    const [cryptos,setCryptos] = useState([]);
    const [cargando,setCargando] = useState(true);
    useEffect(() => {
        setCargando(true)
        const consultarApi = async () => {
            const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            setCryptos(response.data?.Data);
            setCargando(false);
        }
        consultarApi();
    },[]);


    const handleCotizar = () =>{
        if([moneda,crypto].includes('')){
           Alert.alert('Error','Todos los campos son obligatorios');
           return; 
        }
        //Consulto la API
        consultarAPIMoneda(crypto,moneda);
    }
    return (
        <View>
            {cargando && <ActivityIndicator size={'large'} color={'#5e49e2'} style={{marginTop: 10, marginBottom: 10}}/> }
            <Text style={styles.label}>Moneda</Text>
            <Picker 
                onValueChange={(itemValue) => setMoneda(itemValue)}
                selectedValue={moneda}
                itemStyle={{height: 120}}
                style={{color: '#5e49e2', fontFamily: 'LatoRegular'}}
            >
                <Picker.Item label='Seleccione ->' value={""}/>
                <Picker.Item label='Dolar de Estados Unidos' value={"USD"}/>
                <Picker.Item label='Peso Uruguayo' value={"UYU"}/>
                <Picker.Item label='Euro' value={"EUR"}/>
                <Picker.Item label='Libra Esterlina' value={"GBP"}/>
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker 
                onValueChange={(itemValue) => setCrypto(itemValue)}
                selectedValue={crypto}
                itemStyle={{height: 120}}
                style={{color: '#5e49e2', fontFamily: 'LatoRegular'}}
            >
                <Picker.Item label='Seleccione ->' value={""}/>
                {cryptos?.map(cripto => (
                    <Picker.Item key={cripto?.CoinInfo?.Id} label={`${cripto?.CoinInfo?.FullName}`} value={`${cripto?.CoinInfo?.Name}`}/>
                ))}
            </Picker>

            <Pressable
                style={styles.btnCotizar}
                onPress={handleCotizar}
            >
                <Text style={styles.textoC}>Cotizar</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    label:{
        fontFamily: 'LatoBlack',
        textTransform: 'uppercase',
        fontSize: 22,
        color: '#ADADAD'
    },
    btnCotizar:{
        padding: 10,
        backgroundColor: '#5e49e2',
        marginTop: 15,
        borderRadius: 10
    },
    textoC:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'LatoBlack',
        textTransform: 'uppercase'
    }
});
export default Formulario

