import { Model } from 'objection';

export default class Prices extends Model {
  static get tableName() {
    return 'kmmPrices';
  }

  fromId!: string;
  toId!: string;

}
