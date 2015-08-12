import Ember from 'ember';

export default Ember.Route.extend({
	// post :
	model : function(){
    //create post
    var post = this.store.createRecord("post");
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
			//var postRecord = this.store.createRecord('post', {
			//	// id: id,
 			// 	title: post.title,
	      	//	body: post.body
			//});

			post.save();
			// direct to index page
			this.transitionTo("index");
	    }
  	}
});
