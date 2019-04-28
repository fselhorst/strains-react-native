import React from 'react'
import {Image, Text, ScrollView, View,Linking, Platform, TouchableHighlight, Dimensions, StyleSheet } from "react-native";
import {Title} from "../title/title";
import moment from 'moment';
import {Button} from "../button/button";

const locationIcon = require('./location-min.png');
const calendarIcon = require('./calendar-min.png');
const ticketIcon = require('./ticket-min.png');
const mapsIcon = require('./maps-min.png');


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
        alignItems:'flex-start'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
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
}

export const EventCard = ({data: {id, name, price, location, startDate = new Date(), endDate = new Date(), date, mapsUrl}}) => {
    // makes the maps url
    const lat = 52.366196
    const lng = 4.891598
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = `Hunters Bar - ${name}`;

    const test_url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });

    const sDate =  moment(startDate).format('YYYY/MM/DD, HH:mm')
    const eDate =  moment(endDate).format('HH:mm')

    return (
        <View style={cardStyles.card}>
            <Title styles={{
                fontSize: 28,
                fontWeight: "700",
                letterSpacing: 1
            }}
            >
                {name}
            </Title>
            <IconAndText containerStyles={{marginTop: 8, marginBottom: 16, }} imageStyles={{width:16, height: 20}} text={location} url={locationIcon} />
            <IconAndText containerStyles={{marginBottom: 16,}} imageStyles={{ width:20, height: 20}} text={`${sDate} - ${eDate}`} url={calendarIcon} />
            <IconAndText containerStyles={{marginBottom: 16,}} imageStyles={{ width:20, height: 14}} text={`€ ${price},- per ticket`} url={ticketIcon} />
            <View style={cardStyles.buttonContainer}>
                <Button onPress={() => Linking.openURL(mapsUrl)}
                        styles={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection:'row',
                            justifyContent:'center',
                            marginTop: 16,
                            marginBottom: 16,
                            width: Dimensions.get('window').width - 120
                }}>
                    <Image style={{width: 14, height: 14 }} source={mapsIcon}/> MAPS
                </Button>
                <Button
                    onPress={() => {
                        if(Platform.OS === 'ios') {
                            Linking.openURL(`calshow:`); //opens cal to April 1 2020

                        } else if(Platform.OS === 'android') {
                            Linking.openURL('content://com.android.calendar/time/');
                        }
                    }}
                    styles={{width: Dimensions.get('window').width - 120}}
                    mode="outline">ADD TO CALENDAR</Button>
            </View>
        </View>
    )
}
