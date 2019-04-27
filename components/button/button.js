import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
const buttonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#303030",
        margin: 8,
        borderRadius: 25,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 16,
        paddingBottom: 16,
    },
    text: {
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: "600"
    }
})
export const Button = ({children, onPress, styles}) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={{...buttonStyles.container, ...styles}}
        >
            <Text style={buttonStyles.text}>
                {children}
            </Text>
        </TouchableHighlight>
    )
};
