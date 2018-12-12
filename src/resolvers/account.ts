import { GQLAccount } from '../schemas';
import { ref } from 'objection';
import Accounts from '../db/accounts';
import Institutions from '../db/institutions';
import Splits from '../db/splits';

export default {
  Query: {
    accounts: async () => Accounts.query(),
    account: async (parent: any ,{id }: { id: String } ) => Accounts.query().findById(id),
  },
  Account: {
      institution:  async ( account: GQLAccount ) =>
        Institutions.query().findOne( 'id', account.institutionId ),
       balance: async( account: GQLAccount, { date } : { date: String | undefined } ) => {
           return Splits.query().where( 'postDate', '<=', date )
                .where( 'accountId', account.id )
                .where( 'txtype', 'N' )
                .sum({ balance:  ref('sharesFormatted').castFloat() }).then( obj => {
                    return obj[0].balance
                })
       },
  }
}
