import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export default props =>
    <Text style={Padrao.title}>{props.about}</Text>