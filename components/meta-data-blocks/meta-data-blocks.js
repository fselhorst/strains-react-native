import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { SkewedRectangle } from '../../components/skewed-rectangle/skewed-rectangle';
import {ProgressBar} from "../progress-bar/progress-bar";
import {Paragraph} from "../paragraph/paragraph";

const styles = StyleSheet.create({
    container: {
        zIndex: 1
    },
    skew: {
        transform: [
            {
                skewX: '-45deg'
            },
            {
                rotate: '-17deg'
            }
        ]
    },

});

export const MetaDataBlocks = ({meta}) => {
    const {
        sativa,
        indica,
        thc,
        cbd,
        happy,
        relaxed,
        euphoric
    } = meta;

    return (
        <View style={styles.container}>
            {thc && <SkewedRectangle color="#FEBD27" title={"THC"} subTitle={thc + "%"}/>}
            {cbd && <SkewedRectangle color="#FE672E" title={"CBD"} subTitle={cbd + "%"}/>}
            {sativa && <SkewedRectangle color="#F52E3A" title={"SATIVA"} subTitle={sativa + "%"}/>}
            {indica && <SkewedRectangle style={{marginBottom: -40}} color="#CF2467" title={"INDICA"} subTitle={indica + "%"}/>}
            <View style={{
                position:'relative',
                zIndex: -1,
                backgroundColor:"#303030",
                height: 375,
                width: Dimensions.get('window').width,
                paddingTop: 120,
            }}
            >
                <Paragraph styles={{marginLeft: 30, marginBottom:10, color:"#fff"}}level="large">HAPPY</Paragraph>
                <ProgressBar color="#FEBD27" style={{marginBottom: 20}} percentage={happy}/>
                <Paragraph styles={{marginLeft: 30, marginBottom:10, color:"#fff"}}level="large">RELAXED</Paragraph>
                <ProgressBar color="#FE672E" style={{marginBottom: 20}} percentage={relaxed}/>
                <Paragraph styles={{marginLeft: 30, marginBottom:10, color:"#fff"}}level="large">EUPHORIC</Paragraph>
                <ProgressBar color="#F52E3A" style={{marginBottom: 20}} percentage={euphoric}/>
            </View>
        </View>
    )
}
