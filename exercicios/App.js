/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.f20}>App com Hello World!</Text>
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
    },
    f20: {
        fontSize: 40
    }
})