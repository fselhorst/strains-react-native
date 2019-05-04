import React from 'react'
import {Image, Text, ScrollView, View,Linking, Platform, TouchableHighlight, Dimensions, StyleSheet } from "react-native";
import {Title} from "../title/title";
import moment from 'moment';
import Icon from '@expo/vector-icons/Entypo'
import {Paragraph} from "../paragraph/paragraph";

const mapsIcon = require('./maps-min.png');


const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 30,
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        elevation: 2,
        marginTop: 2
    },
    cardContainerTop: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        display: 'flex',
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

export const IconAndText = ({url, text, imageStyles, containerStyles}) => {
    const IconAndTextStyles = StyleSheet.create({
        imageContainer: {
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            marginLeft: 16
        }
    });

    return (
        <View style={{
            ...IconAndTextStyles.container,
            ...containerStyles
        }}>
            <View style={IconAndTextStyles.innerContainer}>
                <View style={IconAndTextStyles.imageContainer}>
                    <Image style={imageStyles} source={url} />
                    <Text style={IconAndTextStyles.text}>{text}</Text>
                </View>
            </View>
        </View>
    )
};

export const EventCard = ({data: {id, name, price, eventLocation, startDate = new Date(), endDate = new Date(), date, mapsUrl}}) => {
    // makes the maps url
    const lat = 52.366196
    const lng = 4.891598
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = `Hunters Bar - ${name}`;


    const sDate =  moment(startDate).format('DD MMMM, HH:mm');
    const eDate =  moment(endDate).format('HH:mm');

    return (
        <View style={cardStyles.card}>


            <View style={cardStyles.cardContainerTop}>
                <Title styles={{
                    fontSize: 22,
                    fontWeight: "600",
                    letterSpacing: 1
                }}
                >
                    {name}
                </Title>
                <View style={{marginTop: 16, marginBottom: 16}}>
                    <Text onPress={() => Linking.openURL(mapsUrl)} style={{
                        fontSize: 13,
                        color: "#BFBFBF",
                        letterSpacing: 0,
                        fontWeight: "700",
                        marginBottom: 4
                    }}>LOCATION</Text>
                    <Paragraph onPress={() => Linking.openURL(mapsUrl)} >{eventLocation}</Paragraph>
                </View>
                <View style={{marginTop: 8, marginBottom: 16}}>
                    <Paragraph styles={{
                        fontSize: 13,
                        color: "#BFBFBF",
                        letterSpacing: 0,
                        fontWeight: "700",
                        marginBottom: 4
                    }}>DATE</Paragraph>
                    <Paragraph>{`${sDate} - ${eDate}`}</Paragraph>
                </View>
                <View style={{marginTop: 8}}>
                    <Paragraph styles={{
                        fontSize: 13,
                        color: "#BFBFBF",
                        letterSpacing: 0,
                        fontWeight: "700",
                        marginBottom: 4
                    }}>TICKET PRICE</Paragraph>
                    <Paragraph>€{price}</Paragraph>
                </View>
            </View>


            <View style={cardStyles.buttonContainer}>
                <TouchableHighlight
                    onPress={() => Linking.openURL(mapsUrl)}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <React.Fragment>
                        <Icon size={19} color="#fff" style={{marginRight: 8,}} name="credit-card"/>
                        <Text style={{fontWeight: "600", color: 'white'}}>BUY TICKET</Text>
                    </React.Fragment>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        if(Platform.OS === 'ios') {
                            Linking.openURL(`calshow:`); //opens cal to April 1 2020

                        } else if(Platform.OS === 'android') {
                            Linking.openURL('content://com.android.calendar/time/');
                        }
                    }}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <React.Fragment>
                        <Icon size={19} color="#fff" style={{marginRight: 8,}} name="calendar"/>
                        <Text style={{fontWeight: "600", color: 'white'}}>CALENDAR</Text>
                    </React.Fragment>
                </TouchableHighlight>
            </View>


        </View>
    )
};
