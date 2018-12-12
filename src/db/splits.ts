import { Model } from 'objection';

export default class Split extends Model {
  static get tableName() {
    return 'kmmSplits';
  }

}
