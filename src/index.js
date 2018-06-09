import express from 'express';
//import bodyParser from 'body-parser';
//import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
//import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';

import './config/db';
//import typeDefs from './graphql/schema';
//import resolvers from './graphql/resolvers';
//import constants from './config/constants';
import mocks from './mocks';
import middlewares from './config/middlewares';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import constants from './config/constants';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

const app = express();
middlewares(app);

 app.use('/graphiql',graphiqlExpress({ endpointURL: constants.GRAPHQL_PATH,
                                       subscriptionsEndpoint: `ws://localhost:${constants.PORT}${constants.SUBSCRIPTIONS_PATH}`
                                     }), );
 
 const schema = makeExecutableSchema({ typeDefs, resolvers,});
 app.use( constants.GRAPHQL_PATH, graphqlExpress(req => ({ schema,context:{user: req.user}})),);

//const schema = makeExecutableSchema({ typeDefs, resolvers,});
//app.use(bodyParser.json()); //midleware
//app.use('/graphiql',graphiqlExpress({ endpointURL: constants.GRAPHQL_PATH,}), );
//app.use( constants.GRAPHQL_PATH, graphqlExpress(req => ({ schema,})),);

const graphQLServer = createServer(app);

//app.listen(constants.PORT, err =>
 //mocks().then(() => {
    graphQLServer.listen(constants.PORT, err =>
    {   if (err){   console.error(err);   } 
        else {  new SubscriptionServer({ schema,execute,subscribe}, { server: graphQLServer, path: constants.SUBSCRIPTIONS_PATH })
                console.log(`App listen to port: ${constants.PORT}`);  
             }
    });
//});