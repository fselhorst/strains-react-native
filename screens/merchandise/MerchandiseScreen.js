import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableHighlight, Dimensions} from 'react-native';
import ApolloProvider from '../../providers/apollo/apollo-provider'
import Icon from '@expo/vector-icons/Entypo';
import ProductContainer from "../../container/product/product-container";
import {MerchandiseCard} from "../../components/merchandise-card/merchandise-card";
import {Paragraph} from "../../components/paragraph/paragraph";
import {Button} from "../../components/button/button";

export default class MerchandiseScreen extends React.Component {
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
                    justifyContent: 'center',
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
                        <Icon style={{color: "#303030"}} name="menu" size={24}/>
                    </TouchableHighlight>
                    <Text style={{
                        flex: 1,
                        position: 'absolute',
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                    }}>{this.props.navigation.state.routeName}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.container}>
                    <ProductContainer style={{flex: 1}} render={(products) => {
                        return <View
                            style={{
                                flex: 1,
                                paddingLeft: 30,
                                paddingRight: 30,
                            }}
                        >
                            <Paragraph styles={{textAlign:'center', marginBottom: 30}}>All our merchandise is available for purchase at each location.</Paragraph>
                            {products.map( product => ( <MerchandiseCard key={product.id} data={product}/> ))}
                            <Button>GO TO NEAREST LOCATION</Button>
                        </View>
                    }}/>
                </ScrollView>
            </ApolloProvider>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        width: Dimensions.get('window').width,
        paddingBottom: 95
    }
});
