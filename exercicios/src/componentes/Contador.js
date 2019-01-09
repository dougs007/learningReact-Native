import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        this.props.numero = 10
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text style={{ fontSize: 40 }}>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
