import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Animated,
    ScrollView,
    Dimensions,
    TextInput
} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"; // 1.0.0-beta.27
import {StrainCard} from "../../components/strain-card/strain-card";
import ApolloProvider from '../../providers/apollo/apollo-provider'
import StrainContainer from '../../container/strain/strain-container'

export default class StrainsScreen extends React.Component {
    state = {
        text: '',
        searchVisible: false,
        searchHeight: new Animated.Value(0)
    };

    handleClickStrain = (strain) => {
        this.props.navigation.navigate('Detail', {strain})
    };

    handleClickSearch = () => {
        const { searchVisible } = this.state;
        if (searchVisible) {
            Animated.timing(this.state.searchHeight, {
                toValue: 0,
                timing: 250
            }).start();
            this.setState({ searchVisible: false, text: '' })
        } else {
            Animated.timing(this.state.searchHeight, {
                toValue: 65,
                timing: 250
            }).start();
            this.setState({ searchVisible: true })

        }
    };

    render() {
        console.log(JSON.stringify(this.props.navigation));

        return (
            <ApolloProvider>
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
                        onPress={() => this.props.navigation.openDrawer()}
                        style={{
                            height: 100,
                            width: 40,
                            zIndex: 9,
                            position: 'absolute',
                            left: 30,
                            top: 18
                        }}
                    >
                        <Icon style={{color: "#303030"}} name="menu" size={24}/>
                    </TouchableHighlight>

                    <Text style={{
                        flex: 1,
                        position: 'absolute',
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                    }}>{this.props.navigation.state.routeName}</Text>
                    <TouchableHighlight
                        underlayColor={null}
                        onPress={this.handleClickSearch}
                        style={{
                            height: 100,
                            width: 40,
                            zIndex: 9,
                            position: 'absolute',
                            right: 15,
                            top: 18
                        }}
                    >
                        {this.state.searchVisible ? <Icon style={{color: "#303030"}} name="cross" size={24}/> : <Icon style={{color: "#303030"}} name="magnifying-glass" size={24}/>}
                    </TouchableHighlight>
                </View>
                {/*ENDS HERE*/}
                <Animated.View style={{
                    opacity: this.state.searchHeight,
                    height: this.state.searchHeight,
                    overflow:'hidden',
                    zIndex:11
                }}>
                    <TextInput
                        placeholder={"Search (ex: sativa, rainbow kush)"}
                        style={{
                            fontSize: 18,
                            height: 55,
                            backgroundColor: "#E7E7E7",
                            marginLeft: 30,
                            marginRight: 30,
                            borderRadius: 100,
                            padding: 16
                        }}
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text})}
                    />
                </Animated.View>
                <ScrollView contentContainerStyle={styles.container}>
                    <StrainContainer render={(strains) => {
                        return strains.filter(s => {
                            return this.state.text.length !== 0 ?
                                s.name.toLowerCase().indexOf(this.state.text.toLowerCase()) >= 0 || s.kind.toLowerCase().indexOf(this.state.text.toLowerCase()) >= 0 : true
                        }).map(strain => {
                            return <StrainCard
                                key={strain.id}
                                handleOnPress={() => this.handleClickStrain(strain)}
                                data={strain}
                            />
                        })
                    }}/>
                </ScrollView>
            </ApolloProvider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        zIndex: 3,
        marginTop: 25,
        paddingBottom: 25
    }
});
