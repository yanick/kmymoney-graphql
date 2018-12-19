import { Model } from 'objection';

import Payees from './payees';

export default class Splits extends Model {
  static get tableName() {
    return 'kmmSplits';
  }

  // static get virtualAttributes() {
  //   return ['amount'];
  // }

  amount() { return (new Number(this.sharesFormatted)).valueOf() }

  static get relationMappings()  {
      return {
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
