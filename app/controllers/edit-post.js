import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		submit:function(edited_post){
			this.store.find("post" ,edited_post.get("id")).then(function(post){
				post.set("title" , edited_post.get("title"));
				post.set("body" , edited_post.get("body"));
				// post.save();
			});
			this.transitionToRoute("index");			
		}
	}
});
