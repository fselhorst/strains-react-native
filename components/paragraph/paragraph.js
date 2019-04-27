import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const paragraphStyles = StyleSheet.create({
    text: {
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center',
        color: '#303030',
        fontWeight: "400"
    }
});

export const Paragraph = ({
  children,
  styles,
  level,
  align = "left"
}) => {
    let fontSize = level;
    let textAlign = align;

    switch (level) {
        case "xlarge":
            fontSize = 22;
            break;
        case "large":
            fontSize = 20;
            break;
        case "medium":
            fontSize = 18;
            break;
        case "normal":
            fontSize = 16;
            break;
        case "small":
            fontSize = 13;
            break;
        default:
            fontSize = 16;
            break;
    }

    switch (textAlign) {
        case "left":
            textAlign = "left";
            break;
        case "center":
            textAlign = "center";
            break;
        case "right":
            textAlign = "right";
            break;
        default:
            textAlign = "left"
            break;
    }

    return <Text style={
        {...paragraphStyles.text,
            textAlign,
            fontSize,
            ...styles,
        }}
    >
        {children}
    </Text>
};
