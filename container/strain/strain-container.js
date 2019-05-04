import React from 'react';
import { graphql } from 'react-apollo';
import { View, Image } from 'react-native'
import gql from "graphql-tag";

import { FadeInView } from "../../components/fade-in-view/fade-in-view";


const StrainContainer = (props) => {
    const { data } = props

    return data && !data.loading ?
        (
            <View>
                <FadeInView>
                    {props.render(data.strains)}
                </FadeInView>
            </View>

        ) : <View>
                <Image style={{width: 100, height: 100}} source={{uri: 'https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp'}}/>
        </View>
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
    happy
    relaxed
    euphoric
  }  
}
`)(StrainContainer);
