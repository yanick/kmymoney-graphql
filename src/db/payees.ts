import { Model } from 'objection';

export default class Payees extends Model {
  static get tableName() {
    return 'kmmPayees';
  }
}
