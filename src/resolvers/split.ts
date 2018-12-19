import Splits from '../db/splits';
import Payees from '../db/payees';

export default {
  Split: {
      amount: async(split) => split.amount(),
      payee: async({ payeeId }) => {
          if( payeeId ) return Payees.query().findById(payeeId);
          return null;
      }
  },
};
