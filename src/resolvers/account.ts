import _ from 'lodash';

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
      splits: async(account: GQLAccount, { year, month } ) => {
        const min_date = `${year}-${ _.padStart( month, 2, '0' ) }`;
        const max_date = `${year}-${ _.padStart( month+1, 2, '0' ) }`;
        return Splits.query()
            .where('accountId',account.id)
            .where( 'postDate', '>', min_date )
            .where( 'postDate', '<', max_date )
            .where( 'txtype', 'N' );
      },
      fullname: async( account: GQLAccount ) => {
          let name = account.accountName;
          while(account.parentId) {
              account = await Accounts.query().findById(account.parentId);
              name = account.accountName + ' : ' + name;
          }
          return name;
      },
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

  // fullname!: string;

  // get fullname() {
  //     return this.parentAccount().then( parent => {

  //       let fullname = parent ? parent.fullname + ' : ' + this.accountName
  //                       : this.accountName;

  //       return fullname;
  //     });
  // }
