import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller) {
		// initialize an empty post
		var post = {
			title:"",
			body:""
		};
		controller.set("post", post);
	}
});
