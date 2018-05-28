import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';

import './config/db';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import constants from './config/constants';

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers,});

app.use(bodyParser.json()); //midleware

app.use('/graphiql',graphiqlExpress({ endpointURL: constants.GRAPHQL_PATH,}), );

app.use( constants.GRAPHQL_PATH, graphqlExpress(req => ({ schema,})),);

const graphQLServer = createServer(app);

//app.listen(constants.PORT, err =>
graphQLServer.listen(constants.PORT, err =>
{   if (err) {   console.error(err);   } 
    else {  console.log(`App listen to port: ${constants.PORT}`);  }
});