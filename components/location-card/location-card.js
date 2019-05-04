import React from 'react'
import {Image, Text, ScrollView, View,Linking, Platform, TouchableHighlight, Dimensions, StyleSheet } from "react-native";
import {Title} from "../title/title";
import Icon from '@expo/vector-icons/Entypo'
import ReadMoreBlock from "../read-more-block/read-more-block";

const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 30,
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        elevation: 1
    },
    cardContainerTop: {
        display: 'flex',
        height: 200,
        overflow: "hidden",
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000"
    },
    cardContainerBottom: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        display:'flex',
        alignItems:'flex-start'
    },
    buttonContainer: {
        backgroundColor: "purple",
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 81,
        padding: 30,
        justifyContent: 'space-between'
    },
    kind:{
        fontWeight:"600",
        marginTop: 8,
        color:'#CCC',
        textTransform: "uppercase"
    }
});

const readMoreStyles = StyleSheet.create({
    container: {
        height: 80,
    }
});

export const IconAndText = ({name, text, textStyle, size, containerStyles}) => {
    const IconAndTextStyles = StyleSheet.create({
        imageContainer: {
            display: 'flex',
            flexDirection:'row',
            flexWrap: 'wrap',
        },
        text: {
            color: "#303030",
        }
    });

    return (
        <View style={{
            ...IconAndTextStyles.container,
            ...containerStyles
        }}>
            <View style={IconAndTextStyles.innerContainer}>
                <View style={IconAndTextStyles.imageContainer}>
                    <Icon style={{width: size}} name={name} size={size} />
                    <Text style={[IconAndTextStyles.text, textStyle]}>{text}</Text>
                </View>
            </View>
        </View>
    )
};

export const LocationCard = ({data: {id, name, address, description, lat, lng, image: {url}}}) => {
    // makes the maps url
    // const lat = 52.366196
    // const lng = 4.891598
    // const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    // const latLng = `${lat},${lng}`;
    // const label = `Hunters Bar - ${name}`;

    return (
        <View style={cardStyles.card}>
            <View style={cardStyles.cardContainerTop}>
                <Image source={{uri: url}} style={{
                    width: Dimensions.get('window').width - 60,
                    height: 250,
                    opacity: 0.8
                }} />
                <Title styles={{
                    position:'absolute',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 22,
                    fontWeight: "600",
                    letterSpacing: 1,
                    shadowOffset:{  width: 0,  height: 0,  },
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    elevation: 3,
                    textShadowColor: "red",
                    textShadowOffset: { width: 0, height: 0},
                    shadowRadius: 5
                }}
                >
                    {name}
                </Title>
            </View>
            <View style={cardStyles.cardContainerBottom}>
                <IconAndText textStyle={{marginLeft: 8, fontSize: 16, width: Dimensions.get('window').width - 170}} size={20} name="location-pin" text={address} />
                <Text style={{fontSize: 16, color: "#303030", lineHeight: 20, marginTop: 30}}>{description}</Text>
            </View>
        </View>
    )
};
