import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	    create: function() {
	        // fetch all post 
	        var posts = this.store.peekAll("post");
	        // Ember.Logger.log(posts);
	        // var post = this.get("post"); 
	        Ember.Logger.log("post length : "+posts.get("length"));
	        var id = posts.get("length")+1;
	        Ember.Logger.log("id:"+id);
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
			this.store.createRecord('post', {
				id: id,
 			 	title: this.post.title,
	      		body: this.post.body
			});
			// direct to index page
			this.transitionToRoute("index");
	    }
  	}
});
