import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"; // 1.0.0-beta.27
import { StrainCard } from "../../components/strain-card/strain-card";
import ApolloProvider from '../../providers/apollo/apollo-provider'
import StrainContainer from '../../container/strain/strain-container'

export default class HomeScreen extends React.Component {

    handleClickStrain = (strain) => {
        this.props.navigation.navigate('Detail', {strain})
    };

    render() {
        return (
            <ApolloProvider>
                <View style={{
                    backgroundColor: "#fff",
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
                            width: 30,
                            zIndex: 9,
                            position: 'absolute',
                            left: 30,
                            top: 18
                        }}
                    >
                        <Icon style={{color:"#303030"}} name="menu" size={24} />
                    </TouchableHighlight>
                    <Text style={{
                        flex: 1,
                        position:'absolute',
                        textAlign:'center',
                        fontSize: 18,
                        fontWeight: '600',
                    }}>STRAINS</Text>
                </View>
                <ScrollView contentContainerStyle={styles.container}>
                    <StrainContainer render={(strains) => {
                        return strains.map( strain => {
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
        marginTop: 25
    }
});
