import { Model } from 'objection';

export default class Institutions extends Model {
  static get tableName() {
    return 'kmmInstitutions';
  }

}
