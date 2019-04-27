import React from 'react';
import { graphql, ApolloProvider } from 'react-apollo';
import { View, Text } from 'react-native'

import gql from "graphql-tag";
import {Card} from "../../components/card/card";

const StrainContainer = (props) => {
    const { data } = props

    return data && !data.loading ?
        (
            <View>
                {props.render(data.strains)}
            </View>
        ) : <View><Text>Loading....</Text></View>
};

export default graphql(gql` {
  strains {
    id
    name
    description
    kind
    image {
        url
        height
        width
    }
    thc
    cbd
    sativa
    indica
  }  
}
`)(StrainContainer);
