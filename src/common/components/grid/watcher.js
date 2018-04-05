export default {
    bindings: {
        data: '<?',
        options: '<',
    },
    controller: class Controller {
        /* @ngInject */ 
        constructor($scope, $stateParams, $q, uiGridConstants) {
            Object.assign(this, {
                $scope,
                $stateParams,
                $q,
                uiGridConstants
            });
        }

        $onChanges(changes) {
            //whenever data changes outside grid component, we dont need extra code to handle grid's height
            if (changes.data) {
                // setTimeout(() => {
                //     this.options.adjustHeight();
                //     $(window).trigger('resize');
                //     this.options.gridApi.core.notifyDataChange(this.uiGridConstants.dataChange.ALL);
                // })
            }
        }


    },
    restrict: 'E'
}