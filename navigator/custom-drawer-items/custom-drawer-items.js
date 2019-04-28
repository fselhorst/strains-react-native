import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableHighlight, View, Animated } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import {MetaDataBlocks} from "../../components/meta-data-blocks/meta-data-blocks";
import {FooterBottomBlocks} from "../../components/footer-bottom-blocks/footer-bottom-blocks";

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,

        flex: 1
    },
    drawerItem: {
        marginBottom: 35,
    },
    drawerItemText: {
        fontSize: 32,
    }
});

export const CustomDrawerItems = props => {

    const { items, activeItemKey } = props;
    return <View style={styles.container}>
        <TouchableHighlight
            underlayColor={null}
            onPress={() => props.navigation.goBack()}
        >
            <Icon style={{marginBottom: 35}} name="cross" size={24}/>
        </TouchableHighlight>
        {items.map(route => {
            return <Animated.View key={route.key}>
                <TouchableHighlight
                    underlayColor={null}
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate(route.routeName)}
                >
                    <Text
                        style={{
                            ...styles.drawerItemText,
                            fontWeight: activeItemKey === route.key ? "900" : "600"
                        }}>
                        {route.routeName}
                    </Text>
                </TouchableHighlight>
            </Animated.View>
        })}
    </View>
};
