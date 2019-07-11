import Accounts from '../db/accounts';
import Splits from '../db/splits';
import Payees from '../db/payees';
import Transactions from '../db/transactions';
import _ from 'lodash';

import { GQLAccount } from '../schemas';

const round = (n: number) => _.round( n, 2 );
const toNum = (n:string): number => { return round((new Number(n) as any).valueOf() as any)  };

export default {
  Split: {
      account: async({ accountId }: Splits ) => {
          return Accounts.query().findById(accountId);
      },
      shares: async({sharesFormatted}: Splits) => toNum(sharesFormatted),
      amount: async({sharesFormatted}: Splits) => toNum(sharesFormatted),
      value: async({valueFormatted}: Splits) => toNum(valueFormatted),
      price: async({priceFormatted}: Splits) => toNum(priceFormatted),
      payee: async({ payeeId }: Splits) => {
          if( payeeId ) return Payees.query().findById(payeeId);
          return null;
      },
      transaction: async({transactionId}: Splits) => {
          return Transactions.query().findById(transactionId);
      },
      associatedSplits: async({ splitId, transactionId }: Splits) => {
          return Splits
            .query()
            .where('transactionId', transactionId )
            .where( 'splitId', '!=', splitId );
      }
  },
};
