import { Model } from 'objection';
import Institutions from './institutions.ts';
import Splits from './splits.ts';

export default class Accounts extends Model {
  static get tableName() {
    return 'kmmAccounts';
  }

  static get relationMappings()  {
      return {
    institution: {
      relation: Model.BelongsToOneRelation,
      modelClass: Institutions,
      join: {
        from: 'kmmAccounts.institutionId',
        to: 'kmmInstitutions.id'
      }
    },
    splits: {
      relation: Model.HasManyRelation,
      modelClass: Splits,
      join: {
        from: 'kmmAccounts.id',
        to: 'kmmSplits.accountId'
      }
    }
      }
  };
}
