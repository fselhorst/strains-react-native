import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import {Card} from "../../components/card/card";
import {MetaDataBlocks} from "../../components/meta-data-blocks/meta-data-blocks";
import {ProgressBar} from "../../components/progress-bar/progress-bar";

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

    navigateToPage = (strain) => this.props.navigation.navigate('Strain', {strain});

    render() {
        const {navigate} = this.props.navigation;
        const percentage = 50;
        const w =  ( Dimensions.get('window').width - 60 ) * (percentage / 100);

        return (
            <ScrollView contentContainerStyle={styles.container}>
                {data.map(strain => strain && <Card
                    handleOnPress={this.navigateToPage.bind(null, strain)}
                    key={strain.id}
                    data={strain}/>
                )}
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: Dimensions.get('window').width,
    }
})
