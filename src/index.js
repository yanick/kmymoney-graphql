"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var objection_1 = require("objection");
var knex_1 = require("knex");
var account_1 = require("./resolvers/account");
var knex = knex_1["default"]({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: '/home/yanick/budget/books/tad.sqlite'
    }
});
objection_1.Model.knex(knex);
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers: account_1["default"]
});
// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.start(function () { return console.log("\uD83D\uDE80  Server ready"); });
