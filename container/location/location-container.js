import React from 'react';
import { graphql } from 'react-apollo';
import {View } from 'react-native'

import gql from "graphql-tag";
import {FadeInView} from "../../components/fade-in-view/fade-in-view";

// this just fetches the data and passes it to render func

const LocationContainer = (props) => {
    const { data } = props;
    console.log({data})
    return data && !data.loading ?
        (
            <View>
                <FadeInView>
                    {props.render(data.lokaties)}
                </FadeInView>
            </View>

        ) : null
};

export default graphql(gql` {
  lokaties {
      id
      name
      address
      description
      lat
      lng
      image {
          url
      }
  }  
}
`)(LocationContainer);
