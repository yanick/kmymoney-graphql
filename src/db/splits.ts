import { Model } from 'objection';

export default class Splits extends Model {
  static get tableName() {
    return 'kmmSplits';
  }

}
