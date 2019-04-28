import React from 'react';
import {StyleSheet,TouchableHighlight, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import { Title } from "../../components/title/title";
import { Paragraph } from "../../components/paragraph/paragraph";
import { MetaDataBlocks } from "../../components/meta-data-blocks/meta-data-blocks";
import {Button} from "../../components/button/button";

export default class StrainScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitleVisible: false,
            headerTransparent: 'white',
            headerTintColor: '#303030',
            headerLeftContainerStyle: {
                paddingTop: 42
            }
        };
    };


    render() {
        const {navigate, state: {params}} = this.props.navigation;
        const { id, name, image: {url, width, height}, kind, origin, description,} = params.strain;
        const meta = { thc, cbd, sativa, indica, dismiss, happy, relaxed, euphoric } = params.strain

        return (
            <View>
                <Button styles={{
                    position: 'absolute',
                    left: 30,
                    right: 30,
                    bottom: 30,
                    zIndex: 10,
                    shadowOffset:{  width: 2,  height: 2,  },
                    shadowColor: 'black',
                    shadowOpacity: 0.35,
                }} onPress={() => this.props.navigation.goBack()}>GO BACK</Button>
            <ScrollView contentContainerStyle={styles.containerTop}>
                <View style={styles.containerTop}>
                    <Title styles={{fontSize: 28}}>{name}</Title>
                    <Paragraph
                        styles={{marginTop: 8, color: '#CCC', textTransform: "uppercase"}}
                        align="center"
                    >
                        {kind}
                    </Paragraph>
                    <Image
                        style={{width: width / 1.5, height: height / 1.5}}
                        source={{
                            uri: url
                        }}/>
                    <Paragraph styles={{lineHeight: 26}}>{description}</Paragraph>
                </View>
                <View style={styles.containerBottom}>
                    <Paragraph styles={{
                        fontSize: 24,
                        left: 30,
                        top: 30,
                        fontWeight: "700",
                        color: "#303030",
                    }}>DETAILS</Paragraph>
                    <MetaDataBlocks meta={meta}/>
                </View>
            </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerTop: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 110
    },
    containerBottom: {
        width: Dimensions.get('window').width,
    }
})
