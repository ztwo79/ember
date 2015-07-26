import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function() {
   //  	if(posts.get("length")===0){
			// /**
			//  * store.push only accept JSON API formate from latest version
			//  *  http://jsonapi.org/format/
			//  * @type {String}
			//  */
			// // this.store.push({
			// // 	"data" : 
			// // 	[
			// // 		{
			// // 			type:"post",
			// // 		    id: "1",
			// // 		    "attributes": {
		 // //     			 	title: "first title",
			// // 	      		body: " body one  : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt id, a esse officiis distinctio maxime quidem iure temporibus ad laboriosam pariatur repudiandae necessitatibus atque! Qui molestias perspiciatis tempora, eos quisquam!"	    
		 // //    			}
			// // 	    },
			// // 	    {
			// // 			type:"post",
			// // 		    id: "2",
			// // 		    "attributes": {
	 	// // 		 	    	title: "second title",
			// // 			   	body: " body two : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, autem, architecto, sunt tenetur ipsam officiis voluptatibus consequuntur modi doloribus voluptatem quas eius. Possimus maiores aspernatur esse sequi rerum quibusdam. Ea, distinctio. Fugiat reiciendis odio dignissimos! Libero dignissimos animi culpa ipsa alias optio blanditiis, quae in aliquid itaque, perspiciatis voluptatibus aut cum architecto odio cumque. Ducimus, vitae adipisci tenetur voluptatem deleniti numquam deserunt facilis pariatur laborum asperiores. Temporibus necessitatibus, a, neque quos nulla eum deserunt suscipit delectus laborum nostrum, facere dolorem earum officiis voluptatem alias voluptas. Quas quam aliquid perspiciatis suscipit veniam autem in minima quisquam natus officia est possimus totam hic molestiae quos laudantium dolore maxime mollitia, corrupti consequatur rem excepturi nesciunt officiis, beatae? Quibusdam neque voluptate odit nobis nam commodi illum, quam omnis accusamus excepturi iure consequatur id similique, cum fugit itaque maxime harum tempore unde quo nihil atque fuga suscipit autem inventore! Dolore fugit aliquam nihil iste numquam dicta eius adipisci, ab inventore cumque veniam aspernatur tenetur, sint. Laudantium, totam repudiandae assumenda unde mollitia aperiam ex numquam accusamus voluptatibus, nam excepturi, veniam suscipit ipsum tenetur voluptates consequuntur iure illum tempore eum nihil non distinctio. Aspernatur excepturi, officia pariatur non reprehenderit iusto rerum doloremque aliquam quod! Dolores veritatis rem, eum dolor ut. Iure beatae fuga quasi quia suscipit, natus voluptas nostrum, dolores consectetur, assumenda deleniti quisquam eaque eum totam architecto consequuntur."
		 // //    			}
			// // 	    },
			// // 	    {
			// // 			type:"post",
			// // 		    id: "3",
			// // 		    "attributes": {
	 	// // 		 	    	title: "Fewer Moving Parts",
			// // 			   	body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae reiciendis iste debitis doloribus, quam dolorem quasi aperiam architecto laudantium veniam dolor nam, qui exercitationem dolorum veritatis nobis est alias totam repudiandae error fugit voluptate eaque, delectus nesciunt. Consectetur consequuntur ea officiis, neque eum animi laboriosam maiores nisi vitae necessitatibus vel ipsum accusamus, ducimus optio. Vel omnis voluptatibus esse, magni quam consequuntur delectus, eum est praesentium temporibus, repellat fuga. Natus repellendus dicta ullam dolore, ex corporis, itaque sit temporibus consectetur distinctio, at unde dolores, magnam amet molestiae. Nesciunt, alias dolore. Ab debitis nostrum velit! Vero, porro ullam nobis ex, officia delectus cum consequatur dolore quas laboriosam veritatis deserunt. Ipsa at rem quidem sit, possimus voluptatibus beatae pariatur aperiam. Vitae laboriosam voluptate amet assumenda, aperiam ad repellat, animi quod iste porro, optio aliquid. Ex eligendi mollitia aut fuga deleniti vel quisquam porro pariatur repellendus natus quia soluta dolor, dignissimos cumque modi ad, architecto sequi ratione perspiciatis harum exercitationem dolorem provident. Amet blanditiis illum dolores culpa maxime doloremque sit quo, placeat cupiditate numquam! Error nisi enim explicabo nam veniam modi deserunt ipsam sint hic officiis animi, aut quia fuga quaerat neque mollitia repellat eaque totam ex corporis et quisquam nemo architecto maxime. Neque."
		 // //    			}
			// // 	    }
			// //     ]
			// // }); 
   //  	}
		// return this.store.all("post"); 
		// return this.store.findAll("post"); 
		// return this.store.peekAll("post");
		
		return this.store.findAll("post");
		
  	} ,
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
			this.transitionTo("edit-post" , post.get("id"));
		}

	},
  	// set template
  	renderTemplate: function() {
    	// var controller = this.controllerFor('favoritePost');
	    // // Render the `favoritePost` template into
	    // // the outlet `posts`, and use the `favoritePost`
	    // // controller.
	    // this.render('favoritePost', {
	    //   outlet: 'posts',
	    //   controller: controller
	    // });
	    // this.render('favoritePost', {   // the template to render
	    //   	into: 'posts',                // the template to render into
	    //   	outlet: 'posts',              // the name of the outlet in that template
	    //   	controller: 'blogPost'        // the controller to use for the template
	    // });


    	this.render('index');
		// set different controller
    	// this.render({ controller: 'favoritePost' });
    	// this.render('posts');
  	}

});
