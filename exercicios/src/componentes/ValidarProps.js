import React from 'react'
import Proptypes from 'prop-types'
import { Text } from 'react-native'

const validarProps= props =>
    <Text style={{ fontSize: 35 }}>
        { props.label }
        { props.ano + 2000 }
    </Text>

validarProps.defaultProps = {
    label: 'Ano: '
}

validarProps.Proptypes = {
    ano: Proptypes.number.isRequired
}

export default validarProps