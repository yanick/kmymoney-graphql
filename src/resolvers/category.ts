import { GQLAccount } from '../schemas';
import { ref } from 'objection';
import Accounts from '../db/accounts';

export default {
  Query: {
    category: async( parent: any, { name } : { name: string } ) => {
        return { name };
    },
    categories: async() =>
        Accounts.query().distinct('accountTypeString')
            .then( r => r.map( x => ({name: x.accountTypeString}) )
            )
  },
  Category: {
      root_accounts: async ( {name} : { name: string } ) => {
          return Accounts.query().where( 'accountTypeString', name )
            .where( 'parentId',  null )
      },
  }
}
