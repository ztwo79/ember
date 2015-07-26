import Ember from 'ember';

export default Ember.Route.extend({
	// post :
	model : function(){
		var post = {
			title:"",
			body:""
		}; 
		return post;
	},
	actions: {
	    create: function(post) {
	        // store data
	  //       this.store.push({
			// 	"data" : 
			// 	[
			// 		{
			// 			type:"post",
			// 		    id: id,
			// 		    "attributes": {
		 //     			 	title: this.title,
			// 	      		body: this.body
		 //    			}
			// 	    }
			//     ]
			// });
			// create the post
			var postRecord = this.store.createRecord('post', {
				// id: id,
 			 	title: post.title,
	      		body: post.body
			});
			postRecord.save();
			// direct to index page
			this.transitionTo("index");
	    }
  	}
});
