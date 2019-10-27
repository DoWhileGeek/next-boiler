import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import gql from 'graphql-tag';

const GREETING = gql`
  query {
    greeting
  }
`;

const Index = () => {
  const {loading, error, data} = useQuery(GREETING);

  if (loading) return <p>Loading ...</p>;

  return <p>{data.greeting}</p>;
};

export default Index;
