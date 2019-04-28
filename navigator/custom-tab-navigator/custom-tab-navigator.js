import React from 'react'
import {View, TouchableHighlight, Dimensions, Text, StyleSheet} from 'react-native'
import Icon from "@expo/vector-icons/FontAwesome";

const routes = [
    {
        name: 'Home',
        icon: 'home'
    },{
        name: 'Events',
        icon: 'leaf'
    }
]

const tabNavigatorStyles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: "#303030",
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'row',
    },
    tab: {
        height: 55,
        backgroundColor: '#303030',
        width: Dimensions.get('window').width / routes.length,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabIcon: {
        color: "#fff"
    },
    tabLabel: {
        color: "#fff"
    }
})

export const CustomTabNavigator = ({routes: {state, actions}, handleNavigate}) => {
    const activeRoute = state.routeName;
    const { goBack, pop, popToTop, push, replace, navigate, reset, setParams } = actions;

    return (
        <View style={[tabNavigatorStyles.container]}>
            {routes.map(({name, icon}) => {
                return <TouchableHighlight key={name} onPress={() => handleNavigate(name)} style={tabNavigatorStyles.tab}>
                    <Icon size={24} name={icon} style={tabNavigatorStyles.tabIcon}/>
                </TouchableHighlight>
            })}
        </View>
    )
}

//     <TouchableHighlight style={tabNavigatorStyles.tab}>
//         <Icon size={24} name="home" style={tabNavigatorStyles.tabIcon}/>
// </TouchableHighlight>
