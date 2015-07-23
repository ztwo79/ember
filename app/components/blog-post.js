import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		// create post
		save:function(post){
			 this.sendAction('save' ,post);
		}
	}
});
