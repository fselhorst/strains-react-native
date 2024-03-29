import React from 'react';
import {StyleSheet,  Text, View, ScrollView, TouchableHighlight,Dimensions, Image, Button} from 'react-native';
import ApolloProvider from '../../providers/apollo/apollo-provider'
import {EventCard} from "../../components/event-card/event-card";
import EventContainer from "../../container/event/event-container";
import Icon from "@expo/vector-icons/Entypo";

export default class EventsScreen extends React.Component {
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
                        fontSize: 24,
                        fontWeight: '600',
                    }}>Events</Text>
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
        paddingBottom: 30
    }
});
