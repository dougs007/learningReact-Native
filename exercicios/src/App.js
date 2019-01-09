import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Sobre from './componentes/Sobre'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
                <Sobre about='App with React Native!'></Sobre>
				<Simples texto='Flexível!!!!' />
				<ParImpar numero={150} />
                <Inverter texto='React Native !' />
                <MegaSena numeros={10} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    }
})