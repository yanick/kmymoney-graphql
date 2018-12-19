import { Model } from 'objection';
import Institutions from './institutions.ts';
import Splits from './splits.ts';

export default class Accounts extends Model {
  static get tableName() {
    return 'kmmAccounts';
  }

  splits!: Splits;

  accountTypeString!: string;


  static get relationMappings()  {
      return {
    parentAccount: {
      relation: Model.BelongsToOneRelation,
      modelClass: Accounts,
      join: {
        from: 'kmmAccounts.parentId',
        to: 'kmmAccounts.id'
      }
    },
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
