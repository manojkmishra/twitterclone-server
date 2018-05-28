import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import constants from './constants';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers,});

export default app => 
{ app.use(bodyParser.json());
  app.use('/graphiql',graphiqlExpress({ endpointURL: constants.GRAPHQL_PATH,}), );
  app.use( constants.GRAPHQL_PATH, graphqlExpress(req => ({ schema,})),);
}