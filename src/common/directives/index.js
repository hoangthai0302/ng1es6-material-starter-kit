import NgEnter from './ngEnter.directive';
import perfectScroll from './perfectScrollbar.directive'

export default angular
    .module('hmx-common.directives', [])
    .directive('ngEnter', NgEnter)
    .directive('perfectScroll', perfectScroll)
    .name;