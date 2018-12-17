import _ from 'lodash';

import account from './account';
import category from './category';

let resolver = _.merge({}, account, category );

console.log(resolver);

export default resolver;

