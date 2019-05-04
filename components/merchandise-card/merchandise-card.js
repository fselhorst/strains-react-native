import React from 'react'
import { Image, Text, ScrollView, View, TouchableHighlight, Dimensions, StyleSheet } from "react-native";
import Icon from '@expo/vector-icons/Entypo'
import {Paragraph} from "../paragraph/paragraph";


const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '50%',
    },
});

export const MerchandiseCard = ({data: {id, name, price, image: {url }}}) => {
    return (
        <View style={cardStyles.card}>
            <Image style={{width: 120, height: 120}} source={{uri: url }}/>
            <Paragraph styles={{textAlign:"center", fontSize: 16, fontWeight: "600", marginBottom: 8, marginTop: 16}}>{name}</Paragraph>
            <Paragraph styles={{textAlign:"center", }}>€{price}</Paragraph>
        </View>
    )
};
