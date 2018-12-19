import Splits from '../db/splits';
import Payees from '../db/payees';
import Transactions from '../db/transactions';

export default {
  Split: {
      amount: async(split) => split.amount(),
      payee: async({ payeeId }) => {
          if( payeeId ) return Payees.query().findById(payeeId);
          return null;
      },
      transaction: async({transactionId}) => {
          return Transactions.query().findById(transactionId);
      },
  },
};
