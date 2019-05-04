import React from 'react';
import { Button, Image, View, Text,Dimensions  } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import {StrainsScreen, StrainScreen, EventsScreen, MerchandiseScreen, LocationsScreen } from './screens/'
import { CustomDrawer } from "./navigator/custom-drawer/custom-drawer";
import { Icon } from "@expo/vector-icons/Entypo"; // 1.0.0-beta.27

const TestDrawerNavigator = createDrawerNavigator({
    Strains: {
        screen: StrainsScreen,
    },
    Events: {
        screen: EventsScreen,
    },
    Locations: {
        screen: LocationsScreen
    },
    Merchandise: {
        screen: MerchandiseScreen
    }
},{
    initialRouteName: 'Locations',
    drawerType: "front",
    hideStatusBar: true,
    drawerIcon: () => (
        <Icon
            onPress={() => navigation.openDrawer()}
            name="hamburger"
            size={20}
        />
    ),
    contentComponent: (props) => <CustomDrawer {...props}/>
});




const MainStack = createStackNavigator(
    {
        Strains: {
            screen: StrainsScreen,
        },
        Events: {
            screen: EventsScreen,
        },
        Strain: {
            screen: StrainScreen
        },
        Locations: {
            screen: LocationsScreen
        },
        Merchandise: {
            screen: MerchandiseScreen
        }
    }
);

const RootStack = createStackNavigator(
    {
        Main: TestDrawerNavigator,
        Detail: {
            screen: StrainScreen,
        },
    },
    {
        mode: 'card',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
