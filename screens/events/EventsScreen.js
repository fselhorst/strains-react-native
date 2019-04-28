import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Image, Button} from 'react-native';
import {StrainCard} from "../../components/strain-card/strain-card";
import ApolloProvider from '../../providers/apollo/apollo-provider'
import StrainContainer from '../../container/strain/strain-container'
import {EventCard} from "../../components/event-card/event-card";
import EventContainer from "../../container/event/event-container";

const data = require('../../json/strains.json');
const image = "https://amsterdammarijuanaseeds.com/media/catalog/product/cache/1/thumbnail/450x450/9df78eab33525d08d6e5fb8d27136e95/r/a/rainbow-kush-fem-2_big_1.jpg"

export default class EventsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: "EVENTS",
            headerLeft: (
                <Text
                    onPress={() => { navigation.goBack()}}
                    style={{color:"#fff", fontSize: 18, marginLeft: 8}}
                >Back</Text>
            )
        };
    };
    render() {

        return (
            <ApolloProvider>
                <ScrollView contentContainerStyle={styles.container}>
                    <EventContainer render={(events) => {
                        return events.map( event => {
                            return <EventCard key={event.id} data={event}/>
                        })
                    }}/>
                </ScrollView>
            </ApolloProvider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        width: Dimensions.get('window').width,
    }
})
