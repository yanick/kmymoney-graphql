import _ from 'lodash';
const { ApolloServer, gql } = require('apollo-server');

import { typeDefs as Account, resolvers as accountResolvers }
    from './schemas/account';

const resolvers = {};

const server = new ApolloServer({
    typeDefs: [ Account ],
    resolvers: _.merge( resolvers, accountResolvers ),
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
