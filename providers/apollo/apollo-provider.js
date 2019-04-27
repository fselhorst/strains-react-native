import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink, createHttpLink  } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, graphql } from 'react-apollo';

export default class extends Component {
    constructor(...args) {
        super(...args);

        this.client = new ApolloClient({
            link: createHttpLink({ uri: 'https://api-euwest.graphcms.com/v1/cjuzqbiu32mqn01etkoutx3xv/master' }),
            cache: new InMemoryCache(),
        });
    }
    render() {
        const { children } = this.props
        return (
            <ApolloProvider client={this.client}>
                {children}
            </ApolloProvider>
        );
    }
}
