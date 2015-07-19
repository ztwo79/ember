import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('create-post' );
  this.route('edit-post' ,{ path: '/edit-post/:post_id' });
});

export default Router;
