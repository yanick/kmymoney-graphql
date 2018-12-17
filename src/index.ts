import _ from 'lodash';
import { GraphQLServer } from 'graphql-yoga';
import { Model } from 'objection';
import Knex  from 'knex';

import resolver from './resolvers/index.ts';

const knex = Knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: '/home/yanick/budget/books/tad.sqlite'
  }
});
Model.knex(knex);

const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers: resolver,
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.start( () => console.log(`🚀  Server ready`) );
