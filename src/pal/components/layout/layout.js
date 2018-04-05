import template from './layout.html';
import './layout.scss'

export default {
	template,
	controller: class Controller {
		/* @ngInject */
		constructor($log, hmxDialog, $timeout, $q, $state) {
			Object.assign(this, {
				$log,
				hmxDialog,
                $timeout,
                $state,
				$q
			})

		}

		$onInit() {

			this.users = null;
            this.$state.go('app.overview');
           
		}


		


	}

};
