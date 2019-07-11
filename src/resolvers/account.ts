import _ from 'lodash';

import { ref } from 'objection';

import { GQLAccount } from '../schemas';
import Accounts from '../db/accounts';
import Splits from '../db/splits';
import Institutions from '../db/institutions';
import KeyValuePairs from '../db/keyvaluepairs';

const round = (n: number) => _.round( n, 2 );
const toNum = (n:string): number => { return round((new Number(n) as any).valueOf() as any)  };

export default {
  Query: {
    accounts: async () => Accounts.query(),
    account: async (parent: any ,{id }: { id: string } ) => Accounts.query().findById(id),
  },
  Account: {
      is_closed: async( { id }: Accounts ) => {
          return !! await KeyValuePairs.query().findOne({
            kvpType: 'ACCOUNT',
            kvpId: id,
            kvpKey: 'mm-closed',
            kvpData: 'yes',
          })
      },
      isStockAccount: async( { isStockAccount }: Accounts ) => {
          return isStockAccount === 'Y';
      },
      splits: async(account: GQLAccount, { year, month }:{ year: number, month: number} ) => {
        const min_date = `${year}-${ _.padStart( ""+month, 2, '0' ) }`;
        const max_date = `${year}-${ _.padStart( ""+(month+1), 2, '0' ) }`;
        return Splits.query()
            .where('accountId',account.id)
            .where( 'postDate', '>', min_date )
            .where( 'postDate', '<', max_date )
            .where( 'txtype', 'N' );
      },
      fullname: async( account: GQLAccount ) => {
          let name = account.accountName;
          while(account.parentId) {
              account = (await Accounts.query().findById(account.parentId)) as any;
              name = account.accountName + ' : ' + name;
          }
          return name;
      },
      subaccounts: async( account: GQLAccount ) => {
          return Accounts.query().where( 'parentId', account.id );
      },
      institution:  async ( account: GQLAccount ) =>
        Institutions.query().findOne( 'id', account.institutionId ),
       balance: async( account: Accounts, { date } : { date: string | undefined } ) => {
           let splits = Splits.query().where( 'accountId', account.id );
           if( date ) {
            splits = splits.where( 'postDate', '<=', date );
           }

           const price = await account.priceAt(date);

           return splits.where( 'txtype', 'N' )
                .sum({
                    amount:  ref('sharesFormatted').castFloat()
                } as any)
                .then( ( [{ amount }]: any ) => {
                    return {
                        amount: round(amount),
                        value: round(amount * price),
                        price,
                    }
                })
       },
  },
}

  // fullname!: string;

  // get fullname() {
  //     return this.parentAccount().then( parent => {

  //       let fullname = parent ? parent.fullname + ' : ' + this.accountName
  //                       : this.accountName;

  //       return fullname;
  //     });
  // }
