import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Animated,
    Easing,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image, Platform, Linking, Button
} from 'react-native';
import {StrainCard} from "../../components/strain-card/strain-card";
import ApolloProvider from '../../providers/apollo/apollo-provider'
import StrainContainer from '../../container/strain/strain-container'
import Icon from "@expo/vector-icons/Entypo"; // 1.0.0-beta.27

export default class HomeScreen extends React.Component {

    handleClickStrain = (strain) => {
        this.props.navigation.navigate('Detail', {strain})
    };

    render() {
        return (
            <ApolloProvider>
                <TouchableHighlight
                    underlayColor={null}
                    onPress={() => this.props.navigation.openDrawer()}
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 30,
                        height: 30,
                        width: 30,
                        zIndex: 4,
                        flex: 1,
                    }}
                >
                    <Icon style={{color:"#303030"}} name="menu" size={24} />
                </TouchableHighlight>
                <ScrollView contentContainerStyle={styles.container}>
                    <StrainContainer render={(strains) => {
                        return strains.map( strain => {
                            return <StrainCard
                                key={strain.id}
                                handleOnPress={() => this.handleClickStrain(strain)}
                                key={strain.id}
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
        paddingTop: 100
    }
})
