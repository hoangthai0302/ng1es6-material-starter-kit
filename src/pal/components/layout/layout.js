import template from './layout.html';
import './layout.scss'

export default {
	template,
	controller: class Controller {
		/* @ngInject */
		constructor($log, DialogService, $timeout, $q, $state) {
			Object.assign(this, {
				$log,
				DialogService,
                $timeout,
                $state,
				$q
			})

		}

		$onInit() {

			this.users = null;
            this.$state.go('app.overview')

		}

		searchUsers(text) {
            
            let deferred = this.$q.defer();

			if (!this.users) {

				
				this.$timeout(() => {

					this.users = [{
							id: 1,
							name: 'Scooby Doo'
						},
						{
							id: 2,
							name: 'Shaggy Rodgers'
						},
						{
							id: 3,
							name: 'Fred Jones'
						},
						{
							id: 4,
							name: 'Daphne Blake'
						},
						{
							id: 5,
							name: 'Velma Dinkley'
						},
						{
							id: 6,
							name: 'Fred Jones'
						},
						{
							id: 7,
							name: 'Daphne Blake'
						},
						{
							id: 8,
							name: 'Velma Dinkley'
						}
                    ];
                    if(!text){
                        deferred.resolve(this.users);
                    }else{
                        deferred.resolve(this.users.filter((u)=>{
                            return u.name.indexOf(text) !== -1;
                        }));
                    }


				}, 650);
            }else{
                if(!text){
                    deferred.resolve(this.users);
                }else{
                    deferred.resolve(this.users.filter((u)=>{
                        return u.name.indexOf(text) !== -1;
                    }));
                }
            }
            
            return deferred.promise;
        }
        
        changeState(){
            this.$state.go('app.overview')
        }

		loadUsers() {
			if (this.users) {
				return this.users
			}

			return this.$timeout(() => {

				this.users = [{
						id: 1,
						name: 'Scooby Doo'
					},
					{
						id: 2,
						name: 'Shaggy Rodgers'
					},
					{
						id: 3,
						name: 'Fred Jones'
					},
					{
						id: 4,
						name: 'Daphne Blake'
					},
					{
						id: 5,
						name: 'Velma Dinkley'
					}
				];

			}, 650);
		};

		showDialog() {
			this.DialogService.showComponent('<h3>Hello world</h3>', null, {})

		}

		showConfirm() {
			this.DialogService.confirm({
				title: 'Please confirm',
				message: `<p>Custom html content here <a href='#'>Link</a></p>`
			}).then(() => {
				alert('You;ve click OK');
			})
		}

		showAlert() {
			this.DialogService.alert({
				title: 'Alert',
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}).then(() => {
				alert('You;ve click OK');
			})
		}


	}

};
