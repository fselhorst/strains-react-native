import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Animated,
    Easing,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image, Platform, Linking, Button
} from 'react-native';
import {StrainCard} from "../../components/strain-card/strain-card";
import ApolloProvider from '../../providers/apollo/apollo-provider'
import StrainContainer from '../../container/strain/strain-container'
import {EventCard} from "../../components/event-card/event-card";
import EventContainer from "../../container/event/event-container";
import {FadeInView} from "../../components/fade-in-view/fade-in-view";
import StrainScreen from "../strain/StrainScreen";
import { BottomTabBar } from 'react-navigation';
import TabNavigationView from "react-navigation-tabs/src/navigators/createBottomTabNavigator";
import {CustomTabNavigator} from "../../navigator/custom-tab-navigator/custom-tab-navigator";

const data = require('../../json/strains.json');
const image = "https://amsterdammarijuanaseeds.com/media/catalog/product/cache/1/thumbnail/450x450/9df78eab33525d08d6e5fb8d27136e95/r/a/rainbow-kush-fem-2_big_1.jpg"

const meta = {
    "thc": "35%",
    "cbd": "0-5%",
    "indica": "35%",
    "sativa": "65%",
    "happy": 100,
    "relaxed": 90,
    "euphoric": 50
};

export default class HomeScreen extends React.Component {

    handleClickStrain = (strain) => {
        this.props.navigation.navigate('Detail', {strain})
    };

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: "STRAINS",
            headerLeft: (
                <Text
                    onPress={() => { navigation.navigate('Events')}}
                    style={{color:"#fff", fontSize: 18, marginLeft: 8}}
                >Events</Text>
            )
        };
    };

    render() {

        return (
            <ApolloProvider>
                <ScrollView contentContainerStyle={styles.container}>
                    <StrainContainer render={(strains) => {
                        return strains.map( strain => {
                            return <StrainCard
                                key={strain.id}
                                handleOnPress={() => this.handleClickStrain(strain)}
                                key={strain.id}
                                data={strain}
                            />
                        })
                    }}/>
                </ScrollView>
            </ApolloProvider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        zIndex: 3,
        paddingTop: 45
    }
})
