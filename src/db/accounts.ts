import { Model } from 'objection';
import Institutions from './institutions';
import Currencies from './currencies';
import Prices from './prices';
import Splits from './splits';

import _ from 'lodash';

const round = (n: number) => _.round( n, 2 );

export default class Accounts extends Model {
  static get tableName() {
    return 'kmmAccounts';
  }

  accountId!: string;
  splits!: Splits;
  id!: string;
  isStockAccount!: string;
  currencyId!: string;

  accountTypeString!: string;

  async priceAt(date?: string): Promise<number> {
      if( this.isStockAccount !== 'Y' ) return 1;

      let prices = Prices.query().where({
          fromId: this.currencyId,
          toId: 'CAD',
      }).orderBy('priceDate','desc');

      if (date) {
          prices = prices.where('priceDate', '<=', date );
      }

      return prices.first().then( (result?: any) =>
                                 round((new Number(result ? result.priceFormatted : 0)).valueOf() ));
  }


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
