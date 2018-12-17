import { ref } from 'objection';

import { GQLAccount } from '../schemas';
import Accounts from '../db/accounts';
import Splits from '../db/splits';
import Institutions from '../db/institutions';

export default {
  Query: {
    accounts: async () => Accounts.query(),
    account: async (parent: any ,{id }: { id: string } ) => Accounts.query().findById(id),
  },
  Account: {
      subaccounts: async( account: GQLAccount ) => {
          return Accounts.query().where( 'parentId', account.id );
      },
      institution:  async ( account: GQLAccount ) =>
        Institutions.query().findOne( 'id', account.institutionId ),
       balance: async( account: Accounts, { date } : { date: String | undefined } ) => {
           let splits = Splits.query().where( 'accountId', account.id );
           if( date ) {
            splits = splits.where( 'postDate', '<=', date );
           }
           return splits.where( 'txtype', 'N' )
                .sum({ balance:  ref('sharesFormatted').castFloat() })
                .then( ( obj: GQLAccount[] ) => {
                    return obj[0].balance
                })
       },
  }
}
