
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import 'angular-translate';
import 'angular-animate';
import '@uirouter/angularjs';

import Common from './common';
import Pal from './pal'
import AppConfig from './app.config';
import AppStartUp from './app.startup'


import styles from '../assets/styles/styles.scss';

/* @ngInject */
const appModule = angular
	.module('app', [
        ngMaterial,
        ngSanitize,
		'ngAnimate',
        'ui.router',
        'pascalprecht.translate',
        Common,
        Pal
	])
	.config(AppConfig)
	.run(AppStartUp);

export default appModule;
