import React from 'react'
import {Image, ScrollView, View, TouchableHighlight, StyleSheet } from "react-native";
import {Title} from "../title/title";
import {Paragraph} from "../paragraph/paragraph";
import {Button} from "../button/button";
import Icon from "@expo/vector-icons/Entypo";

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

export const StrainCard = ({handleOnPress, data: {id, name, kind, image: { url, width, height }}}) => {
    return (
        <View style={cardStyles.card}>
            <Icon color={"#CCC"} style={{position: 'absolute', right: 16, top: 16}} size={20} name="heart-outlined"/>
            <TouchableHighlight underlayColor={null} onPress={handleOnPress}><Title>{name}</Title></TouchableHighlight>
            <Paragraph
                styles={cardStyles.kind}
                align="center"
            >
                {kind}
            </Paragraph>
            <TouchableHighlight underlayColor={null} onPress={handleOnPress}>
                <Image
                    style={{width: width / 2, height: height / 2}}
                    source={{
                        uri: url
                }}/>
            </TouchableHighlight>
            <Button styles={{margin: 8}} onPress={handleOnPress}>MORE DETAILS</Button>
        </View>
    )
}
