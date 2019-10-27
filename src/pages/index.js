import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import gql from 'graphql-tag';

import styles from './index.scss';

const GREETING = gql`
  query {
    greeting
  }
`;

const Index = () => {
  const {loading, error, data} = useQuery(GREETING);

  if (loading) return <p>Loading ...</p>;

  return <p className={styles.greeting}>{data.greeting}</p>;
};

export default Index;
