import React from 'react';
import {StyleSheet,Image, Text, View, ScrollView, TouchableHighlight, Dimensions} from 'react-native';
import ApolloProvider from '../../providers/apollo/apollo-provider'
import Icon from '@expo/vector-icons/Entypo';
import {Button} from "../../components/button/button";
import LocationContainer from "../../container/location/location-container";
import {LocationCard} from "../../components/location-card/location-card";
export default class LocationsScreen extends React.Component {
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
                        <Icon style={{color: "#303030"}} name="menu" size={24}/>
                    </TouchableHighlight>
                    <Text style={{
                        flex: 1,
                        position: 'absolute',
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                    }}>{this.props.navigation.state.routeName}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.container}>
                    <Image style={{width: 25, height: 25}} source={{uri: './maps-min.png'}}/>
                    <Button
                        textStyles={{
                            fontSize: 12
                        }}
                        styles={{
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginBottom: 30
                        }}
                    >
                        <Icon name="location-pin" size={20}/> NAVIGATE TO NEAREST</Button>
                    <LocationContainer render={(locations) => {
                        return locations.map( location => {
                            return <LocationCard key={location.id} data={location}/>
                        })
                    }}/>
                </ScrollView>
            </ApolloProvider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        width: Dimensions.get('window').width,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 130
    }
});
