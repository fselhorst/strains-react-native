import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const titleStyles = StyleSheet.create({
    text: {
        fontSize: 24,
        letterSpacing: 1,
        textAlign: 'center',
        color: '#303030',
        fontWeight: "600"
    }
})

export const Title = ({children, styles}) => {
    return <Text style={{...titleStyles.text, ...styles}}>
            {children}
        </Text>
};
