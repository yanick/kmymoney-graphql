import _ from 'lodash';

import account from './account';
import category from './category';
import split from './split';

let resolver = _.merge({}, account, category, split );

console.log(resolver);

export default resolver;

