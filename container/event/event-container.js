import React from 'react';
import { graphql, ApolloProvider } from 'react-apollo';
import {View, Text, Image, TouchableHighlight} from 'react-native'

import gql from "graphql-tag";
import {FadeInView} from "../../components/fade-in-view/fade-in-view";


const EventContainer = (props) => {
    const { data } = props

    return data && !data.loading ?
        (
            <View>
                <FadeInView>
                    {props.render(data.events)}
                </FadeInView>
            </View>

        ) : null
};

export default graphql(gql` {
  events {
    id
    name
    location
    price
    startDate
    endDate
    mapsUrl
  }  
}
`)(EventContainer);
