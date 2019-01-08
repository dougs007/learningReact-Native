/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Simples from './componentes/Simples'
export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <Simples texto='Flexível!!' />
          </View>
        )
    }
}
    
// Constantes de estilos.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})