import React from 'react';
import {StyleSheet, Animated, TouchableHighlight, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import {Title} from "../../components/title/title";
import {Paragraph} from "../../components/paragraph/paragraph";
import {MetaDataBlocks} from "../../components/meta-data-blocks/meta-data-blocks";
// import Icon from "@expo/vector-icons/FontAwesome5";
import Icon from '@expo/vector-icons/Entypo'
export default class StrainScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerBackTitleVisible: false,
            headerTransparent: 'white',
            headerTintColor: '#303030',
            headerLeftContainerStyle: {
                paddingTop: 42
            }
        };
    };

    state = {
        titleVisible: false,
        titleOpacity: new Animated.Value(0)
    };

    handleOnScroll = (event) => {
        const {nativeEvent: { contentOffset: {y}}} = event;
        if (y > 47 && !this.state.titleVisible) {
            this.setState({
                titleVisible: true
            });

            Animated.timing(this.state.titleOpacity, {
                toValue: 1,
                duration: 250
            }).start()
        } else if (y < 47 && this.state.titleVisible) {
            this.setState({
                titleVisible: false
            });

            Animated.timing(this.state.titleOpacity, {
                toValue: 0,
                duration: 250
            }).start()
        } else {
            return
        }
    };

    render() {
        const {goBack, state: {params}} = this.props.navigation;
        const {id, name, image: {url, width, height}, kind, description} = params.strain;
        const meta = {thc, cbd, sativa, indica, happy, relaxed, euphoric} = params.strain;

        return (
            <View>
                {/*this VIEW should become a header module that accepts page title*/}
                <View style={{
                    backgroundColor: 'transparent',
                    zIndex: 9,
                    height: 60,
                    marginTop: 25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableHighlight
                        underlayColor={null}
                        onPress={() => goBack()}
                        style={{
                            height: 100,
                            width: 40,
                            zIndex: 9,
                            position: 'absolute',
                            left: 26,
                            top: 16
                        }}
                    >
                        <Icon style={{color: "#303030"}} name="chevron-thin-left" size={24}/>
                    </TouchableHighlight>
                    <Animated.View style={{
                        flex: 1,
                        position: 'absolute',
                        opacity: this.state.titleOpacity
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: '600',
                        }}>{name}</Text>
                    </Animated.View>
                </View>
                {/*ENDS HERE*/}
                <ScrollView scrollEventThrottle={1} onScroll={this.handleOnScroll} contentContainerStyle={styles.containerTop}>
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
        paddingTop: 10,
        paddingBottom: 85
    },
    containerBottom: {
        width: Dimensions.get('window').width,
    }
})
