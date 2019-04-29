import React from 'react';
import {StyleSheet,  Text, View, ScrollView, TouchableHighlight,Dimensions, Image, Button} from 'react-native';
import {StrainCard} from "../../components/strain-card/strain-card";
import ApolloProvider from '../../providers/apollo/apollo-provider'
import StrainContainer from '../../container/strain/strain-container'
import {EventCard} from "../../components/event-card/event-card";
import EventContainer from "../../container/event/event-container";
import Icon from "@expo/vector-icons/Entypo";

const data = require('../../json/strains.json');
const image = "https://amsterdammarijuanaseeds.com/media/catalog/product/cache/1/thumbnail/450x450/9df78eab33525d08d6e5fb8d27136e95/r/a/rainbow-kush-fem-2_big_1.jpg"

export default class EventsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: "EVENTS",
            headerLeft: (
                <TouchableHighlight style={{flexDirection: 'row'}}>
                    <React.Fragment>
                    <Icon style={{color: "#fff"}} name="chevron-left"  size={20}/>
                    <Text
                        onPress={() => { navigation.goBack()}}
                        style={{color:"#fff", fontSize: 18}}
                    >
                        Back
                    </Text>
                    </React.Fragment>
                </TouchableHighlight>
            )
        };
    };
    render() {

        return (
            <ApolloProvider>
                <View style={{
                    backgroundColor: "#fff",
                    zIndex: 9,
                    height: 60,
                    marginTop: 25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TouchableHighlight
                        underlayColor={null}
                        onPress={() => this.props.navigation.openDrawer()}
                        style={{
                            height: 100,
                            width: 30,
                            zIndex: 9,
                            position: 'absolute',
                            left: 30,
                            top: 18
                        }}
                    >
                        <Icon style={{color:"#303030"}} name="menu" size={24} />
                    </TouchableHighlight>
                    <Text style={{
                        flex: 1,
                        position:'absolute',
                        textAlign:'center',
                        fontSize: 18,
                        fontWeight: '600',
                    }}>EVENTS</Text>
                </View>
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
        marginTop: 25,
        width: Dimensions.get('window').width,
    }
});
