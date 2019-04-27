import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import {Title} from "../../components/title/title";
import {Paragraph} from "../../components/paragraph/paragraph";
import {MetaDataBlocks} from "../../components/meta-data-blocks/meta-data-blocks";

export default class StrainScreen extends React.Component {

    render() {
        const {navigate, state: {params}} = this.props.navigation;
        const {id, name, image: {src}, kind, origin, description, meta} = params.strain;

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.containerTop}>
                    <Title styles={{fontSize: 28}}>{name}</Title>
                    <Paragraph
                        styles={{marginTop: 8, color: '#CCC', textTransform: "uppercase"}}
                        align="center"
                    >
                        {kind}
                    </Paragraph>
                    <Image
                        style={{width: 250, height: 250}}
                        source={{
                            uri: src
                        }}/>
                    <Paragraph styles={{lineHeight: 26}}>{description}</Paragraph>
                </View>
                <View style={styles.containerBottom}>
                    <Paragraph styles={{
                        fontSize: 24,
                        left: 30,
                        top: 30,
                        fontWeight: "600",
                        color: "#303030",
                    }}>DETAILS</Paragraph>
                    <MetaDataBlocks meta={meta}/>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    containerTop: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        padding: 30
    },
    containerBottom: {
        width: Dimensions.get('window').width,
    }
})
