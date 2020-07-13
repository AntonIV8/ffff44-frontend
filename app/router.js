import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ffff44-animal-l');
  this.route('i-i-s-ffff44-animal-e',
  { path: 'i-i-s-ffff44-animal-e/:id' });
  this.route('i-i-s-ffff44-animal-e.new',
  { path: 'i-i-s-ffff44-animal-e/new' });
  this.route('i-i-s-ffff44-cat-l');
  this.route('i-i-s-ffff44-cat-e',
  { path: 'i-i-s-ffff44-cat-e/:id' });
  this.route('i-i-s-ffff44-cat-e.new',
  { path: 'i-i-s-ffff44-cat-e/new' });
  this.route('i-i-s-ffff44-dog-l');
  this.route('i-i-s-ffff44-dog-e',
  { path: 'i-i-s-ffff44-dog-e/:id' });
  this.route('i-i-s-ffff44-dog-e.new',
  { path: 'i-i-s-ffff44-dog-e/new' });
});

export default Router;
