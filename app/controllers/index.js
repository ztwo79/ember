import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		delete:function(post){
			// Ember.Logger.log(post.get("id")); 
			this.store.find('post', post.get("id")).then(function (post) {
				post.deleteRecord();
				// post.get('isDeleted'); // => true
				// post.save(); // => DELETE to /posts/1
			  	// post.destroyRecord(); // => DELETE to /posts/2
			});
		},
		edit:function(post){
			this.transitionToRoute("edit-post" , post.get("id"));
			// this.transitionToRoute("edit-post", post);
			// Ember.Logger.log("edit");
		}

	}
});

