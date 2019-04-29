import React from 'react';
import { Button, Image, View, Text,Dimensions  } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from "./screens/home/HomeScreen";
import StrainScreen from "./screens/strain/StrainScreen";
import EventsScreen from "./screens/events/EventsScreen";
import { CustomDrawer } from "./navigator/custom-drawer/custom-drawer";
import { Icon } from "@expo/vector-icons/Entypo"; // 1.0.0-beta.27

const TestDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Events: {
        screen: EventsScreen,
    },
},{
    initialRouteName: 'Home',
    drawerType: "front",
    hideStatusBar: true,
    drawerIcon: ({ tintColor }) => (
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
        Home: {
            screen: HomeScreen,
        },
        Events: {
            screen: EventsScreen,
        },
        Strain: {
            screen: StrainScreen
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
