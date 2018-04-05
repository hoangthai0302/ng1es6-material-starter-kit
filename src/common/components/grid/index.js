import Grid from './grid';
import watcher from './watcher';

export default angular.module('grid', [
])
.component('watcher', watcher)
.component('angularGrid',Grid)
.name;