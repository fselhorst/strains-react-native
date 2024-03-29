import React from 'react';
import { graphql } from 'react-apollo';
import {View } from 'react-native'

import gql from "graphql-tag";
import {FadeInView} from "../../components/fade-in-view/fade-in-view";

// this just fetches the data and passes it to render func

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
    eventLocation
    price
    startDate
    endDate
    mapsUrl
  }  
}
`)(EventContainer);
