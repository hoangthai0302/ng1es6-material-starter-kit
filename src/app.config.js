import routes from './routes'
/* @ngInject */
export default function appConfig(
	$stateProvider,
	$locationProvider,
	$urlRouterProvider,
	$httpProvider,
	$mdAriaProvider,
	$mdThemingProvider,
	$mdDateLocaleProvider
) {
	// Globally disables all ARIA warnings.
	$mdAriaProvider.disableWarnings();
	$mdThemingProvider.theme('default')
        .primaryPalette('blue')
        
	$locationProvider.html5Mode(true); // setting html5 mode to remove !# from url
	$urlRouterProvider.otherwise('/'); // setting default route

	routes.forEach((route) => {
		$stateProvider.state(route);
	});
}
