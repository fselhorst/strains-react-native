import React from 'react';
import { StyleSheet, ScrollView,View, Text } from 'react-native';
import ViewWithoutOverflow from 'react-native-view-overflow';


import { DrawerItems, SafeAreaView } from 'react-navigation';
import {CustomDrawerItems} from "../custom-drawer-items/custom-drawer-items";
import {FooterBottomBlocks} from "../../components/footer-bottom-blocks/footer-bottom-blocks";

export const CustomDrawer = props => (
    <View style={{flex: 1, overflow: "hidden"}}>
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <CustomDrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
        <ViewWithoutOverflow>
            <FooterBottomBlocks />
        </ViewWithoutOverflow>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
