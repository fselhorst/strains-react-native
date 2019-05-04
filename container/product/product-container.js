import React from 'react';
import { graphql  } from 'react-apollo';
import {View } from 'react-native'

import gql from "graphql-tag";
import {FadeInView} from "../../components/fade-in-view/fade-in-view";

// this just fetches the data and passes it to render func

const ProductContainer = (props) => {
    const { data, style } = props;

    return data && !data.loading ?
        (
            <View style={style}>
                <FadeInView>
                    {props.render(data.products)}
                </FadeInView>
            </View>

        ) : null
};

export default graphql(gql` {
  products {
    id
    name
    price
    image {
       url
    }
  }  
}
`)(ProductContainer);
