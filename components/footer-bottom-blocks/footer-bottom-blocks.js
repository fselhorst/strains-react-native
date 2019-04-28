import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { SkewedRectangle } from '../../components/skewed-rectangle/skewed-rectangle';
import {ProgressBar} from "../progress-bar/progress-bar";
import {Paragraph} from "../paragraph/paragraph";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: -100,
        bottom: 0,
        left: -100,
        flex: 1
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

});

export const FooterBottomBlocks = ({meta}) => {
     return (
        <View style={styles.container}>
            <SkewedRectangle style={{height: 120}} color="#FEBD27"/>
            <SkewedRectangle style={{height: 120}} color="#FE672E"/>
            <SkewedRectangle style={{height: 120}} color="#F52E3A"/>
            <SkewedRectangle style={{height: 120, marginBottom: -40}} color="#CF2467"/>
        </View>
    )
}
