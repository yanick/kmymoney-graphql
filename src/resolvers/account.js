
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

export default {
  Query: {
    accounts: () => accounts,
    account: (parent,{id}) => accounts.find( a => a.id === id ),
  },
}
