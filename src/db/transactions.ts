import { Model } from 'objection';

export default class Transactions extends Model {
  static get tableName() {
    return 'kmmTransactions';
  }

}
