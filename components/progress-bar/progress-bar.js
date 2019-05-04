import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export const ProgressBar = ({percentage = 100, style, color}) => {
    const paddingLeftAndRight = 60;
    const progress =
        ( Dimensions.get('window').width - paddingLeftAndRight ) * ( +percentage / 100 );
    return (
        <View contentContainerStyle={[styles.container, style]}>
            <View style={{
                width: Dimensions.get('window').width - 60,
                height: 20,
                backgroundColor: '#636363',
                borderRadius: 50,
                ...style,
                left: Dimensions.get('window').width / 2 - (Dimensions.get('window').width / 2 - 30 )
            }}>
                <View style={{
                    width: progress,
                    height: 22,
                    backgroundColor: color,
                    borderRadius: 50,
                    left: Dimensions.get('window').width / 2 - (Dimensions.get('window').width / 2 ),
                    top: -0.5,
                    boxShadow: "0 2px 20px -6px #FE672E",
                    shadowOffset:{
                        width: 2,
                        height: 2,
                    },
                    shadowColor: color,
                    shadowOpacity: 0.3,
                    elevation: 3
                }}>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: Dimensions.get('window').width,
    }
})
