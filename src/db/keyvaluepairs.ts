import { Model } from 'objection';

export default class KeyValuePairs extends Model {
  static get tableName() {
    return 'kmmKeyValuePairs';
  }

}
