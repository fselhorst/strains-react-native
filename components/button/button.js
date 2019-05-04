import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
const buttonStyles = StyleSheet.create({
    container: {
        backgroundColor: "#303030",
        borderRadius: 25,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    outline: {
        backgroundColor: "#fff",
        borderColor: "#303030",
        borderWidth: 2,
    },
    outlineText: {
        color: "#303030",
    },
    text: {
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: "600"
    }
});

export const Button = ({children, onPress, styles, textStyles, mode = "filled"}) => {
    return mode === "filled" ? (
            <TouchableHighlight
                onPress={onPress}
                style={{...buttonStyles.container, ...styles}}
            >
                <Text style={buttonStyles.text}>
                    {children}
                </Text>
            </TouchableHighlight>
        ) : <TouchableHighlight
        onPress={onPress}
        style={{
            ...buttonStyles.container,
            ...buttonStyles.outline,
            ...styles
        }}
    >
        <Text style={[buttonStyles.text, buttonStyles.outlineText, textStyles]}>
            {children}
        </Text>
    </TouchableHighlight>
};
