import React, { Component } from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android'){ // para ios basta por 'ios' no lugar do android
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }else{
            Alert.alert('Informação', msg)
        }
    }

    return (
        <Button title='Plataforma?'
            onPress={ () => notificar('Parabéns') }
        />
    )
}
