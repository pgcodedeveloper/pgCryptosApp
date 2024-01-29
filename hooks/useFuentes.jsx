import { useFonts } from 'expo-font';
import React from 'react'

const useFuentes = () => {
    const[loaded] = useFonts({
        LatoBlack: require('../src/fonts/Lato-Black.ttf'),
        LatoRegular: require('../src/fonts/Lato-Regular.ttf')
    });

    if(!loaded){
        return null;
    }
    return loaded
}

export default useFuentes
