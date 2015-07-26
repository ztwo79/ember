import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		return this.store.find('post', params.post_id);
	} ,
	actions:{
		// save post
		submit:function(edited_post){
			this.store.find("post" ,edited_post.get("id")).then(function(post){
				post.set("title" , edited_post.get("title"));
				post.set("body" , edited_post.get("body"));
				post.save();
			});
			// var post =this.store.push({
			// 	"data" : 
			// 	[
			// 		{
			// 			type:"post",
			// 		    id: edited_post.get("id"),
			// 		    "attributes": {
		 //     			 	title: edited_post.get("title"),
			// 	      		body: edited_post.get("body")	    
		 //    			}
			// 	    }
			//     ]
			// }); 
			// post.save();
			this.transitionTo("index");			
		}
	}
});
