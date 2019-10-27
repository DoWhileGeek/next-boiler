import React from 'react';
import NextApp from 'next/app';
import {ApolloProvider} from '@apollo/react-hooks';

import withData from '../apolloClient';

class App extends NextApp {
  render() {
    const {Component, pageProps, apollo} = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(App);
