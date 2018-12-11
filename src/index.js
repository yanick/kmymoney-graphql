import _ from 'lodash';
import { GraphQLServer } from 'graphql-yoga';

import resolver from './resolvers/account';

const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers: resolver,
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.start( () => console.log(`🚀  Server ready`) );
