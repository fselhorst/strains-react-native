import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/home/HomeScreen";
import StrainScreen from "./screens/strain/StrainScreen";
import EventsScreen from "./screens/events/EventsScreen"; // 1.0.0-beta.27

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Events: {
            screen: EventsScreen,
        },
        Strain: {
            screen: StrainScreen
        }
    },
    {
        // headerMode: 'none', // toggle this and uncomment bottom part to enable styled tabBar ( you can override by adding static navigationOptions per Screen )
        initialRouteName: 'Home',
        headerTitle: "KUSH",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#303030',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Detail: {
            screen: StrainScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
