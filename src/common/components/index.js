import hmxChips from './chips';

import cardItem from './card-item/card-item';
import inputsearch from './input-search/input-search.component'
export default angular.module('hmx-common.components', [
    hmxChips
])
.component('hmxCardItem', cardItem)
.component('hmxInputSearch', inputsearch)
.name;

