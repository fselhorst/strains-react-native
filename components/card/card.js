import React from 'react'
import {Image, ScrollView, View, TouchableHighlight, StyleSheet } from "react-native";
import {Title} from "../title/title";
import {Paragraph} from "../paragraph/paragraph";
import {Button} from "../button/button";

const cardStyles = StyleSheet.create({
    card: {
        borderWidth: 3,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor: '#E7E7E7',
        marginBottom: 30,
        marginRight: 30,
        marginLeft: 30,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        display: 'flex',
        alignItems:'center'
    },
    kind:{
        fontWeight:"600",
        marginTop: 8,
        color:'#CCC',
        textTransform: "uppercase"
    }
});

export const Card = ({handleOnPress, data: {id, name, kind, image: { url, width, height }}}) => {
    return (
        <View style={cardStyles.card}>
            <Title>{name}</Title>
            <Paragraph
                styles={cardStyles.kind}
                align="center"
            >
                {kind}
            </Paragraph>
            <TouchableHighlight onPress={handleOnPress}>
                <Image
                    style={{width: width / 2, height: height / 2}}
                    source={{
                        uri: url
                }}/>
            </TouchableHighlight>
            <Button onPress={handleOnPress}>more details</Button>
        </View>
    )
}
