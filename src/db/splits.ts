import { Model } from 'objection';

import Payees from './payees';
import Transactions from './transactions';

export default class Splits extends Model {
  static get tableName() {
    return 'kmmSplits';
  }

  amount() { return (new Number(this.sharesFormatted)).valueOf() }

  static get relationMappings()  {
      return {
        transaction: {
        relation: Model.BelongsToOneRelation,
        modelClass: Transactions,
        join: {
            from: 'kmmSplits.transactionId',
            to: 'kmmTransactions.id'
        }
    },
        payee: {
        relation: Model.BelongsToOneRelation,
        modelClass: Payees,
        join: {
            from: 'kmmSplits.payeeId',
            to: 'kmmPayees.id'
        }
    },
      }
  };

}
