import React from 'react'
import { Text } from 'react-native'

// export default function(props){
//     return <Text>{props.texto}</Text>
// }

export default props => {
    return <Text>Arrow: {props.texto}</Text>
}