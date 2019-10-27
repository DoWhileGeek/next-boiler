import {ApolloServer, gql} from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting(parent, args, context) {
      return 'Welcome to Next.js!';
    },
  },
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({path: '/api/graphql'});
