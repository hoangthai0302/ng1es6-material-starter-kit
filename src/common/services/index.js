import angular from 'angular';

import ApiService from './api.service';
import DialogService from './dialog.service';
import CacheService from './cache.service';

const ServicesModule = angular
  .module('common.services', [])
  .service('ApiService', ApiService)  
  .service('DialogService', DialogService)
  .service('CacheService', CacheService)
  .name;

export default ServicesModule;
