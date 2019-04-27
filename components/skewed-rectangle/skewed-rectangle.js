import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        marginBottom: -44,
    },
    skew: {
        transform: [
            {
                skewX: '-45deg'
            },
            {
                rotate: '-17deg'
            }
        ]
    },

})

export const SkewedRectangle = ({color, title, subTitle, style}) => {
    return <View style={{
        height: 220,
        width: (Dimensions.get('window').width + (Dimensions.get('window').width / 1.5)),
        marginBottom: -44,
        position: 'relative',
        textAlign: 'center',
        ...style
    }}>
        <View style={{
            position: 'absolute',
            zIndex: 4,
            height: 100,
            width: 200,
            top: 90,
            left: Dimensions.get('window').width / 2 - 100,
            bottom: 0,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center'
        }}>
            <Text style={{textAlign: 'center', color: "#fff", fontSize: 28}}>{title}</Text>
            <Text style={{textAlign: 'center', color: "#fff", fontSize: 37, fontWeight:"900"}}>{subTitle}%</Text>
        </View>
        <View style={{
            backgroundColor: color,
            height: 220,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            ...styles.skew,
            ...styles.container
        }}/>
    </View>
}
