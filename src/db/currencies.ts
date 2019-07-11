import { Model } from 'objection';

export default class Currencies extends Model {
  static get tableName() {
    return 'kmmCurrencies';
  }

  id!: string;

}
