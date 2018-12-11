const { gql } = require('apollo-server');

export const typeDefs = gql`

  type Account {
    id: String
    fullname: String
  }

  type Query {
    accounts: [Account],
    account(id: String!): Account,
  }
`;

const accounts = [
  {
      id: "1",
      fullname: "stuff",
  },
  {
      id: "2",
      fullname: "foo",
  },
];

export const resolvers = {
  Query: {
    accounts: () => accounts,
    account: (parent,{id}) => accounts.find( a => a.id === id ),
  },
}
